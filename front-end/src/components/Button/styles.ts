import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { measures } from '../../constants/measures';

export const Button = styled.button`
  width: 340px;
  height: 59px;
  background-color: ${colors.primaryBlue};
  border-radius: 5px;
  color: ${colors.white};
  font-size: 18px;
  font-weight: 600;
  margin-top: ${measures['spacing-x-large']}px;
  cursor: pointer;
  transition: ease-in-out 0.3s;
  
  &:hover {
    background-color: ${colors.primaryBlueHover};
    transition: ease-in-out 0.3s;
  }
`;