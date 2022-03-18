import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { measures } from '../../constants/measures';

export const Label = styled.label`
  font-size: ${measures['spacing-medium']}px;
  font-weight: 500;
  color: ${colors.dark};
`;

export const Input = styled.input`
  height: 59px;
  width: 340px;
  color: ${colors.dark};
  border: 1px solid ${colors.gray};
  border-radius: 5px;
  padding-left: ${measures['spacing-large']}px;
  outline-color: rgba(0, 0, 0, 0.3);

  ::placeholder {
    color: ${colors.gray};
  }
`;