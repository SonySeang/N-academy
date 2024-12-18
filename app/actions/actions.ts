"use server";
import { auth, signIn, signOut } from "@/lib/auth";
import { PostEssentials } from "@/lib/type";
import prisma from "@/prisma/client";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { postFormSchema } from "@/lib/validation";

// --- user actions ---
export async function logIn(formData: FormData) {
  await signIn("credentials", FormData);
  redirect("/dashboard");
}

export async function SignOut() {
  "use server";
  await signOut({ redirectTo: "/sign-in" });
}

export async function signUp(formData: FormData) {
  const hashedPassword = await bcrypt.hash(
    formData.get("password") as string,
    10
  );

  await prisma.user.create({
    data: {
      email: formData.get("email") as string,
      hashedPassword,
    },
  });

  await signIn("credentials", formData);
}

// --- post actions ---

export async function addPost(post: unknown) {
  const session = await auth();
  if (!session?.user) {
    redirect("/sign-in");
  }

  const validation = postFormSchema.safeParse(post);
  if (!validation.success) {
    return { success: false, message: "Invalid post data" };
  }
  try {
    await prisma.post.create({
      data: {
        ...validation.data,
        user: {
          connect: {
            id: sessionStorage.user.id,
          },
        },
      },
    });
    revalidatePath("/dashboard", "page");
    return { success: true, message: "Post added successfully" };
  } catch (error) {
    return { success: false, message: "Failed to add post" };
  }
}

export async function editPost(
  postId: Post["postId"],
  newPostData: PostEssentials
) {
  try {
    await prisma.post.update({
      where: {
        postId: postId,
      },
      data: newPostData,
    });
  } catch (error) {
    return error;
  }
  revalidatePath("/dashboard", "page");
}
export async function deletePost(postId: Post["postId"]) {
  try {
    await prisma.post.delete({
      where: {
        postId: postId,
      },
    });
  } catch (error) {
    return {
      error: "Failed to delete post",
    };
  }
}
