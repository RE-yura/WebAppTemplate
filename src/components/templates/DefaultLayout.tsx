import { Footer } from "components/organisms/global/Footer";
import { Header } from "components/organisms/global/Header";
import React, { FC } from "react";

type Props = {
  hideHeader?: boolean;
  notTop?: boolean;
  backButtonText?: string;
  onBack?: () => void;
  hideHamburger?: boolean;
  hideFooter?: boolean;
};

export const DefaultLayout: FC<Props> = ({
  hideHeader,
  notTop,
  backButtonText,
  onBack,
  hideHamburger,
  hideFooter,
  children,
}) => (
  <div className="relative flex flex-col items-center justify-center min-h-screen font-body bg-base">
    {!hideHeader && (
      <Header
        notTop={notTop}
        backButtonText={backButtonText}
        onBack={onBack}
        hideHamburger={hideHamburger}
      />
    )}
    <main className="flex flex-col items-center justify-start flex-1 w-full px-5 pt-12 pb-8">
      {children}
    </main>
    {!hideFooter && <Footer />}
  </div>
);
