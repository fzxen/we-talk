import { app } from "electron";

import createMainWin from "./wins/main";

import isDev from "electron-is-dev";

// * windows
let mainWin;
// * lifeStyle
app.whenReady().then(() => onReady());
async function onReady() {
  mainWin = createMainWin();
}
