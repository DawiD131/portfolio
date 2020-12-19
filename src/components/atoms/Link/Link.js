import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  font-size: 20px;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
  margin-bottom: 2px;
  color: #fff;
  cursor: pointer;

  :hover {
    color: #fff;
  }
`;

const Link = ({ txt }) => <StyledLink>{txt}</StyledLink>;

export default Link;
