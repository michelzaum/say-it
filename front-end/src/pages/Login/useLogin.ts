import { useLazyQuery } from "@apollo/client";
import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { returnRandomPeople } from "../../utils/returnRandomPeople";
import { LOGIN } from "../../graphql/Users/queries";

export function useLogin() {
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

  return {
    emailRef,
    passwordRef,
    loading,
    error,
    randomEmail,
    modalInfo,
    handleLogin,
  };
}
