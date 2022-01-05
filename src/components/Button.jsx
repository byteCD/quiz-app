import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  padding: 8px;
  color: #fff;
  background-color: #0c54b9;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3172cb;
  }
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
