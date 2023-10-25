import { useState } from 'react';
import { Comment } from '../../Icons/comment';
import { Like } from '../../Icons/like';
import { Interaction } from '../../Interaction';
import { InteractionList, DeleteContainer } from './styles';
import { InteractionsProps } from './types';
import { Delete } from '../../Icons/delete';

export const Interactions: React.FC<InteractionsProps> = ({ likes, comments, onDeletePost }) => {
  const [addLike, setAddLike] = useState(likes);

  function handleAddLike(currentCount: number) {
    setAddLike(currentCount + 1);
  }

  return (
    <InteractionList>
      <Interaction count={addLike} icon={<Like />} onClick={() => handleAddLike(likes)} />
      <Interaction count={comments} icon={<Comment />} onClick={() => {}} />
      <DeleteContainer>
        <Delete onClick={onDeletePost}>delete post</Delete>
      </DeleteContainer>
    </InteractionList>
  )
}
