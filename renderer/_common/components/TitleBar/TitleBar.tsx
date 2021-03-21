import React, { useCallback, useEffect, useState } from "react";
import Icon from "_common/components/Icon/Icon";

import type { IpcApi } from "../../../main/preload";
const {
  minimizeWindow,
  getMinimizedStatus,
  closeWindow,
  maximizeWindow,
  platform,
} = (window as any).ipcApi as IpcApi;

import style from "./TitleBar.module.css";

export default function TitleBar() {
  const [isMaximized, setMaximized] = useState(false);
  useEffect(() => {
    async function initMaximized() {
      const maximized = await getMinimizedStatus();
      setMaximized(maximized);
    }
    initMaximized;
  }, []);
  const onMinimize = useCallback(() => {
    minimizeWindow();
  }, []);
  const onMaximize = useCallback(() => {
    maximizeWindow();
    setMaximized((val) => !val);
  }, []);
  const onClose = useCallback(() => {
    closeWindow();
  }, []);
  return (
    <>
      <div className={style.dragBar}>
        {platform !== "darwin" ? (
          <ul className={style.list}>
            <li className="listItem">
              <Icon
                icon="icon-zuixiaohua1"
                title="最小化"
                onClick={onMinimize}
              />
            </li>
            {isMaximized ? (
              <li className="listItem">
                <Icon icon="icon-zuidahua" title="还原" onClick={onMaximize} />
              </li>
            ) : (
              <li className="listItem">
                <Icon
                  icon="icon-zuidahua3"
                  title="最大化"
                  onClick={onMaximize}
                />
              </li>
            )}

            <li className="listItem">
              <Icon
                icon="icon-baseline-close-px"
                title="关闭"
                onClick={onClose}
              />
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
