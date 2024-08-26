"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { SpinnerRoundOutlined } from "spinners-react";
import Heading from "@/components/Heading";
import "@/components/Pages/AnalysisPage.css";
import Image from "next/image";

const ConfidenceScoreSection: React.FC = () => {
  const {
    confidenceScores,
    loading,
    loadingPositive,
    loadingNeutral,
    loadingNegative,
  } = useSelector((state: RootState) => state.analysis);

  const getPercentage = (value: number) => (value ? value * 100 : 0);

  return (
    <div className="confidenceScoreSection bg-blue-400 bg-opacity-10 backdrop-blur-lg border border-blue-200 border-opacity-20 rounded-lg px-3 pt-5  min-h-full max-h-fit flex flex-col justify-center">
      <Image
        src="/emojiBot.png"
        alt="emojiBot"
        width={200}
        height={250}
        className="emojiBotClass "
      />
      <Image
        src="./redFace.svg"
        alt="redFace"
        width={100}
        height={100}
        className="redFaceClass "
      />
      
      <Image
        src="./purpleFace.svg"
        alt="purpleFace"
        width={60}
        height={60}
        className="purpleFaceClass "
      />
      
      <Image
        src="./greyFace.svg"
        alt="greyFace"
        width={70}
        height={70}
        className="greyFaceClass "
      />

      <Heading className="text-center">Confidence Scores</Heading>
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="p-3 w-36 h-36">
          {loadingPositive ? (
            <div className="w-36 h-36 flex justify-center items-center">
            <SpinnerRoundOutlined /> {/* Display spinner while loading */}
          </div>
          ) : (
            <CircularProgressbar
              value={getPercentage(confidenceScores?.positive || 0)}
              text={`${getPercentage(confidenceScores?.positive || 0)}%`}
              strokeWidth={4}
              background={true}
              backgroundPadding={4}
              styles={buildStyles({
                backgroundColor: "#9ADE7B",
                pathColor: "white",
                textColor: "white",
                trailColor: "#C8C6C6",
              })}
            />
          )}
        </div>
        <div className="p-3 w-36 h-36">
          {loadingNeutral ? (
            <SpinnerRoundOutlined /> // Use a spinner here
          ) : (
            <CircularProgressbar
              value={getPercentage(confidenceScores?.neutral || 0)}
              text={`${getPercentage(confidenceScores?.neutral || 0)}%`}
              strokeWidth={4}
              background={true}
              backgroundPadding={4}
              styles={buildStyles({
                backgroundColor: "#F7D060",
                pathColor: "white",
                textColor: "white",
                trailColor: "#C8C6C6",
              })}
            />
          )}
        </div>
        <div className="p-3 w-36 h-36">
          {loadingNegative ? (
            <SpinnerRoundOutlined /> // Use a spinner here
          ) : (
            <CircularProgressbar
              value={getPercentage(confidenceScores?.negative || 0)}
              text={`${getPercentage(confidenceScores?.negative || 0)}%`}
              strokeWidth={4}
              background={true}
              backgroundPadding={4}
              styles={buildStyles({
                backgroundColor: "#FF6D60",
                pathColor: "white",
                textColor: "white",
                trailColor: "#C8C6C6",
              })}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfidenceScoreSection;
