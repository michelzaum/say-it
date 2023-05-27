import React from "react";
import { IconProps } from '../types';

export const Comment: React.FC<IconProps> = ({ onClick }) => {
  return (
    <i onClick={onClick}>
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2Zm0 14H6.667L4 18V4h16v12Z"></path>
      </svg>
    </i>
  );
};
