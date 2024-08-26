import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing the icons
import "./profileCard.css";
import Link from "next/link";

function ProfileCard() {
  return (
    <div id="login-container">
      <div className="profile-img"></div>
      <h1 className="profileName">Ateeba</h1>
      <div className="description">
        Ateeba is a front-end web developer in New York. She has worked in the
        field for 10 years now. Check out her projects in the links below. 
      </div>
      <div className="social px-2">
        <div className="linkWrap ">
          <Link href="https://github.com">
            <FaGithub size={26}  /> {/* GitHub Icon */}
          </Link>
        </div>
        <div className="linkWrap">
          <Link href="https://twitter.com">
            <FaTwitter size={26}  /> {/* Twitter Icon */}
          </Link>
        </div>
        <div className="linkWrap">
          <Link href="https://linkedin.com">
            <FaLinkedin size={26}  /> {/* LinkedIn Icon */}
          </Link>
        </div>
      </div>

      <div>
        <button className="profileCardBtn">Hire Me</button>
      </div>
    </div>
  );
}

export default ProfileCard;
