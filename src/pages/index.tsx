import { NameCard } from "components/atoms/home/NameCard";
import { DefaultLayout } from "components/templates/DefaultLayout";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { useAppState, useNavState } from "redux/useState";
import { ModalEnum } from "types";

const IndexPage: NextPage = () => {
  const { appState, getMe } = useAppState();
  const { setModal } = useNavState();

  useEffect(() => {
    getMe();
  }, [getMe]);

  return (
    <DefaultLayout>
      <Head>
        <title>WebAppTemplate</title>
      </Head>

      <NameCard loading={appState.me.loading} name={appState.me.data?.name} />

      <div className="flex flex-row items-center justify-around w-9/12 mb-5 mt-7">
        <Link href="/account">
          <button className="bg-primary px-6 rounded-3xl h-[48px] mr-2 text-white text-base">
            Form example
          </button>
        </Link>
        <button
          className="bg-primary px-6 rounded-3xl h-[48px] text-white text-base"
          onClick={(): void => {
            setModal(ModalEnum.LaunchNotification);
          }}
        >
          Modal example
        </button>
      </div>
    </DefaultLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;
