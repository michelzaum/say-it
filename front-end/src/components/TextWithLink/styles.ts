import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import { measures } from '../../constants/measures';

export const DefaultTextStyles = css`
  font-size: 18px;
  font-weight: 500;
  margin: 0 auto;
  margin-top: ${measures['spacing-x-large']}px;
  order: 1;
`;

export const Text = styled.span`
  ${DefaultTextStyles}
  color: ${colors.dark};
`;

export const Link = styled.a`
  ${DefaultTextStyles}
  color: ${colors.primaryBlue};
  text-decoration: none;
`;