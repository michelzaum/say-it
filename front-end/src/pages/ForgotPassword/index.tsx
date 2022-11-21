import { FormEvent, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { ForgotPasswordContainer } from './styles';

import { Approach } from '../../components/Approach';
import { FormField } from '../../components/FormField/Input'
import { TextWithLink } from '../../components/TextWithLink';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { FormFieldGroup } from '../../components/FormField/FormFieldGroup';

import { useLazyQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { FIND_USER_BY_EMAIL } from '../../graphql/Users/queries';
import { GENERATE_CODE_TO_RESET_PASSWORD } from '../../graphql/Users/mutations';
import { LoadingComponent as Loading } from '../../components/Loading';

export const ForgotPassword = () => {
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

  if (loading) return <Loading />
  if (error) return <h1>Error: {` ${error}`}</h1>

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

  return (
    <>
      <ForgotPasswordContainer onSubmit={handleEmailByUser}>
        <Approach
          title="Esqueceu sua senha?"
          approach="Não se preocupe! Vamos te ajudar. Primeiro, informe seu e-mail cadastrado."
        />
        <FormField.InputContainer largeInput>
          <FormField.InputLabel label='E-mail' required />
          <FormField.InputField
            id="E-mail"
            type="email"
            placeholder="stevejobs@apple.com"
            inputRef={userEmailRef}
          />
        </FormField.InputContainer>
        <FormFieldGroup>
          <TextWithLink
            linkTo="/"
            text="Voltar para o"
            textLink="Login"
          />
          <Button
            type="submit"
            text="Enviar código"
          />
        </FormFieldGroup>
      </ForgotPasswordContainer>
      <Modal
        show={modalInfo.show}
        title={modalInfo.title}
        content={modalInfo.content}
        onClick={modalInfo.onClick}
      />
    </>
  );
};