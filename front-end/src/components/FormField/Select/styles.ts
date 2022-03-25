import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { measures } from '../../../constants/measures';

export const ListContainer = styled.div`
  margin-top: ${measures['spacing-x-large']}px;
  display: flex;
  flex-direction: column;
  gap: ${measures['spacing-small']}px;
`;

export const ListLabel = styled.label`
  font-size: ${measures['spacing-medium']}px;
  font-weight: 500;
  color: ${colors.dark};
`;

export const List = styled.select`
  height: 59px;
  width: 100%;
  background-color: transparent;
  color: ${colors.dark};
  border: 1px solid ${colors.gray};
  border-radius: 5px;
  padding: 0px ${measures['spacing-large']}px;
  outline-color: ${colors.gray};
`;

export const Option = styled.option`
  color: ${colors.dark};
`;