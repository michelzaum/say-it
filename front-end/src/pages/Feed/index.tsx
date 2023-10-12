import { useRef, useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { FeedContainer, Title, PostsList } from './styles';
import { Post } from '../../components/Post';
import { NewPost } from '../../components/NewPost';
import { GET_POSTS } from '../../graphql/Posts/queries';
import { LoadingComponent } from '../../components/Loading';

type PostInterface = {
  content: string
  createdAt: string
  id: string
  author: {
    id: string
    country: string
    first_name: string
    last_name: string
    email: string
  }
}

export const Feed = () => {  
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [getPosts, { loading, error }] = useLazyQuery(GET_POSTS);

  useEffect(() => {
    async function listPosts() {
      const result = await getPosts();
      if (result) {
        setPosts(result.data.posts);
      }
    }

    listPosts();
  }, [getPosts]);

  if (loading) return <LoadingComponent />
  if (error) return <h1>Error: {` ${error}`}</h1>

  function createPost() {
    const contentValue = contentRef.current?.value;

    if (contentValue) {
      setPosts(prevState => ([
        ...prevState,
        {
          id: "200",
          author: {
            country: "Alemanha",
            first_name: "Michel",
            last_name: "Oliveira",
            email: "micheloliver42@gmail.com",
            id: "3"
          },
          content: contentValue,
          createdAt: "Oct, 11st"
        }
      ]));

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
            <Post.Header time={post.createdAt} userInfo={post.author} />
            <Post.Content content={post.content} />
            {/* <Post.Interactions likes={post.interactions.likes} comments={post.interactions.comments} /> */}
          </Post.Container>
        ))}
      </PostsList>
    </FeedContainer>
  );
};
