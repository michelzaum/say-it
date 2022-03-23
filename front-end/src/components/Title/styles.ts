import styled from 'styled-components';

import { colors } from '../../constants/colors';
import { measures } from '../../constants/measures';

export const TextTitle = styled.h1`
  color: ${colors.dark};
  font-size: ${measures['spacing-x-large']};
  padding-bottom: ${measures['spacing-xx-large']}px;
`;
