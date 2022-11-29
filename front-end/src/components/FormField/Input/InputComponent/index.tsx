import { InputComponent } from "./styles";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  id, placeholder, type, value, inputRef, list, name
}) => {
  return (
    <InputComponent
      id={`input${id?.replace(/\s/g, '')}`}
      list={list}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      ref={inputRef}
    />
  )
};