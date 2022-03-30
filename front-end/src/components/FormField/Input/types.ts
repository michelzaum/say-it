import React from "react";

export type FormFieldProps = {
  label: string
  placeholder: string
  type: string
  largeInput?: boolean
  required?: boolean
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
};