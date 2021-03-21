import { BrowserWindow, ipcMain, app } from "electron";
import isDev from "electron-is-dev";
import config from "../../app.config";
import path from "path";

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
      // contextIsolation: false,
      devTools: isDev,
      preload: path.resolve(app.getAppPath(), "./preload/main_preload.js"),
    },
  });

  const { host, port } = config;
  isDev
    ? win.loadURL(`http://${host}:${port}/main.html`)
    : win.loadFile("./public/main.html");

  ipcMain.on("minimize-main-window", () => {
    win.minimize();
  });
  ipcMain.on("maximize-main-window", () => {
    if (win.isMaximized()) win.unmaximize();
    else win.maximize();
  });
  ipcMain.on("close-main-window", () => {
    win.close();
  });

  ipcMain.handle("get-main-status", () => {
    return win.isMaximized();
  });

  return win;
}
