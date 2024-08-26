//PATH: src/app/page.tsx
import "./globals.css";

import {
  Navbar,
  Container,
  HeroSection,
  Grid,
  ProfileSection,
  BotSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      {/* <Container> */}
      <Navbar />
      {/* <BlendContainer> */}
      <HeroSection />
      <Grid />
      {/* </BlendContainer> */}

      <ProfileSection />
      {/* </Container> */}
      <BotSection />

      <Footer />
    </>
  );
}
