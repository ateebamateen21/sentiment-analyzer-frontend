import React from "react";
import ProfileCard from "./ProfileCard";
import Container from "../Container";
import MainHeading from "../MainHeading";

function ProfileSection() {
  return (
    <>
      <Container>
        <MainHeading className="text-center py-10">Behind the Project?</MainHeading>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  items-center gap-14  py-24 px-6">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </Container>
    </>
  );
}

export default ProfileSection;
