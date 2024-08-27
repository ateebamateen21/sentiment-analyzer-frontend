import React from "react";
import Head from 'next/head';

import {pages} from "@/components/index";

const analysisPage = () => {
  return (
    <>
      <Head>
        <title>Analyzer</title>
      </Head>
      <pages.AnalysisPage />
    </>
  );
};

export default analysisPage;
