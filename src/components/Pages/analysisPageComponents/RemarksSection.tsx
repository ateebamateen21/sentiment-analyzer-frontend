"use client";

import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { Heading } from "@/components";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { SpinnerRoundOutlined } from "spinners-react";
import "@/components/Pages/analysisPage.css";
import Image from "next/image";

const RemarksSection: React.FC = () => {
  const { sentimentValue, loadingSpeedometer } = useSelector(
    (state: RootState) => state.analysis
  );

  const value =
    sentimentValue === "positive"
      ? 0.7
      : sentimentValue === "negative"
      ? 0.2
      : 0.5;

  return (
    <div className="remarksSection bg-blue-400 bg-opacity-10 backdrop-blur-lg border border-blue-200 border-opacity-20 rounded-lg p-3  md:h-1/2 flex justify-center items-center flex-col gap-6">
      <Image
        src="./pinkFace.svg"
        alt="pinkFace"
        width={120}
        height={120}
        className="pinkFaceClass "
      />

      <Heading className="text-center">Sentiment Remarks</Heading>
      <div className="relative max-w-60">
        {loadingSpeedometer ? (
          <div className="w-36 h-36 flex justify-center items-center">
            <SpinnerRoundOutlined /> {/* Display spinner while loading */}
          </div>
        ) : (
          <ReactSpeedometer
            width={250}
            height={150}
            minValue={0}
            maxValue={1}
            value={value}
            segments={3}
            segmentColors={["#FF471A", "#FFFF00", "#33CC33"]}
            customSegmentStops={[0, 0.33, 0.66, 1]}
            needleColor="steelblue"
            needleTransitionDuration={1000}
            needleHeightRatio={0.8}
            ringWidth={30}
            textColor="#000"
          />
        )}
        <style jsx>{`
          .speedometer-container svg text {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default RemarksSection;
