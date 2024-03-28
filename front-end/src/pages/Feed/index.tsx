import { FeedContainer, Title, PostsList } from './styles';
import { Post } from '../../components/Post';
import { NewPost } from '../../components/NewPost';
import { LoadingComponent as Loading } from '../../components/Loading';
import { useFeed } from './useFeed';

export const Feed = () => {
  const {
      posts,
      loading,
      error,
      contentRef,
      clearFields,
      handleCreatePost,
      handleDeletePost,
  } = useFeed();

   return (
    <>
      {loading && (
        <Loading />
      )}
      {error && (
        <h1>Error: {error}</h1>
      )}
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
    </>
  );
};
