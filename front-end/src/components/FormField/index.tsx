import React from 'react';
import { Input, Label, FormFieldContainer } from './styles';
import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({ label, placeholder, largeInput }) => {
  return (
    <FormFieldContainer>
      <Label htmlFor={`input${label.replace(/\s/g, '')}`}>{label}</Label>
      <Input id={`input${label.replace(/\s/g, '')}`} largeInput={largeInput} placeholder={placeholder} />
    </FormFieldContainer>
  );
};