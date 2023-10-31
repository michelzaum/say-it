import styled, { keyframes } from "styled-components";
import { colors } from "../../constants/colors";

const interactionTransition = keyframes`
  0% {
    fill: ${colors.white};
    scale: 0.1;
  }
  50% {
    scale: 1.5;
  }
  100% {
    fill: red;
    stroke: red;
    scale: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InteractionsContaincer = styled.div<{ isClicked: boolean }>`
  display: flex;
  align-items: start;
  gap: 0.5rem;

  i svg {
    animation: ${({ isClicked }) => isClicked ? interactionTransition : ''} 0.2s ease-in-out forwards;
  }
  
  &:not(:first-child) {
    margin-left: 1rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.span`
  font-size: 0.9rem;
  color: ${colors["gray-darker"]};

  &:not(:first-child) {
    margin-right: 1rem;
  }
`;
