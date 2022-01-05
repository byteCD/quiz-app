import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setQuiz } from "../redux/actions/quizActions";
import { setScore } from "../redux/actions/scoreActions";
import Container from "./Container";

const StyledHeader = styled.header`
  width: 100%;
  min-height: 55px;
  background-color: rgb(63, 56, 194);
  background: linear-gradient(
    135deg,
    rgb(38, 132, 255) 0%,
    rgb(7, 71, 166) 100%
  );
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledLogo = styled.h2`
  color: #fff;
  font-weight: 400;
  cursor: pointer;
`;

const Header = () => {
  const dispatch = useDispatch();

  const toHomePage = () => {
    dispatch(setQuiz([]));
    dispatch(setScore(0));
  };

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <StyledLogo onClick={toHomePage}>Quiz App</StyledLogo>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
