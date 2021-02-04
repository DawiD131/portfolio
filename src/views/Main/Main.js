import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import gsap, { Power1 } from "gsap";
import { ReactComponent as Rocket } from "./rocket.svg";
import GlobalStyle from "../../theme/GlobalStyle";
// import Button from "../../components/atoms/Button/Button";
import Link from "../../components/atoms/Link/Link";
import Header from "../../components/atoms/Header/Header";
import Logo from "../../components/atoms/Logo/Logo";
import Sidebar from "../../components/molecules/Sidebar/Sidebar";
import "../../styles/arrow-animation.scss";
import "../../styles/button-animation.scss";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Navbar = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 30px 30px 0 30px;
`;

const HeaderBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

const StyledBackground = styled.div`
  position: absolute;
  transform: translateX(190px) translateY(-40px);
  width: 300px;
  z-index: -1;

  @media (max-width: 700px) {
    width: 200px;
  }
  @media (max-width: 550px) {
    transform: translateX(125px) translateY(-35px);
    width: 150px;
  }
`;

const Root = ({ isEndOfFirstAnimation }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleToggleIsSidebarVisible = () =>
    setIsSidebarVisible((prev) => !prev);

  const wrapper = useRef(null);

  useEffect(() => {
    const [el] = wrapper.current.children;
    const flame2 = el.querySelector(".flame2");
    const rocket = el.querySelector(".rocket");

    const tl = gsap.timeline();
    tl.set(el, {
      x: window.innerWidth / 2 - 200,
      y: window.innerHeight / 2 + 50,
    });

    tl.add("start").delay(isEndOfFirstAnimation ? null : 5);

    tl.fromTo(
      el,
      { rotation: -40, opacity: 0 },
      { duration: 2.5, rotation: -78, opacity: 1 },
      "start"
    );

    tl.from(
      el,
      {
        duration: 2,
        x: window.innerWidth / 2 - 200,
        y: window.innerHeight / 2 + 50,
      },
      "start"
    );

    gsap.to(flame2, { duration: 0.1, scale: 0.9, repeat: -1, yoyo: true });
    gsap.to(rocket, { scale: 0.99, repeat: -1, yoyo: true });
    gsap.to(rocket, { x: 20, y: 10, repeat: -1, yoyo: true });
  }, []);

  return (
    <>
      <StyledWrapper>
        <GlobalStyle />
        <Sidebar handleToggleIsSidebarVisible={handleToggleIsSidebarVisible} />
        <StyledBox>
          <Navbar>
            <Logo isSidebarVisible={isSidebarVisible} txt="Dawid Kutwin" />
            <Link txt="About" />
          </Navbar>
          <HeaderBox>
            <Header txt="Junior fullstack web developer" />
            <button className="button type1">Contact</button>

            <StyledBackground ref={wrapper}>
              <Rocket />
            </StyledBackground>
          </HeaderBox>
        </StyledBox>
      </StyledWrapper>
    </>
  );
};

export default Root;
