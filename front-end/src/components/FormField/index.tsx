import React from 'react';
import { Input, Label, FormFieldContainer } from './styles';
import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({ label, placeholder, largeInput, type }) => {
  return (
    <FormFieldContainer>
      <Label htmlFor={`input${label.replace(/\s/g, '')}`}>{label}</Label>
      <Input id={`input${label.replace(/\s/g, '')}`} type={type} placeholder={placeholder} largeInput={largeInput} />
    </FormFieldContainer>
  );
};