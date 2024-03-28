import { useLazyQuery, useMutation } from "@apollo/client";
import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FIND_USER_BY_EMAIL } from "../../graphql/Users/queries";
import { GENERATE_CODE_TO_RESET_PASSWORD } from "../../graphql/Users/mutations";

export function useForgotPassword() {
  const userEmailRef = useRef<HTMLInputElement>(null);

  const [modalInfo, setModalInfo] = useState({
    show: false,
    title: '',
    content: '',
    onClick: () => {}
  });

  const navigation = useNavigate();
  
  const [getUserByEmail, { loading, error }] = useLazyQuery(FIND_USER_BY_EMAIL);
  const [generateCodeToResetPassword] = useMutation(GENERATE_CODE_TO_RESET_PASSWORD);

  async function handleEmailByUser(e: FormEvent) {
    e.preventDefault();
    const userEmailValue = userEmailRef.current?.value;

    if (userEmailValue === '') {
      setModalInfo({
        show: true,
        title: 'E-mail obrigatório',
        content: 'Preencha seu e-mail cadastrado para prosseguir com a recuperação de senha',
        onClick: () => setModalInfo({ ...modalInfo, show: false })
      });
      return;
    };

    try {
      const { data: { findUserByEmail } } = await getUserByEmail({
        variables: {
          email: userEmailValue
        },
      });
  
      if (findUserByEmail) {
        const { email } = findUserByEmail;
  
        const { data } = await generateCodeToResetPassword({
          variables: {
            email,
          },
        });
  
        if (data) {
          navigation('/codeToResetPassword', {
            state: {
              email
            }
          });
        } else {
          setModalInfo({
            show: true,
            title: 'Tivemos um problema',
            content: 'Ocorreu um problema na geração do código para a recuperação de senha. Por favor, tente novamente.',
            onClick: () => setModalInfo({ ...modalInfo, show: false })
          });
          return;
        };
        
      } else {
        setModalInfo({
          show: true,
          title: 'E-mail não encontrado',
          content: 'Não encontramos nenhum registro com o e-mail fornecido. Por favor, tente outro e-mail.',
          onClick: () => setModalInfo({ ...modalInfo, show: false })
        });
        return;
      };
    } catch (err) {
      setModalInfo({
        show: true,
        title: 'Tivemos um problema',
        content: 'Ocorreu um problema no envio do código para recuperação de senha. Por favor, tente novamente.',
        onClick: () => setModalInfo({ ...modalInfo, show: false })
      });
      return;
    };
  };

  return {
    userEmailRef,
    modalInfo,
    loading,
    error,
    handleEmailByUser,
  };
}
