import { DefaultLayout } from "components/templates/DefaultLayout";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const AboutPage: NextPage = () => (
  <DefaultLayout>
    <Head>
      <title>WebAppTemplate - About</title>
    </Head>

    <div className="mt-10 text-lg">About</div>
    <div className="my-4 text-xl">I&apos;m Yura Aoyama, a robotics engineer.</div>
  </DefaultLayout>
);

// eslint-disable-next-line import/no-default-export
export default AboutPage;
