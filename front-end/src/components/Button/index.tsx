import { Button as ButtonComponent } from './styles';

import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <ButtonComponent onClick={onClick}>{text}</ButtonComponent>
  );
};