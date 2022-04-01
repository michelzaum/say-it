import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import { measures } from '../../constants/measures';

export const DefaultTextStyles = css`
  font-size: ${measures['spacing-medium']}px;
  font-weight: 500;
  margin: 0 auto;
  margin-top: ${measures['spacing-x-large']}px;
  order: 1;
`;

export const TextContainer = styled.div`
  width: 50%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  ${DefaultTextStyles}
  color: ${colors.dark};
`;

export const Link = styled.a`
  ${DefaultTextStyles}
  color: ${colors.blue};
  text-decoration: none;
`;