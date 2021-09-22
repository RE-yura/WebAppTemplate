import { css, cx } from "@emotion/css";
import { ModalPortal } from "components/atoms/global/ModalPortal";
import React, { FC } from "react";

type Props = {
  onClose?: () => void;
};

export const LaunchNotificationModal: FC<Props> = ({ onClose }) => (
  <ModalPortal onClose={onClose}>
    <div
      className={cx(
        "flex flex-col items-center justify-center w-auto bg-white rounded-lg",
        css`
          padding: 30px 44px 40px;
          max-width: 80vw;
          text-align: center;
          background-color: rgba(255, 255, 255, 1);
          border-radius: 8px;
          box-shadow: 0 3px 18px 0 rgba(54, 54, 54, 0.65);
        `,
      )}
    >
      <div className="mb-4 text-lg font-bold">Welcome to WebAppTemplate</div>
      <div className="text-xs tracking-tight">
        ESLint,Prettier,TailwindCSS,Reduxの設定だけでなく，
      </div>
      <div className="text-xs tracking-tight">
        RESTの叩き方，モーダルの出し分け，フォームの作り方など参考になればと思います．
      </div>
    </div>
  </ModalPortal>
);
