import React from "react";

export type FormFieldProps = {
  label: string
  placeholder: string
  type: string
  largeInput?: boolean
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
};