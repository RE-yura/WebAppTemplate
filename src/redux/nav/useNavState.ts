/**
 * Navigation Store
 */
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomError, ModalEnum } from "types";

import { NavState, navSlice } from "./navSlice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useNavState = (): any => {
  const navState = useSelector((state: { nav: NavState }) => state.nav);
  const dispatch = useDispatch();

  // === actions ===============================
  const setShowSideMenu = useCallback(
    (show: boolean) => {
      dispatch(navSlice.actions.setShowSideMenu(show));
    },
    [dispatch],
  );
  const setModal = useCallback(
    (modalEnum: ModalEnum, modalStore?: { [key: string]: unknown }) => {
      dispatch(navSlice.actions.setModal({ modalEnum, modalStore }));
    },
    [dispatch],
  );
  const onCloseFrontView = useCallback(() => {
    setShowSideMenu(false);
    setModal(ModalEnum.None);
  }, [setModal, setShowSideMenu]);

  const setError = useCallback(
    (error: CustomError) => {
      dispatch(navSlice.actions.setError(error));
    },
    [dispatch],
  );

  const actions = {
    setShowSideMenu,
    setModal,
    onCloseFrontView,
    setError,
  };

  return { navState, ...actions };
};
