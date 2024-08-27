import React from "react";
import Container from "../reusables/Container";
import Image from "next/image";
import Heading from "../reusables/Heading";
import MainHeading from "../reusables/MainHeading"
import BotSheet from "./BotSheet";
function BotSection() {
  return (
    <>
      <section id="botSection" className="py-10 bg-blue-300">
        <MainHeading className="text-center">
          Chat with our bot
        </MainHeading>

        <Container>
          <section className="botSectionClass flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="botImg md:w-1/2">
              <Image
                src="/bots/manBot.png"
                alt="botPicture"
                width={600}
                height={600}
              />
            </div>
            <div className="botTextPart md:w-1/2">
              <Heading>Our AI-Powered Mental Health Companion</Heading>


              <p className="mb-3 text-white ">
             {` Our AI bot is designed to support your mental well-being, offering a safe space for you to explore your thoughts and emotions. Whether you're dealing with stress, anxiety, or just need someone to talk to, our bot provides personalized guidance and coping strategies. Available 24/7, it listens without judgment and helps you navigate your mental health journey with compassion and care.`}
              </p>


              <BotSheet />
            </div>
          </section>
        </Container>
      </section>
    </>
  );
}

export default BotSection;
