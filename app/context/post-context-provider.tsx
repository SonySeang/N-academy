'use client'
import {Post} from "@prisma/client";
import React, {createContext, useState, ReactNode} from "react";
import {addPost} from "../actions/actions";


interface TPostContext {
    posts: Post[];
    selectedPost: Post | undefined;
    handleAddPost: (newPost: Omit<Post, "postId">) => Promise<void>;
    handleChangeSelectedPostId: (postId: string) => void;
}

interface PostContextProps {
    data: Post[];
    children: ReactNode;
}

export const PostContext = createContext<TPostContext | null>(null);

function PostContextProvider({children, data: posts}: PostContextProps) {
    const [selectPostId, setSelectPostId] = useState<string | null>(null);

    const selectedPost = posts.find((post) => post.postId === selectPostId);

    const handleAddPost = async (newPost: Omit<Post, "postId">) => {
        await addPost(newPost);
    };

    const handleChangeSelectedPostId = (postId: string) => {
        setSelectPostId(postId);
    };



    return (
        <PostContext.Provider
            value={{
                posts,
                selectedPost,
                handleAddPost,
                handleChangeSelectedPostId,
            }}
        >
            {children}
        </PostContext.Provider>
    );
}

export default PostContextProvider;
