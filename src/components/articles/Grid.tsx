// src/components/Grid.tsx
import React from "react";
import { Container } from "../index";
import Article from "./Article";

import "@/components/articles/articleStyles.css";
import MainHeading from "../reusables/MainHeading";

const Grid = () => {
  return (
    <section id="articleSection" className=" bg-[#F7DBF1] py-20">
      <Container>

        <MainHeading className="text-center py-4">How can AI help your Brain?</MainHeading>
        <div className="py-6 grid gap-4 md:grid-cols-3">
          <Article 
            title="AI Chatbots Break Down Barriers to Much-Needed Mental Treatments" 
            content="AI chatbots are revolutionizing mental health care by providing easy access to treatment and reducing stigma." 
            link="https://www.rgare.com/knowledge-center/article/ai-chatbots-break-down-barriers-to-much-needed-mental-health-treatments" 
          />

          <Article 
            title="Artificial Intelligence-Enabled Chatbots in Mental Health: A Systematic Review" 
            content="This review explores how AI-powered chatbots are used to enhance mental health support and their effectiveness." 
            className="md:col-span-2" 
            link="https://www.researchgate.net/publication/366774382_Artificial_Intelligence-Enabled_Chatbots_in_Mental_Health_A_Systematic_Review" 
          />

          <Article 
            title="Your Robot Therapist is Not Your Therapist:" 
            content="Understanding the limitations and roles of AI in providing mental health support and care." 
            link="https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2023.1278186/full" 
          />

          <Article 
            title="Providing Self-Led Mental Health Support Through an AI-Powered Chat Bot (Leora)" 
            content="Leora offers self-guided mental health support, helping meet the growing demand for accessible care." 
            link="https://www.jmir.org/2023/1/e46448" 
          />

          <Article 
            title="AI Chatbots in Digital Mental Health" 
            content="AI chatbots are increasingly used in digital mental health platforms, offering personalized support to users." 
            className="md:col-span-2" 
            link="https://www.mdpi.com/2227-9709/10/4/82" 
          />

          <Article 
            title="The Potential of AI in Mental Health: A Review of the Literature" 
            content="This literature review highlights the potential and challenges of integrating AI into mental health care." 
            className="md:col-start-3 md:row-start-2 md:row-end-4" 
            link="https://mental.jmir.org/2023/1/e49936" 
          />
        </div>
      </Container>
    </section>
  );
};

export default Grid;
