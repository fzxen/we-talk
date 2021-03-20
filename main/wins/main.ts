import { BrowserWindow } from "electron";
import isDev from "electron-is-dev";
import config from "../../app.config";

export default function createMainWin() {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    minHeight: 500,
    minWidth: 850,
    frame: false,
    titleBarStyle: "hidden",
    backgroundColor: "#f3f2f7",
    // icon: "./statics/icon.ico",

    webPreferences: {
      // nodeIntegration: true,
      devTools: isDev,
    },
  });

  const { host, port } = config;
  isDev
    ? win.loadURL(`http://${host}:${port}/main.html`)
    : win.loadFile("./public/main.html");

  return win;
}
