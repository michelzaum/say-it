import styled from 'styled-components';
import { measures } from '../../constants/measures';

export const FormContainer = styled.form`
  margin: 0 auto;
  height: 100vh;
  width: 705px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormFieldGroup = styled.div`
  display: flex;
  gap: ${measures['spacing-large']}px;
`;
