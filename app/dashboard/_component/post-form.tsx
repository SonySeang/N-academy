"use client";
import React from "react";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { usePostContext } from "@/lib/hook";
import PostFormBtn from "./post-form-btn";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";

const postFormSchema = z.object({
  title: z.string().min(3, { message: "Title is Required " }).max(100),
  description: z
    .string()
    .min(3, { message: "Description is Required " })
    .max(100),
  imageUrl: z.union([
    z.literal(""),
    z.string().url({ message: "Invalid URL" }),
  ]),
});

type TPostForm = z.infer<typeof postFormSchema>;

interface PostFormProps {
  actionType: "create" | "update" | "delete" | "cancel";
}

function PostForm({ actionType }: PostFormProps) {
  const { handleAddPost } = usePostContext();
  const {
    trigger,
    register,
    formState: { errors },
    getValues,
  } = useForm<TPostForm>({
    resolver: zodResolver(postFormSchema),
  });

  const router = useRouter();
  return (
    <form
      action={async () => {
        // getValues() is a function that returns the form values
        const postData = getValues();
        const result = await trigger();
        if (!result) return;

        if (actionType === "create") {
          await handleAddPost(postData);
          router.push("/dashboard");
        }
      }}
    >
      <p className="text-2xl mt-2">Create Post ...</p>
      <Separator className="mt-5" />

      <div className="flex flex-col space-y-4 w-[500px] mt-5  m-5">
        <div>
          <label htmlFor="title">Title</label>
          <Input id="title" {...register("title")} name="title" />
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
          <Input
            id="description"
            {...register("description")}
            name="description"
          />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>

        <div className="flex flex-row justify-end gap-4">
          <PostFormBtn actionType={actionType} />
        </div>
      </div>
      {/* <Button type="submit" variant="default"></Button> */}
    </form>
  );
}

export default PostForm;
