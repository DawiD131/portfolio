import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/atoms/Header/Header";
import Sidebar from "../../components/molecules/Sidebar/Sidebar";
import ProjectTile from "../../components/molecules/ProjectTile/ProjectTile";
import GlobalStyle from "../../theme/GlobalStyle";
import ProjectDetails from "./ProjectDetails";
import projects from "../../projectData";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 10px;
`;

const StyledCricle = styled.span`
  height: 12px;
  width: 12px;
  background-color: ${(props) => (props.isActive ? "#bbb" : "green")};
  border-radius: 50%;
  display: inline-block;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 15px;
  width: 120px;
  height: 15px;
  :hover {
    cursor: pointer;
  }
`;

const Projects = ({ isActive }) => {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [isProjectDetailsView, setIsProjectDetailsView] = useState(false);

  const handleNavButton = (numOfCurrentProject) => {
    setCurrentProject(projects[numOfCurrentProject]);
  };

  const toggleView = () => setIsProjectDetailsView((prev) => !prev);

  return (
    <>
      <GlobalStyle />
      {isProjectDetailsView ? (
        <ProjectDetails
          currentProject={currentProject}
          toggleView={toggleView}
        />
      ) : (
        <StyledWrapper>
          <HeaderBox>
            <Header txt="PROJECTS" />
          </HeaderBox>
          <Sidebar />
          <ProjectTile
            toggleView={toggleView}
            currentProject={currentProject}
          />
          <StyledNav>
            {projects.map((project, index) => (
              <StyledCricle
                isActive={currentProject.name === project.name ? false : true}
                key={project.name}
                onClick={() => handleNavButton(index)}
              />
            ))}
          </StyledNav>
        </StyledWrapper>
      )}
    </>
  );
};

export default Projects;
