import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../../../styles/icons.css";

const SidebarWrappper = styled.div`
  position: absolute;
  left: -70px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70px;
  background-color: #343a40;
  box-shadow: 2px 0 4px 0 #000;
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

const Sidebar = ({ handleToggleIsSidebarVisible }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleToggleSidebarVisible = () => {
    setSidebarVisible((prev) => !prev);

    if (handleToggleIsSidebarVisible) {
      handleToggleIsSidebarVisible();
    } else {
      return;
    }
  };

  const wrapper = useRef(null);
  const arrow = useRef(null);

  useEffect(() => {
    const el = wrapper.current;
    const el2 = arrow.current;
    if (sidebarVisible === false) {
      gsap.set(el2, { visibility: "visible" });
      gsap.to(el, { duration: 0.4, x: -70 });
      gsap.to(el2, { duration: 0.4, x: 20 });

      gsap.to(el2, { x: 80, opacity: 1 });
    } else if (sidebarVisible) {
      gsap.set(el2, { visibility: "hidden" });
      gsap.to(el, { duration: 0.4, x: 70 });
      gsap.to(el2, { duration: 0.1, x: -20 });
    }
  }, [sidebarVisible]);

  return (
    <>
      <SidebarWrappper ref={wrapper}>
        <FirstIconBox>
          <Link to="/">
            <FontAwesomeIcon className="icon icon-home" icon={faHome} />
          </Link>
          <Link to="skills">
            <FontAwesomeIcon className="icon icon-set" icon={faCog} />
          </Link>
          <Link to="projects">
            <FontAwesomeIcon className="icon icon-eye" icon={faEye} />
          </Link>
        </FirstIconBox>
        <SecondIconBox>
          <Link>
            <FontAwesomeIcon
              className="icon  icon-facebook"
              icon={faFacebookSquare}
            />
          </Link>
          <Link>
            <FontAwesomeIcon
              className="icon  icon-github"
              icon={faGithubSquare}
            />
          </Link>
          <Link onClick={handleToggleSidebarVisible}>
            <FontAwesomeIcon
              className="icon brand-icon icon-times"
              icon={faTimes}
            />
          </Link>
        </SecondIconBox>
      </SidebarWrappper>
      <div onClick={handleToggleSidebarVisible} className="arrow" ref={arrow}>
        <div className="arrow-top"></div>
        <div className="arrow-bottom"></div>
      </div>
    </>
  );
};

export default Sidebar;
