import { useRef, useState, useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { FeedContainer, Title, PostsList } from './styles';
import { Post } from '../../components/Post';
import { NewPost } from '../../components/NewPost';
import { LoadingComponent } from '../../components/Loading';
import { GET_POSTS } from '../../graphql/Posts/queries';
import { CREATE_POST, DELETE_POST } from '../../graphql/Posts/mutations';

type PostInterface = {
  content: string
  created_at: string
  id: string
  author: {
    user_id: string
    country: string
    first_name: string
    last_name: string
    email: string
  }
}

export const Feed = () => {  
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [updatePostList, setUpdatePostList] = useState(false);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [getPosts, { loading, error }] = useLazyQuery(GET_POSTS);
  const [createPost] = useMutation(CREATE_POST);
  const [deletePost] = useMutation(DELETE_POST);

  async function handleDeletePost(postId: string) {
    if (!postId) {
      return;
    }

    deletePost({ variables: { postId } }).then(() => {
      setUpdatePostList(true);
    }).catch((error) => {
      console.error('The following error happened: ', error);
    });
    setUpdatePostList(false);
  }

  function handleCreatePost() {
    const contentValue = contentRef.current?.value;
    const userId = "31a14fe3-3c69-11ed-a3de-0242ac110002";

    if (contentValue) {
      createPost({
          variables: {
          content: contentValue,
          authorId: userId,
        },
      }).then(() => {
        setUpdatePostList(true);
      }).catch((error) => {
        console.error('The following error happened: ', error);
      });
      setUpdatePostList(false);
      clearFields();
    }
  }

  function clearFields() {
    if (contentRef.current?.value) {
      contentRef.current.value = '';
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
  }, [getPosts, updatePostList]);

  if (loading) return <LoadingComponent />
  if (error) return <h1>Error: {` ${error}`}</h1>

  return (
    <FeedContainer>
      <NewPost.Container>
        <NewPost.Header title='New post' />
        <NewPost.Content contentRef={contentRef} />
        <NewPost.Actions
          primaryButtonClick={handleCreatePost}
          primaryButtonText='Postar'
          secondaryButtonClick={clearFields}
          secondaryButtonText='Limpar'
        />
      </NewPost.Container>
      <PostsList>
        <Title>Feed page</Title>
        {posts.map((post) => (
          <Post.Container key={post.id}>
            <Post.Header time={post.created_at} userInfo={post.author} />
            <Post.Content content={post.content} />
            <Post.Interactions
              likes={21}
              comments={2}
              onDeletePost={() => handleDeletePost(post.id)}
            />
          </Post.Container>
        ))}
      </PostsList>
    </FeedContainer>
  );
};
