import { Approach } from '../../components/Approach';
import { FormField } from '../../components/FormField/Input';
import { FormFieldGroup } from '../../components/FormField/FormFieldGroup';
import { Button } from '../../components/Button';
import { TextWithLink } from '../../components/TextWithLink';
import { Modal } from '../../components/Modal';
import { LoadingComponent as Loading } from '../../components/Loading';
import { useNewPassord } from './useNewPassword';
import { NewPasswordContainer } from './styles';

export const NewPassword = () => {
  const {
    newPasswordRef,
    confirmNewPasswordRef,
    loading,
    error,
    modalInfo,
    handleNewPassword,
  } = useNewPassord();

  return (
    <>
      {loading && (
        <Loading />
      )}
      {error && (
        <h1>Error: {error}</h1>
      )}
      <NewPasswordContainer onSubmit={handleNewPassword}>
        <Approach
          title="Cria uma nova senha"
          approach="Crie uma nova senha para acessar o say.it."
        />
        <FormFieldGroup>
          <FormField.InputContainer>
            <FormField.InputLabel label='Nova senha' required />
            <FormField.InputFieldPassword
              placeholder="No mínimo 8 caracteres"
              inputRef={newPasswordRef}
            />
          </FormField.InputContainer>
          <FormField.InputContainer>
            <FormField.InputLabel label='Confirmar nova senha' required />
            <FormField.InputFieldPassword
              placeholder="Repita a nova senha"
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