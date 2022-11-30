import { RefObject } from "react";

export interface InputPasswordProps {
  placeholder: string
  inputRef?: RefObject<HTMLInputElement>
};

export type InputTypeOptions = 'text' | 'password';