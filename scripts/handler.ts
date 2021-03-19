import webpack, { Configuration } from "webpack";
import DevServer from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { VueLoaderPlugin } from "vue-loader";
import MiniCssExtractPlugin, {
  loader as ExtractLoader,
} from "mini-css-extract-plugin";
import EslintWebpackPlugin from "eslint-webpack-plugin";
import { build } from "electron-builder";
import path from "path";
import { readdirSync } from "fs";
import log from "./log";
import config from "../app.config";

const ab = (relative: string) => path.resolve(__dirname, relative);

function scanPages() {
  const dirs = readdirSync(path.resolve(__dirname, "../renderer"));
  return dirs.filter((dir) => !dir.startsWith("_"));
}

export function runRenderer() {
  const pages = scanPages();
  return new Promise<void>((resolve, reject) => {
    const options: Configuration[] = [
      {
        entry: pages.reduce<{ [prop: string]: any }>((entry, page) => {
          entry[page] = ab(`../renderer/${page}/index.ts`);
          return entry;
        }, {}),
        output: {
          filename: "[name].js",
          path: ab("../renderer/landing/dist"),
        },
        // target: "electron-renderer",
        mode: "development",
        resolve: {
          extensions: [".ts", ".vue", ".js"],
          alias: {
            "@": ab("../renderer"),
            _common: ab("../renderer/_common"),
          },
        },
        devtool: "inline-cheap-module-source-map",
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: [
                {
                  loader: "ts-loader",
                  options: {
                    transpileOnly: true,
                    appendTsSuffixTo: [/\.vue$/],
                  },
                },
              ],
              exclude: /node_modules/,
            },
            {
              test: /\.vue$/,
              use: ["vue-loader"],
            },
            {
              test: /\.css$/,
              loader: "css-loader",
            },
            {
              test: /\.scss$/,
              use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
              test: /\.(mp4|flv|mp3|png|jpg|jpeg|gif)$/,
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
          new VueLoaderPlugin(),
          new webpack.HotModuleReplacementPlugin(),
          new EslintWebpackPlugin({ fix: true, extensions: [".ts", ".vue"] }),
        ],
      },
    ];

    const compiler = webpack(options);

    compiler.hooks.done.tap("buildTip", () => {
      log.success("================渲染进程 构建完毕================");
    });

    const server = new DevServer(compiler, {
      // inline: true,
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
  const pages = scanPages();
  return new Promise<void>((resolve, reject) => {
    const options: Configuration[] = [
      {
        entry: pages.reduce<{ [prop: string]: any }>((entry, page) => {
          entry[page] = ab(`../renderer/${page}/index.ts`);
          return entry;
        }, {}),
        output: {
          filename: "[name].[chunkhash].js",
          path: ab("../app/public"),
        },
        // target: "electron-renderer",
        mode: "production",
        resolve: {
          extensions: [".ts", ".vue", ".js"],
          alias: {
            "@": ab("../renderer"),
            _common: ab("../renderer/_common"),
          },
        },
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: [
                {
                  loader: "ts-loader",
                  options: {
                    transpileOnly: true,
                    appendTsSuffixTo: [/\.vue$/],
                  },
                },
              ],
              exclude: /node_modules/,
            },
            {
              test: /\.vue$/,
              use: ["vue-loader"],
            },
            {
              test: /\.css$/,
              loader: "css-loader",
            },
            {
              test: /\.scss$/,
              use: [ExtractLoader, "css-loader", "sass-loader"],
            },
            {
              test: /\.(mp4|flv|mp3|png|jpg|jpeg|gif)/,
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
          new CleanWebpackPlugin(),
          new VueLoaderPlugin(),
          new MiniCssExtractPlugin({
            filename: "assets/style/[name].[contenthash].css",
          }),
        ],
      },
    ];

    const compiler = webpack(options);

    compiler.run((err, stats) => {
      if (err) {
        log.error("================渲染进程 构建失败================\n" + err);
        reject(err);
      } else if (stats && stats.hasErrors()) {
        const data = stats.toJson();
        log.error(
          "================渲染进程 构建失败================\n" +
            data.errors?.join("\n")
        );
        reject(data);
      } else {
        log.success("================渲染进程 构建完毕================");
        const result = stats?.toJson();

        log.tip(`Time: ${result?.time}ms`);
        log.tip(`output: ${result?.outputPath}`);
        log.tip(`webpack version: ${result?.version}`);

        resolve();
      }
    });
  });
}

export function buildMain() {
  return new Promise<void>((resolve, reject) => {
    const options: Configuration = {
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
    };

    const compiler = webpack(options);

    compiler.watch(
      {
        poll: 1000, // 每秒询问多少次
        aggregateTimeout: 500, // 防抖 多少毫秒后再次触发
        ignored: /node_modules/, // 忽略监听
      },
      (err, stats) => {
        if (err) {
          log.error("================主进程 监听失败================\n" + err);
          reject(err);
        } else if (stats && stats.hasErrors()) {
          const data = stats.toJson();
          log.error(
            "================主进程 监听失败================\n" +
              data.errors?.join("\n")
          );
          reject(data);
        } else {
          log.success("================主进程 监听中================");
          const result = stats?.toJson();

          log.tip(`Time: ${result?.time}ms`);
          log.tip(`output: ${result?.outputPath}`);
          log.tip(`webpack version: ${result?.version}`);

          resolve();
        }
      }
    );
  });
}

export function buildElectron() {
  return build({
    config: {
      asar: true, // asar 加密 （易破解）
      productName: config.appName, // 应用名称
      appId: "com.Zenas.MYAPP",
      copyright: "Zenas All Rights Reserved",
      directories: {
        // app: '' // 打包的代码位置
        output: "install", // 打包后代码存放位置
        // buildResources: '' // 构建包的资源目录 图标资源等等
      },
      mac: {
        category: "music",
        icon: "app/statics/icon-1.png",
        target: {
          target: "dmg",
          arch: ["arm64"],
        },
      },
      dmg: {
        // background: '' //背景图
        // window: {width: 540, height: 380} // 安装窗口大小
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
        icon: "app/statics/icon.ico",
        target: [
          {
            target: "nsis",
            arch: ["x64"],
          },
        ],
      },
      nsis: {
        oneClick: false, // 下一步 安装
        allowElevation: true,
        allowToChangeInstallationDirectory: true, // 允许改变安装目录
        installerIcon: "app/statics/icon.ico",
        uninstallerIcon: "app/statics/icon.ico",
        installerHeaderIcon: "app/statics/icon.ico",
        createDesktopShortcut: true,
        createStartMenuShortcut: true,
        shortcutName: "skyWebRemote",
      },
    },
  });
}
