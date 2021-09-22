/**
 * User Store
 */

import { useErrorHandler } from "hooks/useErrorHandler";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "service/UserService";
import { CustomError } from "types";

import { AppState, appSlice } from "./appSlice";

// eslint-disable-next-line
export const useAppState = () => {
  const [error, setError] = useState<CustomError>({ name: "", message: "" });
  const appState = useSelector((state: { user: AppState }) => state.user);
  const dispatch = useDispatch();
  useErrorHandler(error);

  const getMe = useCallback(async () => {
    dispatch(appSlice.actions.setMe({ loading: true, data: null }));
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const result = await userService.getMe();
      dispatch(appSlice.actions.setMe({ loading: false, data: result }));
    } catch (e) {
      dispatch(appSlice.actions.setMe({ loading: false, data: null }));
      setError(e as CustomError);
    }
  }, [dispatch]);

  const actions = {
    getMe,
  };

  return { appState, ...actions, error };
};
