"use client";

import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import { Heading } from '@/components';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { SpinnerRoundOutlined } from 'spinners-react';

const RemarksSection: React.FC = () => {
  const { sentimentValue, loadingSpeedometer } = useSelector((state: RootState) => state.analysis);

  const value = sentimentValue === 'positive' ? 0.7 : sentimentValue === 'negative' ? 0.2 : 0.5; // Example mapping

  return (
    <div className="remarksSection rounded-lg p-3 bg-pink-200 md:h-1/2 flex justify-center items-center flex-col gap-6">
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
            value={value} // Use value from the state
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
