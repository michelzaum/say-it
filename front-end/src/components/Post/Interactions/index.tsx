import { Comment } from '../../Icons/comment';
import { Like } from '../../Icons/like';
import { Interaction } from '../../Interaction';
import { InteractionList } from './styles';
import { InteractionsProps } from './types';

export const Interactions: React.FC<InteractionsProps> = ({ likes, comments }) => {
  return (
    <InteractionList>
      <Interaction count={ likes } icon={<Like />}/>
      <Interaction count={ comments } icon={<Comment />} />
    </InteractionList>
  )
}
