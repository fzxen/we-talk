import { useStore } from "canglin";

const initialState = {
  menus: [
    {
      icon: "icon-menu1",
      key: "all",
      name: "全部收藏",
    },
    {
      icon: "icon-Note",
      key: "note",
      name: "笔记",
    },
    {
      icon: "icon-folder",
      key: "file",
      name: "文件",
    },
    {
      icon: "icon-image",
      key: "img",
      name: "相册",
    },
    {
      icon: "icon-Link",
      key: "link",
      name: "链接",
    },
    {
      icon: "icon-tag",
      key: "tag",
      name: "标签",
    },
  ],
  activeMenu: "all",
};

export function useFavoriteStore() {
  const [state, setState] = useStore("favorite", initialState);

  function setActive(key: string) {
    setState((state) => ({ ...state, ...{ activeMenu: key } }));
  }

  return {
    state,
    setActive,
  };
}
