import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hamburger } from "components/atoms/global/Hamburger";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useNavState } from "redux/useState";

type Props = {
  notTop?: boolean;
  backButtonText?: string;
  onBack?: () => void;
  hideHamburger?: boolean;
};

export const Header: FC<Props> = ({ notTop, backButtonText, onBack, hideHamburger }) => {
  const router = useRouter();
  const { navState, setShowSideMenu } = useNavState();

  return (
    <header className="w-full h-[50px] bg-primary flex justify-left itens-center fixed top-0 left-0">
      <div className="flex items-center justify-start cursor-pointer">
        {!notTop ? (
          <Link href="/">
            {/* <img className="w-28 header-icon-logo" src="/img/vercel.svg" /> */}
            <a className="ml-6 text-2xl text-white font-title">WebAppTemplate</a>
          </Link>
        ) : (
          <div
            onClick={(): void => {
              if (onBack) onBack();
              else router.back();
            }}
            className="flex flex-row items-center ml-4"
          >
            <FontAwesomeIcon className="text-2xl text-white " icon={faAngleLeft} />
            <div className="ml-2 text-xs font-bold text-white">{backButtonText || ""}</div>
          </div>
        )}
      </div>

      {!hideHamburger && (
        <Hamburger
          isMenuOpen={navState.showSideMenu}
          onClick={(): void => {
            setShowSideMenu(!navState.showSideMenu);
          }}
        />
      )}
    </header>
  );
};
