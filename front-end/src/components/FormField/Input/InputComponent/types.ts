import React, { RefObject } from "react";

export type InputProps = {
  id?: string
  placeholder: string
  type: string
  value?: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  inputRef?: RefObject<HTMLInputElement>
};