import React from "react";

import styled from "styled-components";
import * as utils from "../utils";

const Heading = ({ score }) => (
  <Header>
    <TitleWrapper>
      <Title>Rock</Title>
      <Title>Paper</Title>
      <Title>Scissors</Title>
    </TitleWrapper>
    <ScoreWrapper>
      <ScoreContent>
        <ScoreText>score</ScoreText>
        <ScoreNumber>{score}</ScoreNumber>
      </ScoreContent>
    </ScoreWrapper>
  </Header>
);

export default Heading;

const Header = styled.div`
  width: 90%;
  margin: 0 auto;

  border-radius: 8px;
  border: 2px solid ${utils.headerOutline};

  display: grid;
  grid-template-columns: 1fr auto;

  padding: 0.5rem;


  @media (min-width: 1000px) {
    width: 60%;
    padding: 1rem;
  }
`;

const TitleWrapper = styled.div`
  display: grid;
  user-select: none;
  align-content: center;
`;

const Title = styled.div`
  color: white;
  font-size: 1.12rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-transform: uppercase;

  @media (min-width: 1000px) {
    font-size: 1.4rem;
  }
`;

const ScoreWrapper = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-color: #fff;
  padding: 2.25rem;

  position: relative;

  display: grid;
  justify-items: center;
  align-content: center;

  border-radius: 8px;

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const ScoreContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  padding: 0.6rem 0;

  display: grid;
  align-content: space-between;
  justify-items: center;
`;

const ScoreText = styled.div`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: ${utils.scoreText};
`;

const ScoreNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  user-select: none;
  text-align: center;
  color: ${utils.headerOutline};
`;
