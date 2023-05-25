import styled from "styled-components";
import { colors } from "../../constants/colors";

export const InteractionsContaincer = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  padding: 0.8rem;
  border: 0.1px solid transparent;
  border-radius: 8px;
  transition: 0.2s border;

  &:hover {
    cursor: pointer;
    border: 0.1px solid ${colors.gray};
  }
`;

export const Text = styled.span``;
