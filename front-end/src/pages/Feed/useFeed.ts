import { useLazyQuery, useMutation } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import { PostInterface } from "./types";
import { GET_POSTS } from "../../graphql/Posts/queries";
import { CREATE_POST, DELETE_POST } from "../../graphql/Posts/mutations";

export function useFeed() {
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

  return {
    contentRef,
    posts,
    loading,
    error,
    clearFields,
    handleCreatePost,
    handleDeletePost,
  }
}
