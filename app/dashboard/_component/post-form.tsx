"use client";
import React from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {addPost} from "@/app/actions/actions";
import {revalidatePath} from "next/cache";
import {useRouter} from "next/navigation";
import PostFormBtn from "@/app/dashboard/_component/postFormBtn";
import {toast} from "sonner";
import {useFormState} from "react-hook-form";
import PostButton from "@/components/post-button";
import {usePostContext} from "@/lib/hook";

interface PostFormProps {
    actionType: "create" | "update" | "delete";

}

function PostForm({
                      actionType
                  }: PostFormProps) {
    const router = useRouter();
    const { selectedPost } = usePostContext()
    return (
        <form
            action={async (formData) => {
                const error = await addPost(formData);
                if (error) {
                    toast.warning("Error: " + error);
                    return;
                }
                router.push("/dashboard");
            }}
        >
            <label htmlFor="title">Title</label>
            <Input id="title" name="title" type="text" required defaultValue={actionType === 'update' ? selectedPost?.title: " "}/>
            <label htmlFor="imageUrl">Upload Image</label>
            <Input id="imageUrl" name="imageUrl" type="text" />
            <label htmlFor="description">Description</label>
            <Input id="description" name="description" type="text" required  defaultValue={actionType === 'update' ? selectedPost?.description: " "}/>
            <Button type="submit" variant="default">
                {actionType === "create" ? "Create a post" : "Update a post"}
            </Button>
        </form>
    );
}

export default PostForm;
