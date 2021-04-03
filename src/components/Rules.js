import React, { useState } from "react";
import styled from "styled-components";
import utils from "../utils";
import Modal from "./Modal";

const Rules = () => {
  const [isModalVisible, setIsVisible] = useState(false);

  const handleModal = () => setIsVisible((prev) => !prev);

  return (
    <Wrapper>
      <Button onClick={handleModal}>RULES</Button>
      <Modal isVisible={isModalVisible} onClose={handleModal} />
    </Wrapper>
  );
};

export default Rules;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Button = styled.div`
  border: 2px solid ${utils.headerOutline};
  padding: 0.75rem 1.5rem;
  letter-spacing: 2px;
  border-radius: 8px;
  font-weight: 700;
  color: white;

  transition: 0.65s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-color: #fff;
    color: ${utils.headerOutline};
  }

  cursor: pointer;
`;
