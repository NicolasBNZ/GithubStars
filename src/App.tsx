import React from "react";
import styled from "styled-components";
import { GoalModel, Title, YourSolution } from "./components";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  align-items: center;

  font-family: sans-serif;
`;

export default function App() {
  return (
    <Container>
      <Title />
      <GoalModel />
      <YourSolution user="facebook" repository="react" />
    </Container>
  );
}
