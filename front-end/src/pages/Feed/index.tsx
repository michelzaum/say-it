import { useRef, useState, useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { FeedContainer, Title, PostsList } from './styles';
import { Post } from '../../components/Post';
import { NewPost } from '../../components/NewPost';
import { LoadingComponent } from '../../components/Loading';
import { GET_POSTS } from '../../graphql/Posts/queries';
import { CREATE_POST } from '../../graphql/Posts/mutations';

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
  const [createPost] = useMutation(CREATE_POST);

  async function handleCreatePost() {
    const contentValue = contentRef.current?.value;
    const userId = "1";
    const createdAt = "Oct, 11st";

    if (contentValue) {
      await createPost({
        variables: {
          content: contentValue,
          authorId: userId,
          createdAt
        },
        onError(error) {
          console.log('The following error happened: ', error)
        },
      });
    }
  }

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

  return (
    <FeedContainer>
      <NewPost.Container>
        <NewPost.Header title='New post' />
        <NewPost.Content contentRef={contentRef} />
        <NewPost.Actions onClick={handleCreatePost} buttonText='Postar' />
      </NewPost.Container>
      <PostsList>
        <Title>Feed page</Title>
        {posts.map((post) => (
          <Post.Container key={post.id}>
            <Post.Header time={post.createdAt} userInfo={post.author} />
            <Post.Content content={post.content} />
            <Post.Interactions likes={21} comments={2} />
          </Post.Container>
        ))}
      </PostsList>
    </FeedContainer>
  );
};
