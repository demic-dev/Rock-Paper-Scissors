import React, { useEffect, useState } from "react";

import styled, { keyframes } from "styled-components";

import MovesButton from "./MovesButton";

import bgTriangle from "../assets/bg-triangle.svg";
import utils from "../utils";

const StartScreen = ({ handleScore }) => {
  const [playerMove, setPlayerMove] = useState(utils.moves.PLACEHOLDER);
  const [cpuChoose, setCPUChoose] = useState(utils.moves.PLACEHOLDER);
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);
  const [isChoosen, setIsChoosen] = useState(false);

  const [winnerGame, setWinnerGame] = useState(utils.winners.NONE);

  useEffect(() => {
    if (cpuChoose !== utils.moves.PLACEHOLDER) {
      const winnerUser = calculateWin(playerMove, cpuChoose);
      if (winnerUser === utils.winners.PLAYER) handleScore();
      setWinnerGame(winnerUser);
    }
  }, [cpuChoose, playerMove]);

  const handlePlayerMove = async (e) => {
    setPlayerMove(+e.currentTarget.value);
    setIsChoosen(true);
    setCPUChoose(await handleCPUChoose());
  };

  const handleCPUChoose = () => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(~~(Math.random() * 3)), 500)
    );
  };

  const calculateWin = (player, cpu) => {
    if ((player + 1) % 3 === cpu) {
      return utils.winners.CPU;
    } else if (player === cpu) {
      return utils.winners.DRAW;
    } else {
      return utils.winners.PLAYER;
    }
  };

  const handleNewGame = () => {
    setPlayerMove(utils.moves.PLACEHOLDER);
    setCPUChoose(utils.moves.PLACEHOLDER);
    setWinnerGame(utils.winners.NONE);

    setIsChoosen(false);
  };

  const handleEndAnimation = async () => setIsAnimationEnd(true);

  return (
    <Wrapper>
      <ContentWrapper isChoosen={isChoosen}>
        {!isChoosen ? (
          <>
            <MovesButton type={utils.moves.ROCK} onClick={handlePlayerMove} />
            <MovesButton type={utils.moves.PAPER} onClick={handlePlayerMove} />
            <MovesButton
              type={utils.moves.SCISSORS}
              onClick={handlePlayerMove}
            />
            <Triangle src={bgTriangle} alt="Triangle" />
          </>
        ) : (
          <>
            <ResultContainer>
              <MovesButton hasWave type={playerMove} />
              <ResultText>YOU PICKED</ResultText>
            </ResultContainer>
            <ResultContainer>
              <MovesButton
                hasWave
                wasPlaceholder
                type={cpuChoose}
                onAnimationEnd={handleEndAnimation}
              />
              <ResultText>THE House picked</ResultText>
            </ResultContainer>
          </>
        )}
      </ContentWrapper>
      {isChoosen && (
        <MatchResultContainer>
          <MatchResult>
            {!isAnimationEnd
              ? "..."
              : winnerGame === utils.winners.PLAYER
              ? "You win"
              : winnerGame === utils.winners.CPU
              ? "You lose"
              : winnerGame === utils.winners.DRAW
              ? "It's a tie"
              : winnerGame === utils.winners.NONE
              ? "choosing..."
              : ""}
          </MatchResult>
          <MatchResultCTA disabled={!isAnimationEnd} onClick={handleNewGame}>
            Play again
          </MatchResultCTA>
        </MatchResultContainer>
      )}
    </Wrapper>
  );
};

export default StartScreen;

const Wrapper = styled.div`
  display: grid;
  gap: 4rem;

  user-select: none;
`;

const Triangle = styled.img`
  width: 100%;
  height: 100%;
  z-index: -2;
`;

const ContentWrapper = styled.div`
  width: ${({ isChoosen }) => (isChoosen ? "100%" : "auto")};
  margin: 0 auto;
  padding: 2rem;
  position: relative;

  display: flex;
  justify-content: space-evenly;

  ${Triangle} {
    visibility: ${({ isChoosen }) => (isChoosen ? "hidden" : "visible")};
  }
`;

const ResultContainer = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 1000px) {
    gap: 3rem;
  }

  justify-items: center;
`;

const ResultText = styled.div`
  color: white;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

const MatchResultContainer = styled.div`
  width: 100%;

  display: grid;
  justify-content: center;
  align-content: flex-start;

  gap: 1.2rem;
`;

const MatchResult = styled.div`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

const MatchResultCTA = styled.button`
  font-size: 18px;
  padding: 0.9rem;
  cursor: pointer;
  font-weight: 700;
  border-radius: 8px;
  letter-spacing: 1px;
  background-color: #fff;
  text-transform: uppercase;
`;
