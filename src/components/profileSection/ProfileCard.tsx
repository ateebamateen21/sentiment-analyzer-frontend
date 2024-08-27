"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaBriefcase,
} from "react-icons/fa";
import "./profileCard.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// Define the type for the links prop
interface Links {
  email: string;
  github: string;
  linkedin: string;
  portfolio: string;
}

// Define the type for the ProfileCard props
interface ProfileCardProps {
  photo: StaticImageData;
  name: string;
  description: string;
  links: Links;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  photo,
  name,
  description,
  links,
}) => {

  const handleContactClick = () => {
    window.location.href = `mailto:${links.email}`;
  };

  return (
    <div id="login-container">
      <div className="profile-img" >
        <Image src={photo} alt='profilepic' width={100} height={100}
        className="rounded-full" />
      </div>
      <h1 className="profileName">{name}</h1>
      <div className="description">{description}</div>
      <div className="social px-2">
        <div className="linkWrap">
          <Link href={links.github} passHref target="_blank">
            <FaGithub size={26} />
          </Link>
        </div>
        <div className="linkWrap">
          <Link href={links.linkedin} passHref target="_blank">
            <FaLinkedin size={26} />
          </Link>
        </div>
        <div className="linkWrap">
          <Link href={links.portfolio} passHref target="_blank">
            <FaBriefcase size={26} />
          </Link>
        </div>
      </div>

      <div>
        <button className="profileCardBtn" onClick={handleContactClick}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
