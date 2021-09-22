import { css, cx } from "@emotion/css";
import { Portal } from "components/atoms/global/Portal";
import React, { FC, useEffect, useState } from "react";

type Props = {
  onClose?: () => void;
};

export const ModalPortal: FC<Props> = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    return (): void => {
      setIsOpen(false);
    };
  }, []);

  return (
    <Portal>
      <div
        onClick={(e): void => {
          if (e.target !== e.currentTarget) return null;
          return onClose();
        }}
        className={cx(
          "z-40 fixed top-0 left-0 flex items-center justify-center w-screen h-screen backdrop-filter backdrop-blur-xs",
          css`
            background-color: rgba(0, 0, 0, 0.6);
          `,
        )}
      >
        <div
          className={cx(
            `${isOpen ? "fadeIn" : ""} rounded-lg`,
            css`
              max-width: 86vw;
              max-height: 80vh;

              display: none;
              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
              &.fadeIn {
                display: flex;
                animation: fadeIn 0.5s;
              }
            `,
          )}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
