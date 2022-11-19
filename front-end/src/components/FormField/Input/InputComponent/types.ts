import React, { RefObject } from "react";

export type InputProps = {
  label?: string
  placeholder: string
  type: string
  required?: boolean
  value?: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  inputRef?: RefObject<HTMLInputElement>
};