import React, { RefObject } from "react";

export type FormFieldProps = {
  label: string
  placeholder: string
  type: string
  largeInput?: boolean
  required?: boolean
  value?: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  inputRef?: RefObject<HTMLInputElement>
};