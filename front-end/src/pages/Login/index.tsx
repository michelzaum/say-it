import { FormField } from '../../components/FormField/Input';
import { Approach } from '../../components/Approach';
import { TextWithLink } from '../../components/TextWithLink';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { LoadingComponent as Loading } from '../../components/Loading';
import { FormFieldGroup } from '../../components/FormField/FormFieldGroup';
import { useLogin } from './useLogin';
import { LoginContainer } from './styles';

export const Login = () => {
  const {
    emailRef,
    passwordRef,
    loading,
    error,
    randomEmail,
    modalInfo,
    handleLogin,
  } = useLogin();

  return (
    <>
     {loading && (
      <Loading />
     )}
     {error && (
      <h1>Error: {error}</h1>
     )}
      <LoginContainer onSubmit={handleLogin}>
        <Approach title="Bem vindo(a) de volta!" approach="Entre com suas credenciais para acessar a sua conta." />
        <FormField.InputContainer largeInput>
          <FormField.InputLabel label='E-mail' required />
          <FormField.InputField
            id='E-mail'
            placeholder={randomEmail}
            type='email'
            inputRef={emailRef}
          />
        </FormField.InputContainer>
        <FormFieldGroup>
          <FormField.InputContainer>
            <FormField.InputLabel label='Senha' required />
            <FormField.InputFieldPassword
              placeholder='********'
              inputRef={passwordRef}
            />
          </FormField.InputContainer>
          <TextWithLink
            linkTo="/forgotPassword"
            textLink="Esqueceu a senha?"
          />
        </FormFieldGroup>
        <FormFieldGroup>
          <TextWithLink
            text="Não tem conta?"
            textLink="Faça cadastro"
            linkTo="/Register"
          />
          <Button text="Entrar" />
        </FormFieldGroup>
      </LoginContainer>
      <Modal
        show={modalInfo.show}
        title={modalInfo.title}
        content={modalInfo.content}
        onClick={modalInfo.onClick}
      />
    </>
  );
};