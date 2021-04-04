import React from "react";
import styled, { keyframes } from "styled-components";

import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissors from "../assets/icon-scissors.svg";

import { rockGradient, paperGradient, scissorsGradient, moves } from "../utils";

const MovesButton = ({
  type,
  onClick,
  isAbs = true,
  hasWave = false,
  ...props
}) => {
  switch (type) {
    case moves.ROCK:
      return <RockButton onClick={onClick} hasWave={hasWave} {...props} />;
    case moves.PAPER:
      return <PaperButton onClick={onClick} hasWave={hasWave} {...props} />;
    case moves.SCISSORS:
      return <ScissorsButton onClick={onClick} hasWave={hasWave} {...props} />;
    case "placeholder":
      return <PlaceholderButton />;
    default:
      return;
  }
};

export default MovesButton;

const RockButton = ({ onClick, hasWave, ...props }) => (
  <ButtonTemplate
    hasWave={hasWave}
    gradient={rockGradient}
    onClick={onClick}
    value={moves.ROCK}
    style={!hasWave ? { bottom: 0 } : { position: "relative" }}
    {...props}
  >
    <img src={rock} alt={"Rock"} />
  </ButtonTemplate>
);

const PaperButton = ({ onClick, hasWave, ...props }) => (
  <ButtonTemplate
    hasWave={hasWave}
    gradient={paperGradient}
    onClick={onClick}
    value={moves.PAPER}
    style={!hasWave ? { top: 0, left: 0 } : { position: "relative" }}
    {...props}
  >
    <img src={paper} alt={"Paper"} />
  </ButtonTemplate>
);

const ScissorsButton = ({ onClick, hasWave, ...props }) => (
  <ButtonTemplate
    hasWave={hasWave}
    gradient={scissorsGradient}
    onClick={onClick}
    value={moves.SCISSORS}
    style={!hasWave ? { top: 0, right: 0 } : { position: "relative" }}
    {...props}
  >
    <img src={scissors} alt={"Scissors"} />
  </ButtonTemplate>
);

const ButtonTemplate = ({ hasWave, children, gradient, ...props }) => (
  <ButtonWrapper {...props} isAbs={!hasWave}>
    <Button gradient={gradient}>
      {hasWave && (
        <>
          <CircleAround borderWidth={"5rem"} seconds={0.65} />
          <CircleAround borderWidth={"6.5rem"} seconds={0.45} />
          <CircleAround borderWidth={"7.8rem"} seconds={0.25} />
        </>
      )}
      {children}
    </Button>
  </ButtonWrapper>
);

const transitionIn = keyframes`
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const ButtonLayout = styled.span`
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

  border: ${({ borderWidth }) => borderWidth} solid rgba(255, 255, 255, 0.025);

  visibility: hidden;

  transition: ${({ seconds }) => seconds}s ease-in;

  z-index: -1;
`;

const Button = styled(ButtonLayout)`
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: inset 0px 6px 1px rgba(0, 0, 0, 0.35);

  :focus {
    background-color: rgba(240, 240, 240, 1);
  }

  :hover ${CircleAround} {
    visibility: visible;
    transform: scale(1.2);
  }

  &:after {
    z-index: -1;
    content: "";
    top: -0.7rem;
    left: -0.7rem;
    right: -0.7rem;
    bottom: -0.7rem;
    position: absolute;
    border-radius: 50%;
    box-shadow: 0 -0.4rem 0 rgba(0, 0, 0, 0.35) inset;
    background: linear-gradient(${({ gradient }) => gradient});

    @media (min-width: 1000px) {
      top: -1rem;
      bottom: -1rem;
      left: -1rem;
      right: -1rem;
    }
  }
`;

const PlaceholderButton = styled(ButtonLayout)`
  background-color: rgba(0, 0, 0, 0.25);
  border: none;
`;

const ButtonWrapper = styled.button`
  transition: 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);

  position: absolute;

  border-radius: 50%;
  border: none;
  z-index: 0;

  animation-duration: 1s;
  animation-name: ${transitionIn};
  animation-timing-function: ease-in;
  animation-iteration-count: ${({ wasPlaceholder }) => (!wasPlaceholder ? "0" : "1")};

  :hover {
    transform: scale(1.15);
  }
`;
