import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InteractionsContaincer = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5rem;
  
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
