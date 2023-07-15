import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const Content = styled.textarea`
  min-height: 200px;
  outline-color: ${colors.gray};
  border: 1px solid ${colors.gray};
  border-radius: 0%.5rem;
  padding: 1rem;
`;
