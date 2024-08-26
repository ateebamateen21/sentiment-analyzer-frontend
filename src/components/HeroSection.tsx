//PATH: src/components/HeroSection.tsx
import Image from "next/image";
import React from "react";
import { Container } from "./index";
import MainHeading from "./MainHeading";
const HeroSection = () => {
  return (
    <div className="bg-blue-300 py-12 md:pt-6 ">
      <Container>
        <div className="py-6 mx-auto flex flex-col sm:flex-row items-center">
          {/* Left Section */}
          <div className="sm:w-1/2 sm:pr-8 mb-4 sm:mb-0">
            <MainHeading>Want to chat?</MainHeading>
            <MainHeading>{`I'm Here!`}</MainHeading>
            <p className="text-lg text-white mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem non
              consequatur inventore recusandae, eos quaerat
            </p>
            <button className="bg-white text-teal-500 px-6 py-3 rounded-lg shadow-lg hover:bg-teal-400 transition-colors duration-300">
              Start Chatting
            </button>
          </div>
          {/* Right Section */}
          <div className="sm:w-1/2 sm:pl-8 flex justify-center">
            <Image
              src="/mobileBot.png"
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
