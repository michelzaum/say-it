import styled from 'styled-components';

import { colors } from '../../../../constants/colors';
import { measures } from '../../../../constants/measures';

export const InputComponent = styled.input`
  height: 59px;
  width: 100%;
  color: ${colors.dark};
  border: 1px solid ${colors.gray};
  border-radius: 5px;
  padding-left: ${measures['spacing-large']}px;
  outline-color: ${colors.gray};

  ::placeholder {
    color: ${colors.gray};
  }
`;