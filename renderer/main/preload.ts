import { contextBridge, ipcRenderer } from "electron";

const ipcApi = {
  minimizeWindow() {
    ipcRenderer.send("minimize-main-window");
  },
  maximizeWindow() {
    ipcRenderer.send("maximize-main-window");
  },
  closeWindow() {
    ipcRenderer.send("close-main-window");
  },
  async getMinimizedStatus() {
    return await ipcRenderer.invoke("get-main-status");
  },
  platform: process.platform,
};

export type IpcApi = typeof ipcApi;

contextBridge.exposeInMainWorld("ipcApi", ipcApi);
