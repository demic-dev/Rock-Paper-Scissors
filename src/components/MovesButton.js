import React from "react";
import styled from "styled-components";

import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissors from "../assets/icon-scissors.svg";

import { rockGradient, paperGradient, scissorsGradient, moves } from "../utils";

const MovesButton = ({ type, onClick, isAbs = true, hasWave = false }) => {
  switch (type) {
    case moves.ROCK:
      return <RockButton onClick={onClick} isAbs={isAbs} hasWave={hasWave} />;
    case moves.PAPER:
      return <PaperButton onClick={onClick} isAbs={isAbs} hasWave={hasWave} />;
    case moves.SCISSORS:
      return (
        <ScissorsButton onClick={onClick} isAbs={isAbs} hasWave={hasWave} />
      );
    case "placeholder":
      return <PlaceholderButton />;
    default:
      return;
  }
};

export default MovesButton;

const RockButton = ({ onClick, isAbs, hasWave }) => (
  <ButtonTemplate
    hasWave={hasWave}
    gradient={rockGradient}
    onClick={onClick}
    value={moves.ROCK}
    style={isAbs ? { bottom: 0 } : { position: "relative" }}
    isAbs={isAbs}
  >
    <img src={rock} alt={"Rock"} />
  </ButtonTemplate>
);

const PaperButton = ({ onClick, isAbs, hasWave }) => (
  <ButtonTemplate
    hasWave={hasWave}
    gradient={paperGradient}
    onClick={onClick}
    value={moves.PAPER}
    style={isAbs ? { top: 0, left: 0 } : { position: "relative" }}
    isAbs={isAbs}
  >
    <img src={paper} alt={"Paper"} />
  </ButtonTemplate>
);

const ScissorsButton = ({ onClick, isAbs, hasWave }) => (
  <ButtonTemplate
    hasWave={hasWave}
    gradient={scissorsGradient}
    onClick={onClick}
    value={moves.SCISSORS}
    style={isAbs ? { top: 0, right: 0 } : { position: "relative" }}
    isAbs={isAbs}
  >
    <img src={scissors} alt={"Scissors"} />
  </ButtonTemplate>
);

const ButtonTemplate = ({ hasWave, children, ...props }) => (
  <Button {...props}>
    {hasWave && (
      <>
        <CircleAround opacity={0.025} borderWidth={"5.2rem"} />
        <CircleAround opacity={0.025} borderWidth={"6.7rem"} />
        <CircleAround opacity={0.025} borderWidth={"8rem"} />
      </>
    )}
    {children}
  </Button>
);

const ButtonLayout = styled.button`
  width: 6.25rem;
  height: 6.25rem;

  border: none;

  border-radius: 50%;

  :focus {
    outline: none;
  }

  @media (min-width: 1000px) {
    width: 7.25rem;
    height: 7.25rem;
  }
`;

const CircleAround = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  border-radius: 50%;

  border: ${({ borderWidth }) => borderWidth} solid
    rgba(255, 255, 255, ${({ opacity }) => opacity});

  z-index: -1;
`;

const Button = styled(ButtonLayout)`
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  box-shadow: inset 0px 6px 1px rgba(0, 0, 0, 0.35);

  transition: 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);

  :focus {
    background-color: rgba(240, 240, 240, 1);
  }

  :hover {
    transform: scale(1.15);
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    border: 0.7rem solid transparent;
    background: linear-gradient(${({ gradient }) => gradient}) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;

    @media (min-width: 1000px) {
      border-width: 1.3rem;
    }
  }
`;

const PlaceholderButton = styled(ButtonLayout)`
  background-color: rgba(0, 0, 0, 0.25);
  border: none;
`;
