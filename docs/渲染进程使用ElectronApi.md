# 渲染进程使用Electron API

## ContextIsolation

处于安全考虑，`Electron12`默认开启了上下文隔离（context isolation），它会将**上下文环境**划分两个运行环境——**主环境**和**隔离环境**

主环境：渲染进程所运行的环境，无法访问到Electron API

隔离环境：preload脚本所运行的环境，能够访问到Electron API

`ContextIsolation`是默认开启的

```typescript
new BrowserWindow({
  webPreference: {
    contextIsolation: true // 默认就是true
    preload: 'path to your preload js file', // 设置preload脚本
  }
})
```

## ContextBridge

通过使用[ContextBridge](https://www.electronjs.org/docs/api/context-bridge#contextbridgeexposeinmainworldapikey-api-experimental)，可以通过隔离环境将`Electron API`暴露给主环境

```typescript
// 隔离环境
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'electron',
  {
    doThing: () => ipcRenderer.send('do-a-thing')
  }
)
```

主环境直接在window对象上使用`window.electron.doThing()`