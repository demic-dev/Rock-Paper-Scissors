import React from "react";
import styled from "styled-components";

import imageRules from "../assets/image-rules.svg";
import close from "../assets/icon-close.svg";
import utils from "../utils";

const Modal = ({ isVisible, onClose }) => {
  return (
    <Wrapper isVisible={isVisible}>
      <ModalHead>rules</ModalHead>
      <RuleImage src={imageRules} alt="Rules" />
      <CloseButton onClick={onClose}>
        <CloseImage src={close} alt="Close" />
      </CloseButton>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  align-content: space-around;
  justify-items: center;

  display: grid;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: #fff;

  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0%)" : "translateY(-100%)"};

  transition: 0.9s cubic-bezier(0.075, 0.82, 0.165, 1);

  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};

  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

const ModalHead = styled.div`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${utils.headerOutline};
`;

const RuleImage = styled.img``;

const CloseButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;

  cursor: pointer;
`;

const CloseImage = styled.img``;
