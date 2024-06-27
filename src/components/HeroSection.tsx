//PATH: src/components/HeroSection.tsx
import Image from "next/image";
import React from "react";
import { Container } from "./index";
const HeroSection = () => {
  return (
    <div className="bg-teal-200 pt-10 md:pt-5  ">
      <Container>
        <div className="py-6 mx-auto flex flex-col sm:flex-row items-center">
          {/* Left Section */}
          <div className="sm:w-1/2 sm:pr-8 mb-4 sm:mb-0">
            <h2 className="text-4xl font-bold  mb-4">Want to chat?</h2>
            <p className="text-4xl font-bold  mb-4">{`I'm here.`}</p>
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
              src="/gif.png"
              alt="Robot waving hello"
              className="max-w-full "
              width={450}
              height={450}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
