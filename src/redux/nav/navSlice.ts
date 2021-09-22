import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CustomError, ErrorEnum, ModalEnum, ModalType } from "types";

export type NavState = {
  showSideMenu: boolean; // ドロワー(サイド)メニュー
  modal: ModalType; // モーダルの種類と内容を格納
  error: CustomError; // エラーモーダルに出す
};

export const initialState: NavState = {
  showSideMenu: false,
  modal: {
    modalEnum: ModalEnum.None,
    modalStore: {},
  },
  error: {
    status: ErrorEnum.NoError,
    name: "",
    message: "",
    body: {
      text: "",
      description: "",
    },
  },
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setShowSideMenu: (state, action: PayloadAction<boolean>) => ({
      ...state,
      showSideMenu: action.payload,
    }),
    setModal: (state, action: PayloadAction<ModalType>) => ({
      ...state,
      modal: action.payload,
    }),
    setError: (state, action: PayloadAction<CustomError>) => ({
      ...state,
      error: action.payload,
    }),
  },
});
