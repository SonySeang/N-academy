'use client'
import React from 'react';
import {usePostContext} from "@/lib/hook";
import {Card, CardHeader, CardTitle, CardContent,} from '@/components/ui/card';
import PostButton from "@/components/post-button";
function PostDetail() {
    const {selectedPost} = usePostContext()
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader className=" flex text-2xl font-bold">
                <CardTitle className="flex justify-between">
                    <h1>Title</h1>
                    <div>
                        <PostButton actionType="update">
                            Edit
                        </PostButton>
                        <PostButton actionType="delete">
                            Delete
                        </PostButton>
                    </div>
                    {selectedPost?.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="mt-2">
                {selectedPost?.description && (
                    <p className="text-gray-600 dark:text-gray-300">
                        Description
                        {selectedPost?.description}
                    </p>
                )}
            </CardContent>
        </Card>
    );
}

export default PostDetail;