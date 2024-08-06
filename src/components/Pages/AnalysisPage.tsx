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
      <section className="md:h-screen p-5 grid gap-6 md:grid-cols-2 ">

        <div className="h-fit">
          <InputSection />
        </div>


        <div className="h-fit">
          <RemarksSection />
        </div>


        <div className="md:row-span-2 md:col-start-2 md:row-start-1">
          <ConfidenceScoreSection />
        </div>

      </section>
    </ReduxProvider>
  );
};

export default AnalysisPage;
