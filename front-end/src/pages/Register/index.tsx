import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

import { FormContainer } from './styles';

import { Approach } from '../../components/Approach';
import { Button } from '../../components/Button';
import { TextWithLink } from '../../components/TextWithLink';
import { FormField } from '../../components/FormField/Input';
import { FormFieldGroup } from '../../components/FormField/Input/styles';
import { SelectContainer, SelectOptions } from '../../components/FormField/Select';
import { Modal } from '../../components/Modal';
import { LoadingComponent as Loading } from '../../components/Loading';

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../graphql/Users/mutations';

import { MockCountry } from '../../mock/countries';
import { returnRandomPeople } from '../../utils/returnRandomPeople';

export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');

  const [randomPeople, setRandomPeople] = useState({
    randomFirstName: '',
    randomLastName: '',
    randomEmail: ''
  });

  const [modalInfo, setModalInfo] = useState({
    show: false,
    title: '',
    content: '',
    onClick: () => {},
  });
  
  const requiredFields = [firstName, lastName, email, password, confirmPassword];
  
  const [createUser, { loading }] = useMutation(CREATE_USER);
  
  useEffect(() => {
    const { randomFirstName, randomLastName, randomEmail } = returnRandomPeople();
    
    setRandomPeople({
      randomFirstName, randomLastName, randomEmail
    });
  }, []);

  if (loading) return <Loading />;

  const handleUser = async (e: FormEvent) => {
    e.preventDefault();

    if (requiredFields.some(field => field === '')) {
      setModalInfo({
        show: true,
        title: 'Campos obrigatórios',
        content: 'Há campos obrigatórios que não foram preenchidos',
        onClick: () => setModalInfo({ ...modalInfo, show: false })
      });
      return;
    };

    if (password !== confirmPassword) {
      setModalInfo({
        show: true, 
        title: 'Senhas diferentes',
        content: 'A senha fornecida está diferente da confirmação da senha',
        onClick: () => setModalInfo({ ...modalInfo, show: false }),
      });
      return;
    };

    if (password.length < 8) {
      setModalInfo({
        show: true,
        title: 'Senha inválida',
        content: 'A senha deve conter no mínimo 8 caracteres',
        onClick: () => setModalInfo({ ...modalInfo, show: false })
      });
      return;
    };

    await createUser({
      variables: { firstName, lastName, email, password, confirmPassword, country },
      onError(error) {
        setModalInfo({
          show: true,
          title: 'Ocorreu um erro:',
          content: error.message,
          onClick: () => setModalInfo({ ...modalInfo, show: false })
        });
      },
    });
  };

  return (
    <>
      <FormContainer onSubmit={handleUser}>
        <Approach title="Crie sua conta no say-it." approach="Faça seu cadastro para compartilhar idéias, pensamentos ou piadas." />
        <FormFieldGroup>
          <FormField
            label="Primeiro nome"
            type="text"
            placeholder={randomPeople.randomFirstName}
            required
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setFirstName(e.currentTarget.value);
            }}
          />
          <FormField
            label="Sobrenome"
            type="text"
            placeholder={randomPeople.randomLastName}
            required
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setLastName(e.currentTarget.value);
            }}
          />
        </FormFieldGroup>
        <FormField
          largeInput
          label="E-mail"
          type="email"
          placeholder={randomPeople.randomEmail}
          required
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
            required
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setPassword(e.currentTarget.value);
            }}
          />
          <FormField
            label="Confirmar senha"
            type="password"
            placeholder="Repita a senha"
            required
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setConfirmPassword(e.currentTarget.value);
            }}
          />
        </FormFieldGroup>
        <FormFieldGroup>
          <Button text="Cadastrar" />
          <TextWithLink
            text="Possui cadastro?"
            textLink="Faça login"
            linkTo="/"
          />
        </FormFieldGroup>
      </FormContainer>
      <Modal 
        show={modalInfo.show} 
        title={modalInfo.title}
        content={modalInfo.content}
        onClick={modalInfo.onClick}
      />
    </>
  );
};