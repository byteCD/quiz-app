import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 25px;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
