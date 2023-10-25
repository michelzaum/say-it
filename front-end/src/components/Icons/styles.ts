import styled from "styled-components";
import { IconProps } from './types';

export const Icon = styled.i<IconProps>`
  &:hover {
    cursor: ${({ isClickable }) => isClickable ? 'pointer' : 'default'};
  }
`;
