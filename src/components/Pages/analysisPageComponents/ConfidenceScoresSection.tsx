"use client";


import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { SpinnerRoundOutlined } from 'spinners-react';

const ConfidenceScoreSection: React.FC = () => {
  const { confidenceScores, loading, loadingPositive, loadingNeutral, loadingNegative } = useSelector((state: RootState) => state.analysis);

  const getPercentage = (value: number) => (value ? value * 100 : 0);

  return (
    <div className="confidenceScoreSection rounded-lg px-3 py-5 bg-pink-300 min-h-full max-h-fit flex flex-col justify-center">
      <h2 className="text-center">Confidence Scores</h2>
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="p-3 w-36 h-36">
          {loadingPositive ? (
            <SpinnerRoundOutlined /> // Use a spinner here
          ) : (
            <CircularProgressbar
              value={getPercentage(confidenceScores?.positive || 0)}
              text={`${getPercentage(confidenceScores?.positive || 0)}%`}
              strokeWidth={4}
              background={true}
              backgroundPadding={4}
              styles={buildStyles({
                backgroundColor: 'green',
                pathColor: 'red',
                textColor: 'black',
                trailColor: 'gray',
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
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfidenceScoreSection;
