import { css, cx } from "@emotion/css";
import { Button } from "components/atoms/global/Button";
import { ModalPortal } from "components/atoms/global/ModalPortal";
import { useRouter } from "next/router";
import React, { FC } from "react";

type Props = {
  onClose?: () => void;
};

export const FormSubmitModal: FC<Props> = ({ onClose }) => {
  const router = useRouter();

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
        <div className="mt-4 mb-4 font-bold">情報の登録が完了しました。</div>

        <Button
          padding="10px 40px"
          color="white"
          radius="22px"
          onClick={(): void => {
            router.push("/");
          }}
        >
          ホームに戻る
        </Button>
      </div>
    </ModalPortal>
  );
};
