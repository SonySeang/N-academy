"use client";

import React from "react";
import { usePostContext, useSearchContext } from "@/lib/hook";
import { useRouter } from "next/navigation";
import { CalendarIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function PostList() {
  const router = useRouter();
  const { posts,  } = usePostContext();
  const { searchQuery } = useSearchContext();

  const handlePostClick = (postId: string) => {
    router.push(`/dashboard/page-detail/${postId}`);
  };
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="space-y-6 p-6">
        {filteredPosts.map((post, index) => (
          <React.Fragment key={post.postId}>
            <Card className="flex flex-col sm:flex-row">
              <CardHeader className="flex-grow sm:w-1/3">
                <div className="flex flex-col justify-between h-full">
                  <CardTitle className="text-xl font-semibold">
                    {post.title}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit mt-2">
                    <CalendarIcon className="w-3 h-3 mr-1" />
                    {new Date(post.createdAt).toLocaleDateString()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow sm:w-1/3 pt-6 sm:pt-0">
                <CardDescription>{post.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex-grow sm:w-1/3 justify-end items-center">
                <Button
                  variant="ghost"
                  className="w-full sm:w-auto justify-between"
                  onClick={() => handlePostClick(post.postId)}
                >
                  Read more
                  <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
            {index < posts.length - 1 && <Separator className="my-6" />}
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
