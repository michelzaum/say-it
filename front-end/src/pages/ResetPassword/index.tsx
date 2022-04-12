import { FormEvent, useState } from 'react';

import { ResetPasswordContainer } from './styles';
import { ParamsProps } from './types';

import { Approach } from '../../components/Approach';
import { FormField } from '../../components/FormField/Input';
import { TextWithLink } from '../../components/TextWithLink';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { ModalProps } from '../../components/Modal/types';
import { FormFieldGroup } from '../../components/FormField/Input/styles';
import { useLocation, useNavigate } from 'react-router-dom';

export const ResetPassword = () => {
  const [codeVerification, setCodeVerification] = useState('');
  const [modalInfo, setModalInfo] = useState<ModalProps>({
    show: false,
    title: '',
    content: '',
    onClick: () => {}
  });

  const navigation = useNavigate();

  const location = useLocation();
  
  const params = location.state as ParamsProps;

  function handleCodeVerification(e: FormEvent) {
    e.preventDefault();

    const { codeToResetPassword, id } = params;

    if (Number(codeVerification) === Number(codeToResetPassword)) {
      navigation('/newPassword', {
        state: {
          id
        },
      });
    } else {
      setModalInfo({
        show: true,
        title: 'Código inválido',
        content: 'O código fornecido está inválido. Por favor, tente novamente.',
        onClick: () => setModalInfo({ ...modalInfo, show: false })
      });
    };

    setCodeVerification('');
  };

  return (
    <>
      <ResetPasswordContainer onSubmit={handleCodeVerification}>
        <Approach
          title="Código de verificação"
          approach="Cheque seu e-mail e insira o código de verificação que foi enviado para prosseguir."
        />
        <FormFieldGroup>
          <FormField
            label="Código"
            placeholder="Insira o código"
            type="text"
            required
            value={codeVerification}
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setCodeVerification(e.currentTarget.value)
            }}
          />
          <TextWithLink
            linkTo="/forgotPassword"
            text="Não recebeu?"
            textLink="Reenviar código"
          />
        </FormFieldGroup>
        <FormFieldGroup>
          <TextWithLink
            linkTo="/"
            text="Voltar para o"
            textLink="login"
          />
          <Button text="Continuar"/>
        </FormFieldGroup>
      </ResetPasswordContainer>
      <Modal
        show={modalInfo.show}
        title={modalInfo.title}
        content={modalInfo.content}
        onClick={modalInfo.onClick}
      />
    </>
  );
};