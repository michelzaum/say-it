import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
  font-size: 1.2rem;
  border-radius: 5px;
  height: 3rem;
  padding: 0.5rem 3rem;

  &:hover {
    cursor: pointer;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${colors.white};
  color: ${colors['dark']};
  padding: 0;
`;