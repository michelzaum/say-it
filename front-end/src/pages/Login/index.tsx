import { LoginContainer } from './styles';

import { Approach } from '../../components/Approach';
import { FormField } from '../../components/FormField/Input';
import { TextWithLink } from '../../components/TextWithLink';

import { FormFieldGroup } from '../../components/FormField/Input/styles';

import { returnRandomPeople } from '../../utils/returnRandomPeople';
import { Button } from '../../components/Button';

export const Login = () => {
  const { randomEmail } = returnRandomPeople();

  return (
    <LoginContainer>
      <Approach title="Bem vindo(a) de volta!" approach="Entre com suas credenciais para acessar a sua conta." />
      <FormField
        label="E-mail"
        type="email"
        placeholder={randomEmail}
        onChange={() => {}}
        largeInput
      />
      <FormFieldGroup>
        <FormField
          label="Senha"
          type="password"
          placeholder="********"
          onChange={() => {}}
        />
        <TextWithLink
          linkTo="/"
          textLink="Esqueceu a senha?"
        />
      </FormFieldGroup>
      <FormFieldGroup>
        <TextWithLink
          text="Não possui cadastro?"
          textLink="Fazer cadastro"
          linkTo="/"
        />
        <Button text="Entrar" />
      </FormFieldGroup>
    </LoginContainer>
  );
};