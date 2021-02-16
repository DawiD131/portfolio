import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const StyledImg = styled.img`
  margin-top: 50px;
  max-width: 60%;
  height: auto;
  box-shadow: 3px 3px 30px 4px rgba(0, 0, 0, 0.3);
`;

const InfoBox = styled.div`
  width: 55%;
  padding: 15px;
  height: auto;
  margin-bottom: 50px;
`;

const StyledCloseIcon = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
`;

const BorderLine = styled.div`
  width: 100%;
  border-bottom: 0.01rem solid #fff;
`;

const StyledHeader = styled.h1`
  color: #fff;
  font-weight: 300;
  letter-spacing: 1px;
`;

const StyledDescription = styled.h3`
  color: #fff;
  font-weight: 200;
  letter-spacing: 1px;
`;

const StyledLi = styled.li`
  color: #fff;
  font-weight: 200;
  letter-spacing: 1px;
  font-size: 17px;
  margin-bottom: 10px;
`;

const ImgBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled.a`
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  display: inline-block;
  margin: 10px;
`;

const ProjectDetails = ({ toggleView, currentProject }) => {
  return (
    <StyledWrapper>
      <GlobalStyle />
      <StyledCloseIcon>
        <FontAwesomeIcon
          onClick={toggleView}
          className="icon icon-times"
          icon={faTimes}
        />
      </StyledCloseIcon>
      <InfoBox>
        <StyledHeader>{currentProject.name}</StyledHeader>
        <BorderLine />
        <StyledDescription>{currentProject.description}</StyledDescription>
        <StyledHeader>Screenshots</StyledHeader>
        <BorderLine />
        <ImgBox>
          <StyledImg src={currentProject.img} />
        </ImgBox>
        <StyledHeader>Technologies</StyledHeader>
        <BorderLine />
        <ul>
          {currentProject.technologies.map((technology) => (
            <StyledLi>
              <FontAwesomeIcon
                className={`tech-icon ${technology.class}`}
                icon={technology.icon}
              />
              {technology.name}
            </StyledLi>
          ))}
        </ul>
        <StyledHeader>Features</StyledHeader>
        <BorderLine />
        <ul>
          {currentProject.features.map((feature) => (
            <StyledLi>{feature}</StyledLi>
          ))}
        </ul>
        <StyledHeader>Demo</StyledHeader>
        <BorderLine />
        <StyledLink href={currentProject.demoLink}>
          Live demo is available here!
        </StyledLink>
        <StyledLink href={currentProject.githubLink}>
          See this project on Github!
        </StyledLink>
      </InfoBox>
    </StyledWrapper>
  );
};

export default ProjectDetails;
