import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 8px;
  width: 100%;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`;

const Select = ({ children, ...props }) => {
  return <StyledSelect {...props}>{children}</StyledSelect>;
};

export default Select;
