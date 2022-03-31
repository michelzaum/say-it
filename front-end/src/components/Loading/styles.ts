import styled, { keyframes } from 'styled-components';

import { colors } from '../../constants/colors';
import { measures } from '../../constants/measures';

export const LoadingBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingContainer = styled.div`
  background-color: ${colors.white};
  height: 333px;
  width: 478px;
  border-radius: 5px;
  padding: ${measures["spacing-xx-large"]}px ${measures["spacing-large"]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${measures['spacing-medium']}px;
`;

const SpinnerRotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  height: 120px;
  width: 120px;
  border-top: 10px solid ${colors.primaryBlue};
  border-radius: 50%;
  animation: ${SpinnerRotation} 1s linear infinite;
`;

export const LoadingText = styled.span`
  font-size: ${measures['spacing-large']}px;
  font-weight: 700;
  color: ${colors.dark};
  margin-top: ${measures['spacing-xx-large']}px;
`;
