import React from "react";
import Container from "../Container";
import { FaGithub } from "react-icons/fa";
import { SiMicrosoft } from "react-icons/si";

function Footer() {
  return (
    <>
      <section className="footer bg-blue-950 text-white">
        <Container>
          <div className="flex justify-between items-center">
              <div className="py-2 px-2">
                A project powered by MLSA Microsoft and Github
              </div>
              <div className="flex ">
                <FaGithub size={22} className="mx-2" />
                <SiMicrosoft size={22} className="mx-2" />
              
              </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Footer;
