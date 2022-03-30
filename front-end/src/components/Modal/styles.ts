import styled from "styled-components";

import { colors } from "../../constants/colors";
import { measures } from "../../constants/measures";

import { ModalProps } from './types';

export const ModalContainer = styled.div<Partial<ModalProps>>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: ${({ show }) => show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`;

export const ModalInfo = styled.div`
  background-color: ${colors.white};
  height: 333px;
  width: 478px;
  border-radius: 5px;
  padding: ${measures["spacing-xx-large"]}px ${measures["spacing-large"]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.h1`
  color: ${colors.dark};
  font-weight: 600;
`;

export const ModalContent = styled.span`
  text-align: center;
  font-weight: 500;
  color: ${colors.dark};
  padding: ${measures["spacing-large"]}px;
`;