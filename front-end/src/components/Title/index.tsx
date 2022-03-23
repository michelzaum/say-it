import React from 'react';
import { TextTitle } from './styles';

import { TitleProps } from './types';

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <TextTitle>{text}</TextTitle>
  );
};