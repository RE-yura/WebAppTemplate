export enum ModalEnum {
  None,
  Error,

  LaunchNotification,
  FormSubmit,
}

export type ModalType = {
  modalEnum: ModalEnum;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modalStore?: { [key: string]: any };
};
