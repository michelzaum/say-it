import { FormEvent, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/Users/mutations";
import { returnRandomPeople } from "../../utils/returnRandomPeople";

export function useRegister() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

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
  
  const [createUser, { loading } ] = useMutation(CREATE_USER);
  
  useEffect(() => {
    const { randomFirstName, randomLastName, randomEmail } = returnRandomPeople();
    
    setRandomPeople({
      randomFirstName, randomLastName, randomEmail
    });
  }, []);

  const handleUser = async (e: FormEvent) => {
    e.preventDefault();
    const firstNameValue = firstNameRef.current?.value;
    const lastNameValue = lastNameRef.current?.value;
    const emailValue = emailRef.current?.value;
    const passwordValue = passwordRef.current?.value;
    const confirmPasswordValue = confirmPasswordRef.current?.value;
    const countryValue = countryRef.current?.value;

    const requiredFields = [
      firstNameValue, lastNameValue, emailValue, passwordValue, confirmPasswordValue
    ];

    if (requiredFields.some(field => field === '')) {
      setModalInfo({
        show: true,
        title: 'Campos obrigatórios',
        content: 'Há campos obrigatórios que não foram preenchidos',
        onClick: () => setModalInfo({ ...modalInfo, show: false })
      });
      return;
    };

    if (passwordValue !== confirmPasswordValue) {
      setModalInfo({
        show: true, 
        title: 'Senhas diferentes',
        content: 'A senha fornecida está diferente da confirmação da senha',
        onClick: () => setModalInfo({ ...modalInfo, show: false }),
      });
      return;
    };

    if (passwordValue && passwordValue.length < 8) {
      setModalInfo({
        show: true,
        title: 'Senha inválida',
        content: 'A senha deve conter no mínimo 8 caracteres',
        onClick: () => setModalInfo({ ...modalInfo, show: false })
      });
      return;
    };

    await createUser({
      variables: {
        firstNameValue, lastNameValue, emailValue, passwordValue, countryValue
      },
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

  return {
    firstNameRef,
    lastNameRef,
    emailRef,
    passwordRef,
    confirmPasswordRef,
    countryRef,
    randomPeople,
    modalInfo,
    loading,
    handleUser,
  };
}
