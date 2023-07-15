import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const Button = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
  font-size: 1.2rem;
  border-radius: 5px;
  height: 3rem;

  &:hover {
    cursor: pointer;
  }
`;
