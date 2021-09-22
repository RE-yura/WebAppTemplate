import { useEffect } from "react";
import { useNavState } from "redux/useState";
// import { ModalEnum } from "types";
import { CustomError } from "types";

export const useErrorHandler = (error: CustomError): void => {
  const { setModal, setError } = useNavState();

  useEffect(() => {
    if (Object.keys(error || {}).length) {
      const status = Number(String(error.status).slice(0, 3));
      setError({ status: Number(status), name: error.name, message: error.message });
      // setModal(ModalEnum.Error);
    }
  }, [error, setModal, setError]);
};
