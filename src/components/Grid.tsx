// src/components/Grid.tsx
import React from "react";
import { Container } from "./index";
import Article from "./Article";

const Grid = () => {
  return (
    <section className="bg-[#F7DBF1] py-20">
      <Container>
        <div className="py-6  grid gap-4  md:grid-cols-3">
          <Article title="Mental Health?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />


          <Article title="5 signs you need to analyze yourself" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." className="md:col-span-2"/>


          <Article title="Here’s how our AI can help you :)" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." className="md:col-span-2"/>


          <Article title="A better Life!" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />


          <Article title="You need help?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

          
          <Article title="Wanna learn more? Check our blog" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." className="md:col-start-3 md:row-start-2 md:row-end-4" />
          
         
        </div>
      </Container>
    </section>
  );
};

export default Grid;
