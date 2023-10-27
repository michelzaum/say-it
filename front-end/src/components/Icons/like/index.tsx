import React from "react"
import { IconProps } from '../types';
import { colors } from '../../../constants/colors';

export const Like: React.FC<IconProps> = ({ onClick }) => {
  return (
    <i onClick={onClick}>
      <svg width="24" height="24" fill={colors.white} stroke={colors["gray-darker"]} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.206 4.793a5.938 5.938 0 0 0-4.21-1.754 5.9 5.9 0 0 0-3.995 1.558 5.904 5.904 0 0 0-6.279-1.1 5.942 5.942 0 0 0-1.93 1.3c-2.354 2.363-2.353 6.06.001 8.412L12 21.416l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416Z"></path>
      </svg>
    </i>
  );
};

