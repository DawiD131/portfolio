import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h2`
  font-size: 25px;
  font-weight: 340;
  letter-spacing: 3px;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  display: inline-block;
  margin: 0;
  color: #fff;
`;

const Logo = ({ txt }) => <StyledLogo>{txt}</StyledLogo>;

export default Logo;
