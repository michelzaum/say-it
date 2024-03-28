
import { Approach } from '../../components/Approach';
import { FormField } from '../../components/FormField/Input'
import { TextWithLink } from '../../components/TextWithLink';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { FormFieldGroup } from '../../components/FormField/FormFieldGroup';
import { LoadingComponent as Loading } from '../../components/Loading';
import { useForgotPassword } from './useForgotPassword';
import { ForgotPasswordContainer } from './styles';

export const ForgotPassword = () => {
  const {
    userEmailRef,
    modalInfo,
    loading,
    error,
    handleEmailByUser,
  } = useForgotPassword();

  return (
    <>
     {loading && (
      <Loading />
     )}
     {error && (
      <h1>Error: {error}</h1>
     )}
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