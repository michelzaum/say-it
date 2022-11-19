import { useState } from "react";
import { Eye } from "../../../Icons/eye";
import { EyeOff } from "../../../Icons/eyeOff";
import { Input } from "../InputComponent";
import { Label } from "../InputLabel";
import { InputWithIcon } from "../InputWithIcon";
import { InputPasswordProps, InputTypeOptions } from "./types";

export const InputPassword: React.FC<InputPasswordProps> = ({ label, required, placeholder, inputRef }) => {
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
      <Label label={label} required={required} />
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