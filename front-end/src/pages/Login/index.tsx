import { FormEvent, useState } from 'react';

import { LoginContainer } from './styles';

import { Approach } from '../../components/Approach';
import { FormField } from '../../components/FormField/Input';
import { TextWithLink } from '../../components/TextWithLink';

import { FormFieldGroup } from '../../components/FormField/Input/styles';

import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';

import { useLazyQuery } from '@apollo/client';
import { LOGIN } from '../../graphql/Users/queries';

import { returnRandomPeople } from '../../utils/returnRandomPeople';
import { LoadingComponent } from '../../components/Loading';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalInfo, setModalInfo] = useState({
    show: false,
    title: '',
    content: '',
    onClick: () => {}
  });

  const [validateLogin, { loading, error }] = useLazyQuery(LOGIN);

  const { randomEmail } = returnRandomPeople();

  if (loading) return <LoadingComponent />
  if (error) return <h1>Error: {` ${error}`}</h1>

  async function handleLogin (e: FormEvent) {
    e.preventDefault();

    if (password === '' || email === '') {
      setModalInfo({
        show: true,
        title: 'Credenciais obrigatórias',
        content: 'Preencha seu e-mail e senha para realizar o login',
        onClick: () => setModalInfo({ ...modalInfo, show: false  })
      });
      return;
    };

    const loginResult = await validateLogin({
      variables: { email, passwordProvided: password },
    });

    if (loginResult) {
      const { data } = loginResult;
      alert(data.login);
    };
  };

  return (
    <>
      <LoginContainer onSubmit={handleLogin}>
        <Approach title="Bem vindo(a) de volta!" approach="Entre com suas credenciais para acessar a sua conta." />
        <FormField
          label="E-mail"
          type="email"
          placeholder={randomEmail}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            setEmail(e.currentTarget.value);
          }}
          largeInput
        />
        <FormFieldGroup>
          <FormField
            label="Senha"
            type="password"
            placeholder="********"
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setPassword(e.currentTarget.value);
            }}
          />
          <TextWithLink
            linkTo="/forgotPassword"
            textLink="Esqueceu a senha?"
          />
        </FormFieldGroup>
        <FormFieldGroup>
          <TextWithLink
            text="Não tem conta?"
            textLink="Faça cadastro"
            linkTo="/Register"
          />
          <Button text="Entrar" />
        </FormFieldGroup>
      </LoginContainer>
      <Modal
        show={modalInfo.show}
        title={modalInfo.title}
        content={modalInfo.content}
        onClick={modalInfo.onClick}
      />
    </>
  );
};