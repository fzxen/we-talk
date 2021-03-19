import electronDrag from "electron-drag";

export default function useWindowDrag(selector: string) {
  const dom: HTMLElement | null = document.querySelector(selector);

  if (dom === null) return undefined;
  console.log(electronDrag);

  // if (!electronDrag.supported) {
  //   dom.style.setProperty("-webkit-app-region", "drag");
  //   return undefined;
  // }
  const clear = electronDrag(dom);

  return clear;
}
