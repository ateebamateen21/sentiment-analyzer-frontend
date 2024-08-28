//PATH: src/components/profileSection/ProfileSection.tsx

import React from "react";
import ProfileCard from "./ProfileCard";
import Container from "../reusables/Container";
import MainHeading from "../reusables/MainHeading";

//image import
import Abid from "@/private/Abid.jpg";
import Ateeba from "@/private/Ateeba.jpeg";
import Marwa from "@/private/Marwa.jpg";

function ProfileSection() {
  return (
    <>
      <section id="profileSection">
        <Container>
          <MainHeading className="text-center py-10">
            Behind the Project?
          </MainHeading>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  items-center gap-14  py-24 px-6">
            <ProfileCard
              photo={Abid}
              name="Abid"
              description="A driven undergraduate student in electronics engineering, experience in backend and Machine Learning"
              links={{
                email: "ahr16.abidhasanrafi@gmail.com",
                github: "https://github.com/AbidHasanRafi",
                linkedin: "https://www.linkedin.com/in/abid-hasan-rafi/",
                portfolio: "https://abid-hasan-rafi.web.app/",
              }}
            />
            <ProfileCard
              photo={Ateeba}
              name="Ateeba"
              description="Student of BE Environmental Engineering with a passion for programming. React | NextJS, Docker, Kafka"
              links={{
                email: "ateeba.mateen.21@gmail.com",
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                portfolio: "https://portfolio.com",
              }}
            />
            <ProfileCard
              photo={Marwa}
              name="Marwa"
              description="Skilled in Data Anaysis using Python,SQL and Tableau.
              and well-versed in C++, C# and Microsoft technologies."
              links={{
                email: "marvashahid09@gmail.com",
                github: "https://github.com/marwashahid",
                linkedin: "https://www.linkedin.com/in/marwashahid",
                portfolio: "https://marwashahid.github.io/marwashahid.dev/",
              }}
            />
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProfileSection;
