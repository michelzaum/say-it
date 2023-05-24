import { FeedContainer, Title, PostsList } from './styles';
import { Post } from '../../components/Post';

export const Feed = () => {
  return (
    <FeedContainer>
      <PostsList>
        <Title>Feed page</Title>
        <Post />
        <Post />
        <Post />
      </PostsList>
    </FeedContainer>
  )
}