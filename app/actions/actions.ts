"use server";
import prisma from "@/prisma/client";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
export async function addPost(formData) {
  try {
    await prisma.post.create({
      data: {
        title: formData.get("title"),
        description: formData.get("description"),
        imageUrl: formData.get("imageUrl"),
      },
    });
  } catch (error) {
    return "Failed to add post";
  }

  revalidatePath("/dashboard", "page");
}
export async function editPost(postId, formData) {
  try {
    await prisma.post.update({
      where: {
        postId: postId,
      },
      data: {
        title: formData.get("title"),
        description: formData.get("description"),
        imageUrl: formData.get("imageUrl"),
      },
    });
  } catch (error) {
    return "Failed to edit post";
  }
}
