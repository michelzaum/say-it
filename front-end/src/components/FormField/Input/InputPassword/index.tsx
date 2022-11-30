import { useState } from "react";
import { Eye } from "../../../Icons/eye";
import { EyeOff } from "../../../Icons/eyeOff";
import { Input } from "../InputComponent";
import { InputWithIcon } from "../InputWithIcon";
import { InputPasswordProps, InputTypeOptions } from "./types";

export const InputPassword: React.FC<InputPasswordProps> = ({ placeholder, inputRef }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState<InputTypeOptions>('password');

  function handlePasswordVisibility() {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    };
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <InputWithIcon>
        {
          isPasswordVisible
          ? <Eye onClick={handlePasswordVisibility} />
          : <EyeOff onClick={handlePasswordVisibility} />
        }
        <Input placeholder={placeholder} type={inputType} inputRef={inputRef} />
      </InputWithIcon>
    </>
  )
};