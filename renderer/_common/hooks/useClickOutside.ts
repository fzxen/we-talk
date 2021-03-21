import { useEffect } from "react";
export default function useClickOutside(
  poperSelector: string,
  triggerSelector: string,
  callback: () => void
) {
  useEffect(() => {
    const popper = document.querySelector(poperSelector);
    const trigger = document.querySelector(triggerSelector);

    const fn = (e: any) => {
      if (popper && trigger !== e.target && !popper.contains(e.target))
        callback();
    };

    document.addEventListener("click", fn);

    return () => document.removeEventListener("click", fn);
  });
}
