import { Post } from "@prisma/client";

export type PostEssentials = Omit<
  Post,
  "postId" | "createdAt" | "updatedAt" | "userId"
>;
