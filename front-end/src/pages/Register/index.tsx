import { useState, useEffect, useRef, FormEvent } from 'react';

import { FormContainer } from './styles';

import { Approach } from '../../components/Approach';
import { Button } from '../../components/Button';
import { TextWithLink } from '../../components/TextWithLink';
import { FormField } from '../../components/FormField/Input';
import { FormFieldGroup } from '../../components/FormField/FormFieldGroup';
import { SelectContainer, SelectOptions } from '../../components/FormField/Select';
import { Modal } from '../../components/Modal';
import { LoadingComponent as Loading } from '../../components/Loading';

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../graphql/Users/mutations';

import { MockCountry } from '../../mock/countries';
import { returnRandomPeople } from '../../utils/returnRandomPeople';

export const Register = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);

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

  return (
    <>
      <FormContainer onSubmit={handleUser}>
        <Approach
          title="Crie sua conta no say-it."
          approach="Faça seu cadastro para compartilhar idéias, pensamentos ou piadas."
        />
        <FormFieldGroup>
          <FormField.InputContainer>
            <FormField.InputLabel label='Primeiro nome' required />
            <FormField.InputField
              id='Primeiro nome'
              type="text"
              placeholder={randomPeople.randomFirstName}
              inputRef={firstNameRef}
            />
          </FormField.InputContainer>
          <FormField.InputContainer>
            <FormField.InputLabel label='Sobrenome' required />
            <FormField.InputField
              id="Sobrenome"
              type="text"
              placeholder={randomPeople.randomLastName}
              inputRef={lastNameRef}
            />
          </FormField.InputContainer>
        </FormFieldGroup>
        <FormField.InputContainer largeInput>
          <FormField.InputLabel label='E-mail' required />
          <FormField.InputField
            id="E-mail"
            type="email"
            placeholder={randomPeople.randomEmail}
            inputRef={emailRef}
          />
        </FormField.InputContainer>
        <SelectContainer
          selectName="countries"
          selectLabel="País"
          inputRef={countryRef}
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
          <FormField.InputContainer>
            <FormField.InputLabel label='Senha' />
            <FormField.InputField
              id='Senha'
              type="password"
              placeholder="No mínimo 8 caracteres"
              inputRef={passwordRef}
            />
          </FormField.InputContainer>
          <FormField.InputContainer>
            <FormField.InputLabel label='Confirmar senha' />
            <FormField.InputField
              id='Confirmar senha'
              type="password"
              placeholder="Repita a senha"
              inputRef={confirmPasswordRef}
            />
          </FormField.InputContainer>
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