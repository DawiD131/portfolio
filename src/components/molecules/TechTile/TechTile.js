import React from "react";
import styled from "styled-components";

const TechName = styled.h2`
  color: #fff;
  font-weight: 300;
  font-size: 20px;
  margin: 0;
`;
const TechBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 140px;
`;

const TechHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`;

const SkillUl = styled.ul`
  padding-left: 20px;
  margin-top: 10px;
`;

const SkillLi = styled.li`
  color: #fff;
  font-weight: 300;
  margin: 5px 0 8px 0;
`;

const TechTile = ({ title, skills, icon }) => (
  <TechBox>
    <TechHeader>
      {icon}
      <TechName>{title}</TechName>
    </TechHeader>
    <SkillUl>
      {skills.map((skill) => (
        <SkillLi>{skill}</SkillLi>
      ))}
    </SkillUl>
  </TechBox>
);

export default TechTile;
