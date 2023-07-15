import { FeedContainer, Title, PostsList } from './styles';
import { Post } from '../../components/Post';
import { NewPost } from '../../components/NewPost';

export const Feed = () => {
  const mockPosts = [
    { 
      time: '3 horas atrás',
      content: 'Muita legal essa nova rede social aqui, hein!!! :). Aqui é muito bom, posso postar várias coisas e o design da plataforma é muito bonito.',
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
      <NewPost.Container>
        <NewPost.Header title='New post' />
        <NewPost.Content content='Muita legal essa nova rede social aqui, hein!!! :). Aqui é muito bom, posso postar várias coisas e o design da plataforma é muito bonito.' />
        <NewPost.Actions buttonText='Postar' />
      </NewPost.Container>
      <PostsList>
        <Title>Feed page</Title>
        {mockPosts.map((post) => (
          <Post.Container>
            <Post.Header time={post.time} userInfo={post.userInfo} />
            <Post.Content content={post.content} />
            <Post.Interactions likes={post.interactions.likes} comments={post.interactions.comments} />
          </Post.Container>
        ))}
      </PostsList>
    </FeedContainer>
  );
};
