import { Button } from './styles';
import { NewPostActionsProps } from './types';

export const NewPostActions: React.FC<NewPostActionsProps> = ({ buttonText }) => {
  return (
    <Button>{buttonText}</Button>
  )
};
