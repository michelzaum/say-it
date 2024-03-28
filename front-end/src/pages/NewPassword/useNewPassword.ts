import { useMutation } from "@apollo/client";
import { FormEvent, useRef, useState } from "react";
import { UPDATE_USER_PASSWORD } from "../../graphql/Users/mutations";
import { useLocation } from "react-router-dom";
import { ParamsProps } from "../CodeToResetPassword/types";
import { ModalProps } from "../../components/Modal/types";

export function useNewPassord() {
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

  const { email } = params as ParamsProps

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

  return {
    newPasswordRef,
    confirmNewPasswordRef,
    modalInfo,
    loading,
    error,
    handleNewPassword,
  };
}
