import React from "react";
import Container from "./../Container";
import Image from "next/image";
import Heading from "../Heading";
import MainHeading from "../MainHeading"
import BotSheet from "./BotSheet";
function BotSection() {
  return (
    <>
      <section className="py-10 bg-blue-300">
        <MainHeading className="text-center">
          Chat with our bot
        </MainHeading>

        <Container>
          <section className="botSectionClass flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="botImg w-1/2">
              <Image
                src="/manBot.png"
                alt="botPicture"
                width={600}
                height={600}
              />
            </div>
            <div className="botTextPart w-1/2">
              <Heading>Dummy Heading</Heading>


              <p className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora illum ab esse facilis incidunt excepturi reiciendis
                alias! Deserunt incidunt porro quam doloremque, illo deleniti
                enim doloribus
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
