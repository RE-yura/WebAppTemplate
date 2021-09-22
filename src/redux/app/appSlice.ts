import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Res, User } from "types";

export type AppState = {
  me: Res<User>;
};

export const initialState: AppState = {
  me: { loading: false, data: null },
};

export const appSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMe: (state, action: PayloadAction<Res<User>>) => ({
      ...state,
      me: action.payload,
    }),
  },
});
