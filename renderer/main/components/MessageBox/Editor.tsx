import React, { useState, Suspense, useMemo } from "react";
import ReactDOM from "react-dom";
import Icon from "_common/components/Icon/Icon";

import { usePopper } from "react-popper";
import useClickOutside from "_common/hooks/useClickOutside";
const Emoji = React.lazy(() => import("_common/components/Emoji/Emoji"));

import style from "./MessageBox.module.css";
import cn from "classnames";

export default function Editor() {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [10, 10],
        },
      },
    ],
  });

  const [emojiPopper, setEmojiPopper] = useState(false);

  useClickOutside(".emoji-popper", ".emoji-trigger", () => {
    setEmojiPopper(false);
  });

  return (
    <>
      <footer className={style.editor}>
        <div className={style.tools}>
          <Icon
            icon="icon-face"
            customStyle="emoji-trigger"
            refElement={setReferenceElement}
            onClick={() => setEmojiPopper((val) => !val)}
          />
          <Icon icon="icon-files" />
          <Icon icon="icon-5jietu-1" />
          <Icon icon="icon-message" />

          <Icon icon="icon-phone1" />
          <Icon icon="icon-video" />
        </div>
        <textarea className={style.textEditor} />
      </footer>
      {ReactDOM.createPortal(
        <div
          ref={setPopperElement as any}
          className={cn("emoji-popper", style.emojiPopper)}
          style={{
            ...styles.popper,
            ...{ display: emojiPopper ? "inline-block" : "none" },
          }}
          {...attributes.popper}
        >
          <div className="mask" />
          <div className="content">
            <Suspense fallback={"emoji loading..."}>
              {/* <Emoji shortname=":smile:" />
              <Emoji shortname=":smile:" />
              <Emoji shortname=":smile:" />
              <Emoji shortname=":smile:" />
              <Emoji shortname=":smile:" />
              <Emoji shortname=":smile:" /> */}
            </Suspense>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
