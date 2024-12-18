// "use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import PostButton from "@/components/post-button";
import prisma from "@/prisma/client";


interface Props {
  params: { postId: string };
}
async function PostDetail({ params }: Props) {
  const post = await prisma.post.findUnique({
    where: {
      postId: params.postId,
    },
  });
  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex text-2xl font-bold">
        <CardTitle className="flex justify-between">
          <h1>{post?.title}</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-2">
        {post?.description && (
          <p className="text-gray-600 dark:text-gray-300">
            {post?.description}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <div>
          <PostButton actionType="update">Edit</PostButton>
          <PostButton actionType="delete">Delete</PostButton>
        </div>
      </CardFooter>
    </Card>
  );
}

export default PostDetail;
