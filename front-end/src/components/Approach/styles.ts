import styled from 'styled-components';

import { colors } from '../../constants/colors';
import { measures } from '../../constants/measures';

export const ApproachContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${measures['spacing-small']}px;
`;

export const TextTitle = styled.h1`
  color: ${colors.dark};
  font-size: ${measures['spacing-x-large']};
`;
  
export const TextApproach = styled.span`
  font-size: ${measures['spacing-medium']}px;
  color: ${colors['dark-light-1']};
  padding-bottom: ${measures['spacing-large']}px;
`;
