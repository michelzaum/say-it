import { Button as ButtonComponent } from './styles';

import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ onClick, text, type }) => {
  return (
    <ButtonComponent type={type} onClick={onClick}>{text}</ButtonComponent>
  );
};