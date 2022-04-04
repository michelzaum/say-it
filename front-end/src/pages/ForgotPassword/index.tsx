import { ForgotPasswordContainer } from './styles';

import { Approach } from '../../components/Approach';
import { FormField } from '../../components/FormField/Input';
import { TextWithLink } from '../../components/TextWithLink';
import { Button } from '../../components/Button';
import { FormFieldGroup } from '../../components/FormField/Input/styles';

export const ForgotPassword = () => {
  return (
    <ForgotPasswordContainer>
      <Approach
        title="Esqueceu sua senha?"
        approach="Não se preocupe! Vamos te ajudar. Primeiro, informe seu e-mail cadastrado." />
        <FormField
          label="E-mail"
          type="email"
          placeholder="stevejobs@apple.com"
          largeInput
          required
          onChange={() => {}}
        />
        <FormFieldGroup>
          <TextWithLink
            linkTo="/login"
            text="Voltar para o"
            textLink="Login"
          />
          <Button
            text="Enviar código"
            onClick={() => {}}
          />
        </FormFieldGroup>
    </ForgotPasswordContainer>
  );
};