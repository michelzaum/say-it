import { FormEvent, useState } from 'react';

import { ResetPasswordContainer } from './styles';

import { Approach } from '../../components/Approach';
import { FormField } from '../../components/FormField/Input';
import { TextWithLink } from '../../components/TextWithLink';
import { Button } from '../../components/Button';
import { FormFieldGroup } from '../../components/FormField/Input/styles';
import { useLocation } from 'react-router-dom';

type ParamsProps = {
  id: string
  email: string
}

export const ResetPassword = () => {
  const [codeVerification, setCodeVerification] = useState('');

  const location = useLocation();
  
  const params = location.state as ParamsProps;

  console.log(params)

  return (
    <ResetPasswordContainer>
      <Approach
        title="Código de verificação"
        approach="Cheque seu e-mail e insira o código de verificação que foi enviado para prosseguir."
      />
      <FormFieldGroup>
        <FormField
          label="Código"
          placeholder="Insira o código"
          type="text"
          required
          value={codeVerification}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            setCodeVerification(e.currentTarget.value)
          }}
        />
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
  );
};