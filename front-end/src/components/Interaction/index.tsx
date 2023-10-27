import React, { ReactNode } from "react";
import {
  InteractionsContaincer,
  Text,
  Container,
} from './styles';

type InteractionProps = {
  icon: ReactNode
  count: number
  onClick: () => void
  interactionName: string
  isClicked: boolean
}

export const Interaction: React.FC<InteractionProps> = ({ icon, count, interactionName, onClick, isClicked }) => {
  return (
    <Container>
      <InteractionsContaincer onClick={onClick} isClicked={isClicked}>
        { icon }
      </InteractionsContaincer>
      <Text>{ `${count} ${interactionName}${count > 1 ? 's' : ''}` }</Text>
    </Container>
  );
};
