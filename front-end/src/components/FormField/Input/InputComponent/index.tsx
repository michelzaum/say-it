import { InputComponent } from "./styles";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  label, placeholder, type, onChange, value, inputRef
}) => {
  return (
    <InputComponent
      onChange={onChange}
      id={`input${label?.replace(/\s/g, '')}`}
      type={type}
      placeholder={placeholder}
      value={value}
      ref={inputRef}
    />
  )
};