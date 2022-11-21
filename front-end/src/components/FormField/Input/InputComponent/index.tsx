import { InputComponent } from "./styles";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  id, placeholder, type, onChange, value, inputRef
}) => {
  return (
    <InputComponent
      onChange={onChange}
      id={`input${id?.replace(/\s/g, '')}`}
      type={type}
      placeholder={placeholder}
      value={value}
      ref={inputRef}
    />
  )
};