import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h2`
  font-size: 25px;
  font-weight: 100;
  letter-spacing: 3px;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  display: inline-block;
  margin: 0;
  color: #fff;
  margin-left: ${(props) => (props.isSidebarVisble ? "60px" : "0")};
`;

const Logo = ({ txt, isSidebarVisible }) => (
  <StyledLogo isSidebarVisble={isSidebarVisible}>{txt}</StyledLogo>
);

export default Logo;
