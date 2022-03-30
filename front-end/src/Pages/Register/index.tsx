import { useState, FormEvent, ChangeEvent } from 'react';

import { FormContainer, FormFieldGroup } from './styles';

import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import { TextWithLink } from '../../components/TextWithLink';
import { FormField } from '../../components/FormField/Input';
import { SelectContainer, SelectOptions } from '../../components/FormField/Select';
import { Modal } from '../../components/Modal';

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../graphql/Users/mutations';

import { MockCountry } from '../../mock/countries';

export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');

  const [differentPasswords, setDifferentPasswords] = useState(false);

  const [createUser, { loading, error }] = useMutation(CREATE_USER);

  if (loading) return <h1>Submitting...</h1>;
  if (error) return <h1>Submission error! {error.message}</h1>;

  const handleUser = (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setDifferentPasswords(true);
      return;
    }
    createUser({
      variables: { firstName, lastName, email, password, confirmPassword, country }
    });
    if (error) {
      return { message: `Error in create user: ${error}` };
    }
  };

  return (
    <>
      <FormContainer onSubmit={handleUser}>
        <Title text="Olá, bem vindo(a) ao say-it!" />
        <FormFieldGroup>
          <FormField
            label="Primeiro nome"
            type="text"
            placeholder="Steve"
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setFirstName(e.currentTarget.value);
            }}
          />
          <FormField
            label="Sobrenome"
            type="text"
            placeholder="Jobs"
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setLastName(e.currentTarget.value);
            }}
          />
        </FormFieldGroup>
        <FormField
          largeInput
          label="E-mail"
          type="email"
          placeholder="stevejobs@mail.com"
          onChange={(e: FormEvent<HTMLInputElement>) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <SelectContainer
          selectName="countries"
          selectLabel="País"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setCountry(e.currentTarget.value);
          }}
        >
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
          <FormField
            label="Senha"
            type="password"
            placeholder="No mínimo 8 caracteres"
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setPassword(e.currentTarget.value);
            }}
          />
          <FormField
            label="Confirmar senha"
            type="password"
            placeholder="Repita a senha"
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setConfirmPassword(e.currentTarget.value);
            }}
          />
        </FormFieldGroup>
        <FormFieldGroup>
          <Button text="Cadastrar" />
          <TextWithLink />
        </FormFieldGroup>
      </FormContainer>
      <Modal 
        show={differentPasswords} 
        title="Senhas diferentes"
        content="A senha fornecida está diferente da confirmação da senha"
        onClick={() => setDifferentPasswords(false)}
      />
    </>
  );
};