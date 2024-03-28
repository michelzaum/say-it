import { Approach } from '../../components/Approach';
import { FormField } from '../../components/FormField/Input';
import { TextWithLink } from '../../components/TextWithLink';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { LoadingComponent as Loading } from '../../components/Loading';
import { FormFieldGroup } from '../../components/FormField/FormFieldGroup';
import { useCodeToResetPassword } from './useCodeToResetPassword';
import { ResetPasswordContainer } from './styles';

export const CodeToResetPassword = () => {
  const {
    codeProvidedRef,
    modalInfo,
    loading,
    error,
    params,
    handleCodeVerification,
  } = useCodeToResetPassword();

  return (
    <>
      {loading && (
        <Loading />
      )}
      {error && (
        <h1>Error: {error}</h1>
      )}
      <ResetPasswordContainer onSubmit={handleCodeVerification}>
        <Approach
          title="Código de verificação"
          approach={`Encaminhamos um código para o e-mail ${params?.email}. Por favor, acesse este e-mail e insira o código no campo abaixo.`}
        />
        <FormFieldGroup>
          <FormField.InputContainer>
            <FormField.InputLabel label='Código' required />
            <FormField.InputField
              id="Código"
              placeholder="Insira o código"
              type="text"
              inputRef={codeProvidedRef}
            />
          </FormField.InputContainer>
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