import { Approach } from '../../components/Approach';
import { Button } from '../../components/Button';
import { TextWithLink } from '../../components/TextWithLink';
import { FormField } from '../../components/FormField/Input';
import { FormFieldGroup } from '../../components/FormField/FormFieldGroup';
import { List } from '../../components/FormField/Select';
import { Modal } from '../../components/Modal';
import { LoadingComponent as Loading } from '../../components/Loading';
import { MockCountry } from '../../mock/countries';
import { useRegister } from './useRegister';
import { FormContainer } from './styles';

export const Register = () => {
  const {
    firstNameRef,
    lastNameRef,
    emailRef,
    passwordRef,
    confirmPasswordRef,
    countryRef,
    randomPeople,
    modalInfo,
    loading,
    handleUser,
  } = useRegister();

  return (
    <>
      {loading && (
        <Loading />
      )}
      <FormContainer onSubmit={handleUser}>
        <Approach
          title="Crie sua conta no say-it."
          approach="Faça seu cadastro para compartilhar idéias, pensamentos ou piadas."
        />
        <FormFieldGroup>
          <FormField.InputContainer>
            <FormField.InputLabel label='Primeiro nome' required />
            <FormField.InputField
              id='Primeiro nome'
              type="text"
              placeholder={randomPeople.randomFirstName}
              inputRef={firstNameRef}
            />
          </FormField.InputContainer>
          <FormField.InputContainer>
            <FormField.InputLabel label='Sobrenome' required />
            <FormField.InputField
              id="Sobrenome"
              type="text"
              placeholder={randomPeople.randomLastName}
              inputRef={lastNameRef}
            />
          </FormField.InputContainer>
        </FormFieldGroup>
        <FormField.InputContainer largeInput>
          <FormField.InputLabel label='E-mail' required />
          <FormField.InputField
            id="E-mail"
            type="email"
            placeholder={randomPeople.randomEmail}
            inputRef={emailRef}
          />
        </FormField.InputContainer>
        <List.Container ListRef={countryRef} id='listCountries'>
          {MockCountry.map(country => (
            <List.Item
              key={country.id}
              optionId={country.id.toString()}
              optionName={country.name}
            />
          ))}
        </List.Container>
        <FormFieldGroup>
          <FormField.InputContainer>
            <FormField.InputLabel label='Senha' required />
            <FormField.InputFieldPassword
              placeholder="No mínimo 8 caracteres"
              inputRef={passwordRef}
            />
          </FormField.InputContainer>
          <FormField.InputContainer>
            <FormField.InputLabel label='Confirmar senha' required />
            <FormField.InputFieldPassword
              placeholder="Repita a senha"
              inputRef={confirmPasswordRef}
            />
          </FormField.InputContainer>
        </FormFieldGroup>
        <FormFieldGroup>
          <Button text="Cadastrar" />
          <TextWithLink
            text="Possui cadastro?"
            textLink="Faça login"
            linkTo="/"
          />
        </FormFieldGroup>
      </FormContainer>
      <Modal 
        show={modalInfo.show} 
        title={modalInfo.title}
        content={modalInfo.content}
        onClick={modalInfo.onClick}
      />
    </>
  );
};