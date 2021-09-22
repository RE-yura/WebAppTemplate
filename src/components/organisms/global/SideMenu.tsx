import { css, cx } from "@emotion/css";
import { LinkButton } from "components/atoms/global/LinkButton";
import { Portal } from "components/atoms/global/Portal";
import { useTheme } from "hooks/useTheme";
import React, { FC } from "react";

type Props = {
  show: boolean;
  onClose?: () => void;
};

export const SideMenu: FC<Props> = ({ show, onClose }) => {
  const theme = useTheme();
  return (
    <Portal>
      <div
        onClick={(e): void => {
          if (e.target !== e.currentTarget) return null;
          return onClose();
        }}
        className={cx(
          "z-40 fixed top-0 left-0 flex items-center justify-center w-full h-screen backdrop-filter backdrop-blur-xs",
          css`
            background-color: rgba(0, 0, 0, 0.6);
            opacity: ${show ? "1" : "0"};
            pointer-events: ${show ? "all" : "none"};
            top: 50px;
          `,
        )}
      >
        <div
          className={cx(
            "bg-primary text-white",
            css`
              z-index: 30;
              border-top: 2px solid ${theme.backgroundColor.secondary};
              position: fixed;
              top: 0;
              transition: 0.3s;
              right: ${show ? "0" : "-400px"};
              opacity: ${show ? "1" : "0"};
              height: 100%;
              width: 200px;
            `,
          )}
        >
          <div className="flex flex-col items-center justify-center w-auto mt-8">
            <LinkButton href="/" text="Top" />
            <LinkButton href="/about" text="About" />
          </div>
        </div>
      </div>
    </Portal>
  );
};
