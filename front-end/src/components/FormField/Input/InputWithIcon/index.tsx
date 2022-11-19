import { InputWithIconComponent } from "./styles";
import { InputWithIconProps } from "./types";

export const InputWithIcon: React.FC<InputWithIconProps> = ({ children }) => {
  return (
    <InputWithIconComponent>
      {children}
    </InputWithIconComponent>
  )
};