import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import Header from "../../components/atoms/Header/Header";
import TechTile from "../../components/molecules/TechTile/TechTile";
import "../../styles/icons.css";
import Sidebar from "../../components/molecules/Sidebar/Sidebar";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
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

const TechWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: start;
  grid-row-gap: 5%;
  justify-content: center;
  width: 100%;
`;

const Skills = () => {
  // const JsIcon = <FontAwesomeIcon className="tech-icon js-icon" icon={faJs} />;
  // const NodeIcon = (
  //   <FontAwesomeIcon className="tech-icon node-icon" icon={faNode} />
  // );
  // const HtmlIcon = (
  //   <FontAwesomeIcon className="tech-icon html-icon" icon={faHtml5} />
  // );
  // const CssIcon = (
  //   <FontAwesomeIcon className="tech-icon css-icon" icon={faCss3Alt} />
  // );
  // const SassIcon = (
  //   <FontAwesomeIcon className="tech-icon sass-icon" icon={faSass} />
  // );
  // const GitIcon = (
  //   <FontAwesomeIcon className="tech-icon git-icon" icon={faGit} />
  // );
  // const ReactIcon = (
  //   <FontAwesomeIcon className="tech-icon react-icon" icon={faReact} />
  // );
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <HeaderBox>
          <Header txt="Skills" primary />
        </HeaderBox>
        <Sidebar />
        {/* <TechWrapper>
          <TechTile
            title="Java Script"
            icon={JsIcon}
            skills={["Asynchronus JS", "Promise", "Async/Await", "Es 6"]}
          />
          <TechTile
            title="Node Js"
            icon={NodeIcon}
            skills={[
              "Http server",
              "Routing",
              "Rest Api",
              "Integration with MongoDB",
            ]}
          />
          <TechTile
            title="React"
            icon={ReactIcon}
            skills={["Hooks", "Redux", "React-Router"]}
          />
          <TechTile title="HTML 5" icon={HtmlIcon} skills={["Semantic html"]} />
          <TechTile
            title="CSS 3"
            icon={CssIcon}
            skills={["Grid", "Flexbox", "Animations"]}
          />
          <TechTile
            title="Sass"
            icon={SassIcon}
            skills={["Mixins", "Functions", "Variables"]}
          />
          <TechTile title="Git" icon={GitIcon} skills={["sdasd"]} />
        </TechWrapper> */}
      </StyledWrapper>
    </>
  );
};

export default Skills;
