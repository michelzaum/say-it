import React, { ReactNode } from "react";
import {
  InteractionsContaincer,
  Text,
} from './styles';

type InteractionProps = {
  icon: ReactNode
  count: number
}

export const Interaction: React.FC<InteractionProps> = ({ icon, count }) => {
  return (
    <InteractionsContaincer>
      { icon }
      <Text>
        { count }
      </Text>
    </InteractionsContaincer>
  );
};
