import { ActionsContainer, Button, SecondaryButton } from './styles';
import { NewPostActionsProps } from './types';

export const NewPostActions: React.FC<NewPostActionsProps> = ({
  primaryButtonText, primaryButtonClick, secondaryButtonText, secondaryButtonClick
}) => {
  return (
    <ActionsContainer>
      <SecondaryButton onClick={secondaryButtonClick}>{secondaryButtonText}</SecondaryButton>
      <Button onClick={primaryButtonClick}>{primaryButtonText}</Button>
    </ActionsContainer>
  )
};
