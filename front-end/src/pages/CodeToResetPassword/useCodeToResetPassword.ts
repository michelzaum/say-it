import { FormEvent, useRef, useState } from "react";
import { ModalProps } from "../../components/Modal/types";
import { useLazyQuery } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import { ParamsProps } from "./types";
import { VALIDATE_CODE_TO_RESET_PASSWORD } from "../../graphql/Users/queries";

export function useCodeToResetPassword() {
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

  return {
    codeProvidedRef,
    modalInfo,
    loading,
    error,
    params,
    handleCodeVerification,
  };
}
