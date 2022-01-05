import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Page = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
