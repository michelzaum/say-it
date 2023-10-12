import { useState } from 'react';
import { Comment } from '../../Icons/comment';
import { Like } from '../../Icons/like';
import { Interaction } from '../../Interaction';
import { InteractionList } from './styles';
import { InteractionsProps } from './types';

export const Interactions: React.FC<InteractionsProps> = ({ likes, comments }) => {
  const [addLike, setAddLike] = useState(likes);

  function handleAddLike(currentCount: number) {
    setAddLike(currentCount + 1);
  }

  return (
    <InteractionList>
      <Interaction count={addLike} icon={<Like />} onClick={() => handleAddLike(likes)} />
      <Interaction count={comments} icon={<Comment />} onClick={() => {}} />
    </InteractionList>
  )
}
