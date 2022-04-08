import { useLocation } from 'react-router-dom';

import { NewPasswordContainer } from './styles';

export const NewPassword = () => {
  const location = useLocation();

  const params = location.state;

  console.log(params);

  return (
    <NewPasswordContainer>
      <h1>New Password</h1>
    </NewPasswordContainer>
  );
};