//PATH: src/app/page.tsx

import { Navbar, Container, HeroSection, Grid, BlendContainer } from "@/components";

export default function Home() {
  return (
    <>
      {/* <Container> */}
      <Navbar />
      <BlendContainer>
        <HeroSection/>
        <Grid />
      </BlendContainer>
      
      SENTIMENT ANALYZER
      {/* </Container> */}
    </>
  );
}
