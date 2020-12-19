import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { fadeInLeft } from "react-animations";
import { Link } from "react-router-dom";
import "../../../styles/icons.css";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

const SidebarWrappper = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70px;
  background-color: #343a40;
  box-shadow: 2px 0 4px 0 #000;
  animation: 0.3s ${fadeInLeftAnimation};
`;

const FirstIconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-basis: 60%;
  width: 100%;
`;

const SecondIconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-basis: 40%;
  width: 100%;
`;

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const handleToggleSidebarVisible = () => {
    setSidebarVisible((prev) => !prev);
    console.log(sidebarVisible);
  };
  return (
    <>
      {sidebarVisible ? (
        <SidebarWrappper>
          <FirstIconBox>
            <Link to="/">
              <FontAwesomeIcon className="icon icon-home" icon={faHome} />
            </Link>
            <Link to="skills">
              <FontAwesomeIcon className="icon icon-set" icon={faCog} />
            </Link>
            <Link>
              <FontAwesomeIcon className="icon icon-eye" icon={faEye} />
            </Link>
          </FirstIconBox>
          <SecondIconBox>
            <Link>
              <FontAwesomeIcon
                className="icon brand-icon icon-facebook"
                icon={faFacebookSquare}
              />
            </Link>
            <Link>
              <FontAwesomeIcon
                className="icon brand-icon icon-github"
                icon={faGithubSquare}
              />
            </Link>
          </SecondIconBox>
        </SidebarWrappper>
      ) : (
        <div onClick={handleToggleSidebarVisible} className="arrow">
          <div className="arrow-top"></div>
          <div className="arrow-bottom"></div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
