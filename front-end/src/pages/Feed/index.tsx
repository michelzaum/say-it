import { FeedContainer, Title, PostsList } from './styles';
import { Post } from '../../components/Post';

export const Feed = () => {
  const mockPosts = [
    { 
      time: '3 horas atrás',
      content: 'Muita legal essa nova rede social aqui, hein!!! :)',
      userInfo: {
        name: 'Michel de Oliveira',
        location: 'São Paulo, Brazil'
      },
      interactions: {
        likes: 16,
        comments: 6
      }
    },
    { 
      time: '1 dia atrás',
      content: 'Gostei bastante dessa rede social pra devs! :D',
      userInfo: {
        name: 'John Doe',
        location: 'São Paulo, Brazil'
      },
      interactions: {
        likes: 12,
        comments: 4
      }
    },
  ]
  return (
    <FeedContainer>
      <PostsList>
        <Title>Feed page</Title>
        {mockPosts.map((post) => (
          <Post
            {...post}
          />
        ))}
      </PostsList>
    </FeedContainer>
  );
};
