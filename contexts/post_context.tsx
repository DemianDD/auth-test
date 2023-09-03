"use client";
import { posts } from "@/data/posts";
import { IPost } from "@/types/IPost";
import React, { createContext, ReactNode } from "react";
import { uuid } from "uuidv4";

interface PostProviderProps {
  children: ReactNode;
}

interface PostContextProps {
  postItems: IPost[];
  setPostItems: React.Dispatch<React.SetStateAction<IPost[]>>;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  postData: any;
  handleAddPost: () => void;
  addComment: (postId: any, commentText: string) => void;
}

export const PostContext = createContext<PostContextProps>({
  postItems: posts,
  setPostItems: () => {},
  handleInputChange: () => {},
  postData: {
    author: "",
    title: "",
    text: "",
  },
  handleAddPost: () => {},
  addComment: () => {},
});

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [postItems, setPostItems] = React.useState<IPost[]>(posts);
  const [postData, setPostData] = React.useState<any>({
    author: "",
    title: "",
    text: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPostData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddPost = () => {
    if (postData.author && postData.title && postData.text) {
      setPostItems((prevPostItems) => [...prevPostItems, postData]);

      setPostData({ author: "", title: "", text: "" });
    }
  };

  const addComment = (postId: any, commentText: string) => {
    const updatedPosts = postItems.map((post) => {
      if (post.id === postId) {
        const updatedPost = {
          ...post,
          comments: [
            ...(post.comments || []),
            { id: uuid(), text: commentText },
          ],
        };
        return updatedPost;
      }
      return post;
    });

    setPostItems(updatedPosts);
  };

  return (
    <PostContext.Provider
      value={{
        postItems,
        setPostItems,
        handleInputChange,
        postData,
        handleAddPost,
        addComment,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
