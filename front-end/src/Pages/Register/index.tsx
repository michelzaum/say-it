import { FormContainer, FormFieldGroup } from './styles';

import { FormField } from '../../components/FormField';

export const Register = () => {
  return (
    <FormContainer>
      <FormFieldGroup>
        <FormField label="Primeiro nome" placeholder="Steve" />
        <FormField label="Sobrenome" placeholder="Jobs" />
      </FormFieldGroup>
      <FormField largeInput label="E-mail" placeholder="stevejobs@mail.com" />
      <FormField largeInput label="País" placeholder="Selecione seu país" />
      <FormFieldGroup>
        <FormField label="Senha" placeholder="No mínimo 8 caracteres" />
        <FormField label="Confirmar senha" placeholder="Repita a senha" />
      </FormFieldGroup>
    </FormContainer>
  );
};