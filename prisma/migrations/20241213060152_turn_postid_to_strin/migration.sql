/*
  Warnings:

  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_PostCategories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "_PostCategories" DROP CONSTRAINT "_PostCategories_B_fkey";

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
ALTER COLUMN "postId" DROP DEFAULT,
ALTER COLUMN "postId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("postId");
DROP SEQUENCE "Post_postId_seq";

-- AlterTable
ALTER TABLE "_PostCategories" DROP CONSTRAINT "_PostCategories_AB_pkey",
ALTER COLUMN "B" SET DATA TYPE TEXT,
ADD CONSTRAINT "_PostCategories_AB_pkey" PRIMARY KEY ("A", "B");

-- DropTable
DROP TABLE "Comment";

-- AddForeignKey
ALTER TABLE "_PostCategories" ADD CONSTRAINT "_PostCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("postId") ON DELETE CASCADE ON UPDATE CASCADE;
