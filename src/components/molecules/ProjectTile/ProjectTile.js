import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledImg = styled.img`
  max-width: 50%;
  height: auto;
  box-shadow: 3px 3px 30px 4px rgba(0, 0, 0, 0.3);
`;

const TechBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 35%;
  height: auto;
  padding: 20px;
  margin-bottom: 60px;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ProjectTile = ({ currentProject, toggleView }) => {
  const tile = useRef(null);

  useEffect(() => {
    const el = tile.current;
    gsap.set(el, { opacity: 1 });
    gsap.from(el, { duration: 2.4, opacity: 0 });
  }, [toggleView]);

  return (
    <StyledWrapper ref={tile}>
      <StyledImg src={currentProject.img} />
      <TechBox>
        {currentProject.technologies.map((technology) => (
          <FontAwesomeIcon
            className={`tech-icon ${technology.class}`}
            icon={technology.icon}
          />
        ))}
      </TechBox>
      <button onClick={toggleView} className="button type1">
        More about
      </button>
    </StyledWrapper>
  );
};

export default ProjectTile;
