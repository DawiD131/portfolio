import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #fff;
  border: none;
  font-weight: 100;
  width: 125px;
  height: 40px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: -3px 3px #000;
  transition: box-shadow 0.2s ease-in;
  &:hover {
    box-shadow: 3px -3px #000;
  }
`;

const Button = ({ txt }) => <StyledButton>{txt}</StyledButton>;

export default Button;
