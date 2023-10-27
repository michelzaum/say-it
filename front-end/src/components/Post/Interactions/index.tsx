import { useState } from 'react';
import { Comment } from '../../Icons/comment';
import { Like } from '../../Icons/like';
import { Interaction } from '../../Interaction';
import { InteractionList, DeleteContainer } from './styles';
import { InteractionsProps } from './types';
import { Delete } from '../../Icons/delete';

export const Interactions: React.FC<InteractionsProps> = ({ likes, comments, onDeletePost }) => {
  const [addLike, setAddLike] = useState(likes);
  const [interactionProvided, setInteractionProvided] = useState(false);

  function toggleInteraction(currentCount: number) {
    if (interactionProvided) {
      setAddLike(currentCount);
      setInteractionProvided(false);
    } else {
      setAddLike(currentCount + 1);
      setInteractionProvided(true);
    }
  }

  return (
    <InteractionList>
      <Interaction count={addLike} interactionName='like' icon={<Like />} onClick={() => toggleInteraction(likes)} isClicked={interactionProvided} />
      <Interaction count={comments} interactionName='comment' icon={<Comment />} onClick={() => {}} isClicked={false} />
      <DeleteContainer>
        <Delete onClick={onDeletePost}>delete post</Delete>
      </DeleteContainer>
    </InteractionList>
  )
}
