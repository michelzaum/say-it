import { FormContainer, FormFieldGroup } from './styles';

import { FormField } from '../../components/FormField';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import { TextWithLink } from '../../components/TextWithLink';

export const Register = () => {
  return (
    <FormContainer>
      <Title text="Olá, bem vindo(a) ao say-it!" />
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
      <FormFieldGroup>
        <Button />
        <TextWithLink />
      </FormFieldGroup>
    </FormContainer>
  );
};