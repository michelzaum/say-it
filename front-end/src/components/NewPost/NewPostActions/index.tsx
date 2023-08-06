import { Button } from './styles';
import { NewPostActionsProps } from './types';

export const NewPostActions: React.FC<NewPostActionsProps> = ({ buttonText, onClick }) => {
  return (
    <Button onClick={onClick}>{buttonText}</Button>
  )
};
