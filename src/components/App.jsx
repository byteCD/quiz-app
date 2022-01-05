import styled from "styled-components";
import Home from "../pages/Home";
import Container from "./Container";
import Header from "./Header";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Container>
        <Home />
      </Container>
    </StyledApp>
  );
};

export default App;
