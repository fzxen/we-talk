import webpack, { Configuration } from "webpack";
import DevServer from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin, {
  loader as ExtractLoader,
} from "mini-css-extract-plugin";
import CssMinimizer from "css-minimizer-webpack-plugin";
import EslintWebpackPlugin from "eslint-webpack-plugin";
import { build } from "electron-builder";
import path from "path";
import { readdirSync } from "fs";
import log from "./log";
import config from "../app.config";
import merge from "webpack-merge";
import TerserPlugin from "terser-webpack-plugin";

const ab = (relative: string) => path.resolve(__dirname, relative);

function scanPages() {
  const dirs = readdirSync(path.resolve(__dirname, "../renderer"));
  return dirs.filter((dir) => /^[A-Za-z]/.test(dir));
}
const pages = scanPages();

function genRendererBaseConfig(
  mode: "development" | "production"
): Configuration {
  const isDev = mode === "development";
  return {
    entry: pages.reduce<{ [prop: string]: any }>((entry, page) => {
      entry[page] = ab(`../renderer/${page}/index.tsx`);
      return entry;
    }, {}),
    // target: "electron-renderer",
    mode,
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "@": ab("../renderer"),
        _common: ab("../renderer/_common"),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["ts-loader"],
        },
        {
          test: /\.css$/,
          use: [
            isDev ? "style-loader" : ExtractLoader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  mode: "local",
                  auto: true,
                  localIdentName: isDev
                    ? "[path][name]__[local]"
                    : "[hash:base64]",
                },
              },
            },
          ],
        },
        {
          test: /\.(mp4|flv|mp3|png|jpg|jpeg|gif|svg)$/,
          use: ["url-loader"],
        },
      ],
    },
    plugins: [
      ...pages.map(
        (page) =>
          new HtmlWebpackPlugin({
            template: ab(`../renderer/${page}/index.html`),
            filename: `${page}.html`,
            chunks: [page],
          })
      ),
    ],
  };
}

export function runRenderer() {
  const base = genRendererBaseConfig("development");
  return new Promise<void>((resolve, reject) => {
    const options = merge(base, {
      output: {
        filename: "[name].js",
        path: ab("../app/public"),
      },
      mode: "development",
      devtool: "inline-cheap-module-source-map",
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new EslintWebpackPlugin({
          cache: true,
          fix: true,
          threads: true,
          extensions: ["ts", "tsx", "js", "jsx"],
        }),
      ],
    });

    const compiler = webpack(options);

    compiler.hooks.done.tap("buildTip", () => {
      log.success("================???????????? ????????????================");
    });

    const server = new DevServer(compiler, {
      inline: true,
      hot: true,
      overlay: {
        errors: true,
      },
    });
    const { host, port } = config;
    server.listen(port, host, (err) => {
      if (err) {
        log.error(err.message);
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export function buildRenderer() {
  const base = genRendererBaseConfig("production");
  return new Promise<void>((resolve, reject) => {
    const options = merge(base, {
      output: {
        filename: "[name].[chunkhash].js",
        path: ab("../app/public"),
      },
      mode: "production",
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            extractComments: true,
            terserOptions: {
              compress: {
                unused: true,
                drop_debugger: true,
                drop_console: true,
                dead_code: true,
              },
            },
          }),
          new CssMinimizer(),
        ],
      },
      plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: "assets/style/[name].[contenthash].css",
        }),
      ],
    });

    const compiler = webpack(options);

    compiler.run((err, stats) => {
      if (err) {
        log.error("================???????????? ????????????================\n" + err);
        reject(err);
      } else if (stats && stats.hasErrors()) {
        const data = stats.toJson();
        log.error(
          "================???????????? ????????????================\n" +
            data.errors?.join("\n")
        );
        reject(data);
      } else {
        log.success("================???????????? ????????????================");
        const result = stats?.toJson();

        log.tip(`Time: ${result?.time}ms`);
        log.tip(`output: ${result?.outputPath}`);
        log.tip(`webpack version: ${result?.version}`);

        resolve();
      }
    });
  });
}

export function buildMain(mode: "production" | "development") {
  return new Promise<void>((resolve, reject) => {
    const options: Configuration[] = [
      {
        entry: ab("../main/index.ts"),
        output: {
          filename: "index.js",
          path: ab("../app"),
        },
        resolve: {
          extensions: [".ts", ".js"],
        },
        node: {
          __dirname: true,
        },
        mode: "production",
        target: "electron-main",
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: ["ts-loader"],
            },
          ],
        },
      },
      {
        entry: pages.reduce<{ [prop: string]: any }>((entry, page) => {
          entry[page] = ab(`../renderer/${page}/preload.ts`);
          return entry;
        }, {}),
        output: {
          filename: "[name]_preload.js",
          path: ab("../app/preload"),
        },
        target: "electron-main",
        mode: "production",
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: ["ts-loader"],
            },
          ],
        },
        plugins: [new EslintWebpackPlugin({ fix: true, extensions: [".ts"] })],
      },
    ];

    const compiler = webpack(options);

    mode === "development"
      ? compiler.watch(
          {
            poll: 1000, // ?????????????????????
            aggregateTimeout: 500, // ?????? ???????????????????????????
            ignored: /node_modules/, // ????????????
          },
          catchError
        )
      : compiler.run(catchError);

    function catchError(err: any, stats: any) {
      if (err) {
        log.error("================????????? ????????????================\n" + err);
        reject(err);
      } else if (stats && stats.hasErrors()) {
        const data = stats.toJson();
        log.error(
          "================????????? ????????????================\n" +
            data.errors?.map((err: any) => err.message).join("\n")
        );
        reject(data);
      } else {
        log.success("================????????? ????????????================");
        const result = stats?.toJson();

        log.tip(`Time: ${result?.time}ms`);
        log.tip(`output: ${result?.outputPath}`);
        log.tip(`webpack version: ${result?.version}`);

        resolve();
      }
    }
  });
}

export function buildElectron() {
  return build({
    config: {
      asar: true, // asar ?????? ???????????????
      productName: config.appName, // ????????????
      appId: "com.Zenas.MYAPP",
      copyright: "Zenas All Rights Reserved",
      directories: {
        // app: '' // ?????????????????????
        output: "install", // ???????????????????????????
        // buildResources: '' // ???????????????????????? ??????????????????
      },
      mac: {
        category: "music",
        icon: "app/statics/icon.png",
        target: {
          target: "dmg",
          arch: ["x64", "arm64"],
        },
      },
      dmg: {
        // background: '' //?????????
        // window: {width: 540, height: 380} // ??????????????????
        contents: [
          {
            x: 410,
            y: 150,
            type: "link",
            path: "/Applications",
          },
          {
            x: 130,
            y: 150,
            type: "file",
          },
        ],
        // icon: ''
        // iconSize: 128
      },

      win: {
        icon: "app/statics/icon.png",
        target: [
          {
            target: "nsis",
            arch: ["x64"],
          },
        ],
      },
      nsis: {
        oneClick: false, // ????????? ??????
        allowElevation: true,
        allowToChangeInstallationDirectory: true, // ????????????????????????
        installerIcon: "app/statics/icon.png",
        uninstallerIcon: "app/statics/icon.png",
        installerHeaderIcon: "app/statics/icon.png",
        createDesktopShortcut: true,
        createStartMenuShortcut: true,
        shortcutName: "skyWebRemote",
      },
    },
  });
}
