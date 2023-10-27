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
}

export const Interaction: React.FC<InteractionProps> = ({ icon, count, interactionName, onClick }) => {
  return (
    <Container>
      <InteractionsContaincer onClick={onClick}>
        { icon }
      </InteractionsContaincer>
      <Text>{ `${count} ${interactionName}${count > 1 ? 's' : ''}` }</Text>
    </Container>
  );
};
