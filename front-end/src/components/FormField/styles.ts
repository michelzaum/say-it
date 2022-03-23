import styled from 'styled-components';

import { colors } from '../../constants/colors';
import { measures } from '../../constants/measures';

import { FormFieldProps } from './types';

export const Label = styled.label`
  font-size: ${measures['spacing-medium']}px;
  font-weight: 500;
  color: ${colors.dark};
`;

export const Input = styled.input<Partial<FormFieldProps>>`
  height: 59px;
  width: ${({ largeInput }) => largeInput ? '100%' : '340px' };
  color: ${colors.dark};
  border: 1px solid ${colors.gray};
  border-radius: 5px;
  padding-left: ${measures['spacing-large']}px;
  outline-color: ${colors.gray};

  ::placeholder {
    color: ${colors.gray};
  }
`;

export const FormFieldContainer = styled.div`
  margin-top: ${measures['spacing-x-large']}px;
  display: flex;
  flex-direction: column;
  gap: ${measures['spacing-small']}px;
`;
