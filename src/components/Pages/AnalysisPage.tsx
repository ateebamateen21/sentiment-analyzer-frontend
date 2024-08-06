"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ReduxProvider from "@/components/ReduxProvider";
import InputSection from "./analysisPageComponents/InputSection";
import RemarksSection from "./analysisPageComponents/RemarksSection";
import ConfidenceScoreSection from "./analysisPageComponents/ConfidenceScoresSection";

const AnalysisPage: React.FC = () => {
 

  return (
    <ReduxProvider>
    <section className="flex flex-col md:flex-row h-screen gap-6 p-6">
      <section className="md:w-2/3 flex flex-col gap-6">
        <InputSection />

        <RemarksSection />
        <ConfidenceScoreSection  />
      </section>
    </section>
    </ReduxProvider>
  );
};

export default AnalysisPage;
