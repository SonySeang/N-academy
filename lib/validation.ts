import { z } from "zod";

export const postFormSchema = z.object({
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
