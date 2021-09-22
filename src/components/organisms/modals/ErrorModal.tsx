import { css, cx } from "@emotion/css";
import { ModalPortal } from "components/atoms/global/ModalPortal";
import React, { FC } from "react";
import { useNavState } from "redux/useState";

type Props = {
  onClose?: () => void;
};

export const ErrorModal: FC<Props> = ({ onClose }) => {
  const { navState } = useNavState();
  return (
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
        <div className="font-bold">{navState.error.title || "エラー"}</div>
        <div className="text-xs tracking-tight">
          {navState.error.description || "ページを再読み込みしてください"}
        </div>
      </div>
    </ModalPortal>
  );
};
