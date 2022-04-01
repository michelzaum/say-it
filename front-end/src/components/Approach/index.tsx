import React from 'react';
import { ApproachContainer, TextTitle, TextApproach } from './styles';

import { ApproachProps } from './types';

export const Approach: React.FC<ApproachProps> = ({ title, approach }) => {
  return (
    <ApproachContainer>
      <TextTitle>{title}</TextTitle>
      <TextApproach>{approach}</TextApproach>
    </ApproachContainer>
  );
};