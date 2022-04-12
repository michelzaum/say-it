import { useLocation } from 'react-router-dom';

import { NewPasswordContainer } from './styles';
import { Approach } from '../../components/Approach';
import { FormField } from '../../components/FormField/Input';
import { FormFieldGroup } from '../../components/FormField/Input/styles';
import { Button } from '../../components/Button';
import { TextWithLink } from '../../components/TextWithLink';

export const NewPassword = () => {
  const location = useLocation();

  const params = location.state;

  console.log(params);

  return (
    <NewPasswordContainer>
      <Approach
        title="Cria uma nova senha"
        approach="Crie uma nova senha para acessar o say.it."
      />
      <FormFieldGroup>
        <FormField
          label="Nova senha"
          placeholder="No mínimo 8 caracteres"
          type="password"
          required
          onChange={() => {}}
        />
        <FormField
          label="Confirmar nova senha"
          placeholder="Repita a nova senha"
          type="password"
          required
          onChange={() => {}}
        />
      </FormFieldGroup>
      <FormFieldGroup>
        <TextWithLink
          text="Não recebeu?"
          textLink="Reenviar"
          linkTo="/forgotPassword"
        />
        <Button text="Confirmar" />
      </FormFieldGroup>
    </NewPasswordContainer>
  );
};