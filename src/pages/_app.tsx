import { Spinner } from "components/atoms/global/Spinner";
import { FrontLayer } from "components/organisms/global/FrontLayer";
import { SideMenu } from "components/organisms/global/SideMenu";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";
import { useNavState } from "redux/useState";
import "styles/globals.css";

const AppInit: FC = ({ children }) => {
  const { navState, onCloseFrontView } = useNavState();
  const router = useRouter();

  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (): void => {
      onCloseFrontView();
    };
    const handleRouteChangeComplete = (): void => {
      setPageLoading(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("beforeHistoryChange", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);
    return (): void => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("beforeHistoryChange", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [onCloseFrontView, router.events]);

  return (
    <>
      {/* ドロワーメニュー */}
      <SideMenu show={navState.showSideMenu} onClose={onCloseFrontView} />

      {/* モーダル */}
      {!!navState.modal?.modalEnum && (
        <FrontLayer modalEnum={navState.modal?.modalEnum} onClose={onCloseFrontView} />
      )}

      {!pageLoading ? (
        children
      ) : (
        <div>
          <Spinner size={40} color="#808080" top="100px" />
        </div>
      )}
    </>
  );
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppInit>
        <Component {...pageProps} />
      </AppInit>
    </PersistGate>
  </Provider>
);

// eslint-disable-next-line import/no-default-export
export default MyApp;
