import React from "react";
import styled from "styled-components";

const StyledError = styled.div`
  text-align: center;
  width: 100%;
  color: #842029;
  background-color: #f8d7da;
  padding: 10px;
  border: 1px solid #f5c2c7;
`;

const Error = ({ error }) => {
  return (
    <StyledError>
      <p>{error}</p>
    </StyledError>
  );
};

export default Error;
