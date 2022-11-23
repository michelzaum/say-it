import { FormEvent, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { UPDATE_USER_PASSWORD } from '../../graphql/Users/mutations';

import { NewPasswordContainer } from './styles';

import { Approach } from '../../components/Approach';
import { FormField } from '../../components/FormField/Input';
import { FormFieldGroup } from '../../components/FormField/FormFieldGroup';
import { Button } from '../../components/Button';
import { TextWithLink } from '../../components/TextWithLink';
import { Modal } from '../../components/Modal';
import { ModalProps } from '../../components/Modal/types';
import { LoadingComponent } from '../../components/Loading';

import { ParamsProps } from '../CodeToResetPassword/types';

export const NewPassword = () => {
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmNewPasswordRef = useRef<HTMLInputElement>(null);

  const [modalInfo, setModalInfo] = useState<ModalProps>({
    show: false,
    title: '',
    content: '',
    onClick: () => {}
  });

  const [updatePassword, { loading, error }] = useMutation(UPDATE_USER_PASSWORD);

  const location = useLocation();

  const params = location.state;

  const { email } = params as ParamsProps;

  if (loading) return <LoadingComponent />
  if (error) return <h1>Submission error! {error.message}</h1>;

  function handleNewPassword (e: FormEvent) {
    e.preventDefault();

    const newPasswordValue = newPasswordRef.current?.value;
    const confirmNewPasswordValue = confirmNewPasswordRef.current?.value;

    if (newPasswordValue === '' || confirmNewPasswordValue === '') {
      setModalInfo({
        show: true,
        title: 'Campos obrigatórios',
        content: 'Preencha a nova senha e a repita para confirmar a recuperação.',
        onClick: () => setModalInfo({ ...modalInfo, show: false })
      });
      return;
    } else if (newPasswordValue && newPasswordValue.length < 8) {
      setModalInfo({
        show: true,
        title: 'Senha inválida',
        content: 'A senha deve conter no mínimo 8 caracteres',
        onClick: () => setModalInfo({ ...modalInfo, show: false })
      });
      return;
    } else if (newPasswordValue !== confirmNewPasswordValue) {
      setModalInfo({
        show: true,
        title: 'Senhas diferentes',
        content: 'A senha fornecida está diferente da confirmação da senha.',
        onClick: () => setModalInfo({ ...modalInfo, show: false })
      });
      return;
    };

    updatePassword({
      variables: {
        email,
        newPassword: newPasswordValue
      },
    });

    if (error) {
      return { message: `Error: ${error}` };
    };
  };
  
  return (
    <>
      <NewPasswordContainer onSubmit={handleNewPassword}>
        <Approach
          title="Cria uma nova senha"
          approach="Crie uma nova senha para acessar o say.it."
        />
        <FormFieldGroup>
          <FormField.InputContainer>
            <FormField.InputLabel label='Nova senha' required />
            <FormField.InputField
              id='Nova senha'
              placeholder="No mínimo 8 caracteres"
              type="password"
              inputRef={newPasswordRef}
            />
          </FormField.InputContainer>
          <FormField.InputContainer>
            <FormField.InputLabel label='Confirmar nova senha' required />
            <FormField.InputField
              id='Confirmar nova senha'
              placeholder="Repita a nova senha"
              type="password"
              inputRef={confirmNewPasswordRef}
            />
          </FormField.InputContainer>
        </FormFieldGroup>
        <FormFieldGroup>
          <TextWithLink
            textLink="Sugestão de senha"
            linkTo="/"
          />
          <Button text="Confirmar" />
        </FormFieldGroup>
      </NewPasswordContainer>
      <Modal
        show={modalInfo.show}
        title={modalInfo.title}
        content={modalInfo.content}
        onClick={modalInfo.onClick}
      />
    </>
  );
};