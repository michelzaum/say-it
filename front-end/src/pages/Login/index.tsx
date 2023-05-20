import { FormEvent, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLazyQuery } from '@apollo/client';
import { LOGIN } from '../../graphql/Users/queries';

import { LoginContainer } from './styles';

import { FormField } from '../../components/FormField/Input';
import { Approach } from '../../components/Approach';
import { TextWithLink } from '../../components/TextWithLink';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { LoadingComponent } from '../../components/Loading';
import { FormFieldGroup } from '../../components/FormField/FormFieldGroup';

import { returnRandomPeople } from '../../utils/returnRandomPeople';

export const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigation = useNavigate();

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

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email === '' || password === '') {
      setModalInfo({
        show: true,
        title: 'Credenciais obrigatórias',
        content: 'Preencha seu e-mail e senha para realizar o login',
        onClick: () => setModalInfo({ ...modalInfo, show: false  }),
      });
      return;
    };

    const loginResult = await validateLogin({
      variables: { email, passwordProvided: password },
    });

    if (loginResult) {
      navigation('/feed');
    };
  };

  return (
    <>
      <LoginContainer onSubmit={handleLogin}>
        <Approach title="Bem vindo(a) de volta!" approach="Entre com suas credenciais para acessar a sua conta." />
        <FormField.InputContainer largeInput>
          <FormField.InputLabel label='E-mail' required />
          <FormField.InputField
            id='E-mail'
            placeholder={randomEmail}
            type='email'
            inputRef={emailRef}
          />
        </FormField.InputContainer>
        <FormFieldGroup>
          <FormField.InputContainer>
            <FormField.InputLabel label='Senha' required />
            <FormField.InputFieldPassword
              placeholder='********'
              inputRef={passwordRef}
            />
          </FormField.InputContainer>
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