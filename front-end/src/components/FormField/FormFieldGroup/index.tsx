import React from 'react';
import { FormFieldGroupComponent } from './styles';

export const FormFieldGroup: React.FC = ({ children }) => {
  return (
    <FormFieldGroupComponent>
      {children}
    </FormFieldGroupComponent>
  )
}