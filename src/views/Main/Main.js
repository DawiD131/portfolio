import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ReactComponent as Rocket } from "./rocket.svg";
import { ReactComponent as Astronaut } from "./astronaut.svg";
import GlobalStyle from "../../theme/GlobalStyle";
import Button from "../../components/atoms/Button/Button";
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

const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #25292d;
  z-index: 1;
  right: 0;
  overflow: hidden;
`;

const Text1 = styled.h1`
  color: #fff;
  font-weight: 300;
  font-size: 50px;
  margin: 0 0 10px 0;
`;
const Text2 = styled.h1`
  color: #fff;
  font-weight: 300;
  font-size: 40px;
  margin: 0 0 20px 0;
`;
const Text3 = styled.h1`
  color: #fff;
  font-weight: 300;
  font-size: 30px;
  margin: 0 0 30px 0;
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
    transform: translateX(140px) translateY(-40px);
    width: 150px;
  }
`;

const StyledAstronaut = styled.div`
  width: 300px;
  position: absolute;
  transform: translateX(200px) translateY(150px) rotate(10deg);
  width: 350px;
  z-index: -1;

  @media (max-width: 700px) {
    width: 200px;
  }
  @media (max-width: 550px) {
    transform: translateX(140px) translateY(-40px);
    width: 150px;
  }
`;

const Root = () => {
  const wrapper = useRef(null);
  // const landing = useRef(null);
  // const astronaut = useRef(null);
  // const text1 = useRef(null);
  // const text2 = useRef(null);
  // const text3 = useRef(null);

  useEffect(() => {
    const [el] = wrapper.current.children;
    // const [el2] = astronaut.current.children;

    const flame2 = el.querySelector(".flame2");
    const rocket = el.querySelector(".rocket");

    // const star1 = el2.querySelector(".star1");
    // const star2 = el2.querySelector(".star2");
    // const star3 = el2.querySelector(".star3");

    // gsap.to(star1, 2, {
    //   repeat: -1,
    //   x: 3,
    //   y: 2,
    //   yoyo: true,
    // });
    // gsap.to(star2, 2, {
    //   repeat: -1,
    //   x: -3,
    //   y: 2,
    //   yoyo: true,
    // });
    // gsap.to(star3, 2, {
    //   repeat: -1,
    //   x: -1,
    //   y: 3,
    //   yoyo: true,
    // });

    const tl = gsap.timeline();

    // tl.from(text1.current, 1, { x: window.innerWidth });
    // tl.from(text2.current, 1, { x: -window.innerWidth });
    // tl.from(text3.current, 1, { x: window.innerWidth });
    // tl.add("pageOut");
    // tl.to(
    //   landing.current,
    //   2,
    //   {
    //     width: 0,
    //     y: 0,
    //     display: "none",
    //   },
    //   3.3,
    //   "pageOut"
    // );

    // tl.to(
    //   [text1.current, text2.current, text3.current, astronaut.current],
    //   1.6,
    //   {
    //     opacity: 0,
    //   },
    //   "pageOut"
    // );

    tl.add("start").delay(5);
    tl.fromTo(
      el,
      2.5,
      { rotation: -40, opacity: 0 },
      { rotation: -78, opacity: 1 },
      "start"
    );
    tl.from(
      el,
      2,
      {
        x: window.innerWidth / 2 - 200,
        y: window.innerHeight / 2 + 50,
      },
      "start"
    );

    gsap.to(flame2, 0.1, { scale: 0.9, repeat: -1, yoyo: true });
    gsap.to(rocket, { scale: 0.99, repeat: -1, yoyo: true });
    gsap.to(rocket, { x: 20, y: 10, repeat: -1, yoyo: true });

    // gsap
    //   .to(astronaut.current, 2, {
    //     scale: 0.97,
    //     repeat: -1,
    //     yoyo: true,
    //     rotation: 15,
    //   })
    //   .delay(0.3);
  }, []);

  return (
    <>
      {/* <LandingPage ref={landing}>
        <StyledAstronaut ref={astronaut}>
          <Astronaut />
        </StyledAstronaut>
        <Text1 ref={text1}>Hello</Text1>
        <Text2 ref={text2}>I'm David</Text2>
        <Text3 ref={text3}>Welcome to my site</Text3>
      </LandingPage> */}
      <StyledWrapper>
        <GlobalStyle />
        <Sidebar />
        <StyledBox>
          <Navbar>
            <Logo txt="Dawid Kutwin" />
            <Link txt="About" />
          </Navbar>
          <HeaderBox>
            <Header txt="Junior fullstack web developer" />
            <button class="button type1">Contact</button>
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
