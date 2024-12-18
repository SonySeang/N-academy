"use client";
import React from "react";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { usePostContext } from "@/lib/hook";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import PostFormBtn from "../../_component/post-form-btn";
import { postFormSchema } from "@/lib/validation";
import prisma from "@/prisma/client";

type TPostForm = z.infer<typeof postFormSchema>;

interface PostFormProps {
  actionType: "create" | "update" | "delete" | "cancel";
  params: { postId: string };
}

function EditPost({ actionType, params }: PostFormProps) {
  const post = prisma.post.findUnique({
    where: { postId: params.postId },
  });
  if (!post) return <div>Post not found</div>;
  const { handleEditPost, selectedPost } = usePostContext();
  const {
    trigger,
    register,
    formState: { errors },
    getValues,
  } = useForm<TPostForm>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      title: selectedPost?.postId,
      description: selectedPost?.postId,
      imageUrl: selectedPost?.postId,
    },
  });
  return (
    <form
      action={async () => {
        const postData = getValues();
        const result = await trigger();
        if (!result) return;

        await handleEditPost(selectedPost!.postId, postData);
      }}
    >
      <p className="text-2xl mt-2">Create Post ...</p>
      <Separator className="mt-5" />

      <div className="flex flex-col space-y-4 w-[500px] mt-5  m-5">
        <div>
          <label htmlFor="title">Title</label>
          <Input id="title" {...register("title")} />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="imageUrl">Upload Image</label>
          <Input id="imageUrl" name="imageUrl" type="text" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Input id="description" {...register("description")} />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>

        <div className="flex flex-row justify-end gap-4">
          <PostFormBtn actionType={actionType}></PostFormBtn>
        </div>
      </div>
      {/* <Button type="submit" variant="default"></Button> */}
    </form>
  );
}

export default EditPost;
