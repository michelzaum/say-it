import React from "react";
import { IconProps } from '../types';

export const Comment: React.FC<IconProps> = ({ onClick }) => {
  return (
    <i onClick={onClick}>
      <svg width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 3H2v15h4.5v2.5l5-2.5H22V3Z"></path>
        <path d="M7 9.75v1.5"></path>
        <path d="M12 9.75v1.5"></path>
        <path d="M17 9.75v1.5"></path>
      </svg>
    </i>
  );
};
