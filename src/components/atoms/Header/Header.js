import React from "react";
import styled, { css } from "styled-components";

const StyledHeader = styled.h1`
  font-size: 35px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  color: #fff;
  margin: 0 0 15px 0;
  ${({ primary }) =>
    primary &&
    css`
      font-size: 50px;
      color: #fff;
    `}

  @media (max-width: 700px) {
    font-size: 30px;
  }

  @media (max-width: 550px) {
    font-size: 25px;
  }
`;

const Header = (props) => (
  <StyledHeader primary={props.primary}>{props.txt}</StyledHeader>
);

export default Header;
