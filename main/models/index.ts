import { ipcMain } from "electron";
import Store from "electron-store";

export default function createStore() {
  const store = new Store({
    name: "oplayer",
    defaults: {
      sources: [
        // {
        //   id: "000001",
        //   name: "A Song of Ice and Fire",
        //   size: 16 * 1024 * 1024, // unit kb
        //   mime: "video/mp4",
        //   position: "C:\\Users\\zx_fa\\Desktop\\说唱.mp4",
        //   cid: "1901235",
        //   mediaInfo: {
        //     duration: 30, // unit s
        //   },
        // },
      ],
      categories: [
        {
          id: "1901235",
          name: "My Favorite",
          createTime: 1605681555737,
        },
        {
          id: "1901236",
          name: "Recently",
          createTime: 1605681555737,
        },
      ],
      showSide: true,
    },
  });

  return store;
}
