import React, { useState, useEffect } from "react";

import styled from "styled-components";
import Heading from "./components/Header";
import Rules from "./components/Rules";
import StartScreen from "./components/StartScreen";

function App() {
  const [score, setScore] = useState(localStorage.getItem("score") || 0);
  const handleScore = () => setScore((oldScore) => +oldScore + 1);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  return (
    <Wrapper>
      <Heading score={score} />
      <StartScreen handleScore={handleScore} />
      <Rules />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;

  align-content: space-around;
`;
