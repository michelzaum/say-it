import { FormContainer, FormFieldGroup } from './styles';

import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import { TextWithLink } from '../../components/TextWithLink';
import { FormField } from '../../components/FormField/Input';
import { SelectContainer, SelectOptions } from '../../components/FormField/Select';

const MockCountry = [
  { id: 1, name: 'Brasil' },
  { id: 2, name: 'Alemanha' },
  { id: 3, name: 'Canadá' },
  { id: 4, name: 'África do Sul' },
  { id: 5, name: 'Coréia do Sul' },
]

export const Register = () => {
  return (
    <FormContainer>
      <Title text="Olá, bem vindo(a) ao say-it!" />
      <FormFieldGroup>
        <FormField label="Primeiro nome" type="text" placeholder="Steve" />
        <FormField label="Sobrenome" type="text" placeholder="Jobs" />
      </FormFieldGroup>
      <FormField largeInput label="E-mail" type="email" placeholder="stevejobs@mail.com" />
      <SelectContainer selectName="countries" selectLabel="País">
        <SelectOptions optionId={0} optionName="Selecione seu país" />
        {
          MockCountry.map(country => (
            <SelectOptions 
              key={country.id}
              optionId={country.id}
              optionName={country.name}
            />
          ))
        };
      </SelectContainer>
      <FormFieldGroup>
        <FormField label="Senha" type="password" placeholder="No mínimo 8 caracteres" />
        <FormField label="Confirmar senha" type="password" placeholder="Repita a senha" />
      </FormFieldGroup>
      <FormFieldGroup>
        <Button />
        <TextWithLink />
      </FormFieldGroup>
    </FormContainer>
  );
};