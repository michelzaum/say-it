import styled from "styled-components";
import { measures } from "../../../../constants/measures";
import { InputContainerProps } from "./types";

export const InputContainerComponent = styled.div<InputContainerProps>`
  margin-top: ${measures['spacing-x-large']}px;
  width: ${(props) => props.largeInput ? '100%' : '50%'};
  display: flex;
  flex-direction: column;
  gap: ${measures['spacing-small']}px;
`;