import styled from 'styled-components';

import { colors } from '../../../constants/colors';
import { measures } from '../../../constants/measures';

import { FormFieldProps } from './types';

export const Label = styled.label`
  font-size: ${measures['spacing-medium']}px;
  font-weight: 500;
  color: ${colors.dark};
`;

export const Input = styled.input`
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

export const FormFieldContainer = styled.div<Partial<FormFieldProps>>`
  margin-top: ${measures['spacing-x-large']}px;
  width: ${(props) => props.largeInput ? '100%' : '50%'};
  display: flex;
  flex-direction: column;
  gap: ${measures['spacing-small']}px;
`;

export const FormFieldGroup = styled.div`
  width: 100%;
  display: flex;
  gap: ${measures['spacing-large']}px;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  i {
    position: absolute;
    padding: 0 1.5rem;
    cursor: pointer;
  }
`;