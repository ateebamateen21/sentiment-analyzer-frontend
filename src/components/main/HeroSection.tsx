//PATH: src/components/HeroSection.tsx
import Image from "next/image";
import React from "react";
import { Container } from "../index";
import MainHeading from "../reusables/MainHeading";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="bg-blue-300 py-12 md:pt-6 ">
      <Container>
        <div className="py-20 mx-auto flex flex-col sm:flex-row items-center">
          {/* Left Section */}
          <div className="sm:w-1/2 sm:pr-8 mb-4 sm:mb-0">
            <MainHeading>{`What is your text's tone?`}</MainHeading>

            <p className="text-lg text-white mb-4">
              {` Uncover the hidden emotions and insights in your text with neurobalanceAI sentiment analyzer. Whether it's joy, anger, or neutrality, we'll help you see the full picture.`}
            </p>
            <button className="bg-white text-blue-950 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-950 hover:text-white transition-colors duration-300">
              <Link href='/analysis' target="_blank">
               Analyze Text
              </Link>
            </button>
          </div>
          {/* Right Section */}
          <div className="sm:w-1/2 sm:pl-8 flex justify-center">
            <Image
              src="/bots/mobileBot.png"
              alt="Robot waving hello"
              className="max-w-full "
              width={600}
              height={600}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
