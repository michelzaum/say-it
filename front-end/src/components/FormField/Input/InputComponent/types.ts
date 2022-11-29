import { RefObject, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string
  placeholder?: string
  type?: string
  value?: string
  inputRef?: RefObject<HTMLInputElement>
  list?: string
  name?: string
};