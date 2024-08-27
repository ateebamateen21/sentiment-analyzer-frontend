//PATH: src/components/Pages/AnalysisPage.tsx

"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ReduxProvider from "@/components/ReduxProvider";
import InputSection from "./analysisPageComponents/InputSection";
import RemarksSection from "./analysisPageComponents/RemarksSection";
import ConfidenceScoreSection from "./analysisPageComponents/ConfidenceScoresSection";
import './analysisPage.css'

const AnalysisPage: React.FC = () => {
  return (
    <ReduxProvider>
      <div className="backgroundAnalysis">
        <section className="md:h-screen px-5  md:px-16 py-10 md:py-10 grid gap-6  md:gap-9 md:grid-cols-2 ">
          <div className="h-fit ">
            <InputSection />
          </div>

          <div className="h-fit">
            <RemarksSection />
          </div>

          <div className="md:row-span-2 md:col-start-2 md:row-start-1 ">
            <ConfidenceScoreSection />
          </div>
        </section>
      </div>
    </ReduxProvider>
  );
};

export default AnalysisPage;
