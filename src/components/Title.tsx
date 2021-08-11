import React from "react";
import styled from "styled-components";
import { IconGithub } from "./index";

const Container = styled.div`
  display: flex;

  align-items: center;
`;

export const Title = () => {
  return (
    <Container>
      <h1>Show me your</h1>
      <IconGithub />
      <h1>stars</h1>
    </Container>
  );
};
