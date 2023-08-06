import { useRef, useState } from 'react';
import { FeedContainer, Title, PostsList } from './styles';
import { Post } from '../../components/Post';
import { NewPost } from '../../components/NewPost';

const mockPosts = [
  { 
    id: 1,
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
    id: 2,
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

export const Feed = () => {  
  const [posts, setPosts] = useState(mockPosts);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  function createPost() {
    const contentValue = contentRef.current?.value;

    if (contentValue) {
      setPosts((prevState) => (
        [
          ...prevState,
          {
            id: posts.length + 1,
            time: 'Agora mesmo',
            content: contentValue,
            userInfo: {
              name: 'Michel da Silva',
              location: 'Dublin, Ireland'
            },
            interactions: {
              likes: 0,
              comments: 0
            }
          }
        ]
      ))
      contentRef.current.value = '';
    }
  }

  return (
    <FeedContainer>
      <NewPost.Container>
        <NewPost.Header title='New post' />
        <NewPost.Content contentRef={contentRef} />
        <NewPost.Actions onClick={createPost} buttonText='Postar' />
      </NewPost.Container>
      <PostsList>
        <Title>Feed page</Title>
        {posts.map((post) => (
          <Post.Container key={post.id}>
            <Post.Header time={post.time} userInfo={post.userInfo} />
            <Post.Content content={post.content} />
            <Post.Interactions likes={post.interactions.likes} comments={post.interactions.comments} />
          </Post.Container>
        ))}
      </PostsList>
    </FeedContainer>
  );
};
