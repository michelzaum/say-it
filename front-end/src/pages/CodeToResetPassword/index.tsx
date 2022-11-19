import { FormEvent, useState, useRef } from 'react';

import { ResetPasswordContainer } from './styles';
import { ParamsProps } from './types';

import { Approach } from '../../components/Approach';
import { FormField } from '../../components/FormField/InputOld';
import { TextWithLink } from '../../components/TextWithLink';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { LoadingComponent } from '../../components/Loading';
import { ModalProps } from '../../components/Modal/types';
import { FormFieldGroup } from '../../components/FormField/InputOld/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { VALIDATE_CODE_TO_RESET_PASSWORD } from '../../graphql/Users/queries';

export const CodeToResetPassword = () => {
  const codeProvidedRef = useRef<HTMLInputElement>(null);

  const [modalInfo, setModalInfo] = useState<ModalProps>({
    show: false,
    title: '',
    content: '',
    onClick: () => {}
  });

  const [validateCode, { loading, error }] = useLazyQuery(VALIDATE_CODE_TO_RESET_PASSWORD);

  const navigation = useNavigate();

  const location = useLocation();
  
  const params = location.state as ParamsProps;

  if (loading) return <LoadingComponent />
  if (error) return <h1>Error: {` ${error}`}</h1>

  async function handleCodeVerification(e: FormEvent) {
    e.preventDefault();

    const codeProvidedValue = codeProvidedRef.current?.value;
    try {
      const { email } = params;

      if (codeProvidedValue === '') {
        setModalInfo({
          show: true,
          title: 'Código obrigatório',
          content: 'Digite o código encaminhado para o e-mail fornecido para prosseguir com a recuperação de senha.',
          onClick: () => setModalInfo({ ...modalInfo, show: false })
        });
        return;
      };
  
      const checkCode = await validateCode({
        variables: {
          email,
          codeProvided: Number(codeProvidedValue)
        },
      });
  
      if (checkCode) {
        const { data: { isCodeProvidedValid } } = checkCode;
        
        if (isCodeProvidedValid) {
          navigation('/newPassword', {
              state: {
                email,
             },
          });
        } else {
          setModalInfo({
            show: true,
            title: 'Código inválido',
            content: 'O código preenchido é inválido. Por favor, insira o código encaminhado ao e-mail fornecido.',
            onClick: () => setModalInfo({ ...modalInfo, show: false })
          });
        };
      };
    } catch (err) {
      setModalInfo({
        show: true,
        title: 'Tivemos um problema',
        content: 'Houve um erro na validação do código de recuperação de senha. Por favor, tente novamente.',
        onClick: () => setModalInfo({ ...modalInfo, show: false })
      });
    };
  };

  return (
    <>
      <ResetPasswordContainer onSubmit={handleCodeVerification}>
        <Approach
          title="Código de verificação"
          approach={`Encaminhamos um código para o e-mail ${params?.email}. Por favor, acesse este e-mail e insira o código no campo abaixo.`}
        />
        <FormFieldGroup>
          <FormField
            label="Código"
            placeholder="Insira o código"
            type="text"
            required
            inputRef={codeProvidedRef}
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