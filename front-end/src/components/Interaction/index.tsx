import React, { ReactNode } from "react";
import {
  InteractionsContaincer,
  Text,
} from './styles';

type InteractionProps = {
  icon: ReactNode
  count: number
  onClick: () => void
}

export const Interaction: React.FC<InteractionProps> = ({ icon, count, onClick }) => {
  return (
    <InteractionsContaincer onClick={onClick}>
      { icon }
      <Text>
        { count }
      </Text>
    </InteractionsContaincer>
  );
};
