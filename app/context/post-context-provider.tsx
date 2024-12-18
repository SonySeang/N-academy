"use client";
import { Post } from "@prisma/client";
import React, { createContext, useState, ReactNode } from "react";
import { addPost, deletePost, editPost } from "../actions/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { PostEssentials } from "@/lib/type";

interface TPostContext {
  posts: Post[];
  selectedPost: Post | undefined;
  selectedPostId: Post["postId"] | null;
  handleAddPost: (newPost: PostEssentials) => Promise<void>;
  handleChangeSelectedPostId: (postId: string) => void;
  handleEditPost: (
    postId: string,
    newPostData: PostEssentials
  ) => Promise<void>;
  handleDelete: (postId: string) => Promise<void>;
}

interface PostContextProps {
  data: Post[];
  children: ReactNode;
}

export const PostContext = createContext<TPostContext | null>(null);

function PostContextProvider({ children, data: posts }: PostContextProps) {
  const router = useRouter();

  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = posts.find((post) => post.postId === selectedPostId);

  const handleAddPost = async (newPost: PostEssentials) => {
    const error = await addPost(newPost);
    if (error) {
      toast.warning("Error: " + error);
      return;
    }
    toast.success("Post added successfully");
  };

  const handleChangeSelectedPostId = (postId: Post["userId"]) => {
    setSelectedPostId(postId);
  };

  const handleDelete = async (postId: string) => {
    const error = await deletePost(postId);
    if (error) {
      toast.warning("Error: " + error);
      return;
    }
    toast.success("Post deleted successfully");
    router.push("/dashboard");
  };

  const handleEditPost = async (
    postId: Post["postId"],
    newPostData: PostEssentials
  ) => {
    const error = await editPost(postId, newPostData);
    if (error) {  
      toast.warning("Error: " + error);
      return;
    }
    toast.success("Post updated successfully");
    router.push("/dashboard");
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        selectedPostId,
        selectedPost,
        handleAddPost,
        handleChangeSelectedPostId,
        handleEditPost,
        handleDelete,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export default PostContextProvider;
function useEffect(arg0: () => void, arg1: (string | null)[]) {
  throw new Error("Function not implemented.");
}
