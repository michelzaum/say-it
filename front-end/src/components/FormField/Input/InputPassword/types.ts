import { RefObject } from "react";

export interface InputPasswordProps {
  label: string
  required: boolean
  placeholder: string
  inputRef?: RefObject<HTMLInputElement>
};

export type InputTypeOptions = 'text' | 'password';