import React from "react";
import Head from 'next/head';

import AnalysisPage from "@/components/Pages/AnalysisPage";

const analysisPage = () => {
  return (
    <>
      <Head>
        <title>Analyzer</title>
      </Head>
      <AnalysisPage />
    </>
  );
};

export default analysisPage;
