import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import gsap, { Power0 } from "gsap";

import { ReactComponent as Astronaut } from "../Main/astronaut.svg";
import styled from "styled-components";
import Main from "../Main/Main";
import Skills from "../skills/Skills";

const Text1 = styled.h1`
  color: #fff;
  font-weight: 300;
  font-size: 50px;
  margin: 0 0 10px 0;
  z-index: -1;
`;
const Text2 = styled.h1`
  color: #fff;
  font-weight: 300;
  font-size: 40px;
  margin: 0 0 20px 0;
  z-index: -1;
`;
const Text3 = styled.h1`
  color: #fff;
  font-weight: 300;
  font-size: 30px;
  margin: 0 0 30px 0;
  z-index: -1;
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
  const [isEndOfFirstAnimation, setIsEndOfFirstAnimation] = useState(false);
  const landing = useRef(null);
  const astronaut = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  useEffect(() => {
    const handleEndOfAnimation = () => {
      setIsEndOfFirstAnimation((prev) => !prev);
    };
    const [el2] = astronaut.current.children;

    const star1 = el2.querySelector(".star1");
    const star2 = el2.querySelector(".star2");
    const star3 = el2.querySelector(".star3");

    gsap.to(star1, 2, {
      repeat: -1,
      x: 3,
      y: 2,
      yoyo: true,
    });
    gsap.to(star2, 2, {
      repeat: -1,
      x: -3,
      y: 2,
      yoyo: true,
    });
    gsap.to(star3, 2, {
      repeat: -1,
      x: -1,
      y: 3,
      yoyo: true,
    });

    const tl = gsap.timeline();

    tl.from(text1.current, 1, { x: window.innerWidth, ease: Power0.easeIn });
    tl.from(text2.current, 1, { x: -window.innerWidth, ease: Power0.easeIn });
    tl.from(text3.current, 1, { x: window.innerWidth, ease: Power0.easeIn });
    tl.add("pageOut");
    tl.to(
      landing.current,
      2,
      {
        width: 0,
        y: 0,
        display: "none",
      },
      3.3,
      "pageOut"
    );
    tl.to(
      [text1.current, text2.current, text3.current, astronaut.current],
      window.innerWidth > 500 ? 1 : 0.8,
      {
        opacity: 0,
      },
      "pageOut"
    );
    tl.add(() => handleEndOfAnimation());
  }, []);

  return (
    <>
      <LandingPage ref={landing}>
        <StyledAstronaut ref={astronaut}>
          <Astronaut />
        </StyledAstronaut>
        <Text1 ref={text1}>Hello</Text1>
        <Text2 ref={text2}>I'm David</Text2>
        <Text3 ref={text3}>Welcome to my site</Text3>
      </LandingPage>
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/">
              <Route>
                <Main isEndOfFirstAnimation={isEndOfFirstAnimation} />
              </Route>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default Root;
