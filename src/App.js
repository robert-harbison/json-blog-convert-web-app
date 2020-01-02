import React from "react";

import GeneratorForm from "./components/GeneratorForm";
import Header from "./components/Header";
import styled from "styled-components";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <StyledGeneratorForm />
      </Container>
    );
  }
}

const Container = styled.div`
  min-width: 440px;
`;

const StyledGeneratorForm = styled(GeneratorForm)`
  max-width: 630px;
  margin: 0 auto;
  ${"" /* position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%); */}
`;
