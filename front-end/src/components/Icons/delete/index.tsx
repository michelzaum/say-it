import React from 'react'
import { IconProps } from '../types';

export const Delete: React.FC<IconProps> = ({ onClick }) => {
  return (
    <i onClick={onClick}>
      <svg width="46" height="46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 5v17h15V5h-15Z"></path>
        <path d="M10 10v6.5"></path>
        <path d="M14 10v6.5"></path>
        <path d="M2 5h20"></path>
        <path d="m8 5 1.645-3h4.744L16 5H8Z"></path>
      </svg>
    </i>
  );
};

