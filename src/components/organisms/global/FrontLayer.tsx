import { ErrorModal } from "components/organisms/modals/ErrorModal";
import { FormSubmitModal } from "components/organisms/modals/FormSubmitModal";
import { LaunchNotificationModal } from "components/organisms/modals/LaunchNotificationModal";
import React, { FC } from "react";
import { ModalEnum } from "types";

type Props = {
  modalEnum: ModalEnum;
  onClose?: () => void;
};

export const FrontLayer: FC<Props> = (props) => {
  switch (props.modalEnum) {
    // 起動時ポイント獲得通知
    case ModalEnum.LaunchNotification:
      return <LaunchNotificationModal onClose={props.onClose} />;

    // フォーム提出完了
    case ModalEnum.FormSubmit:
      return <FormSubmitModal onClose={props.onClose} />;

    // エラー
    case ModalEnum.Error:
      return <ErrorModal onClose={props.onClose} />;

    default:
      return null;
  }
};
