/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `_PostCategories` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `description` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_PostCategories" DROP CONSTRAINT "_PostCategories_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostCategories" DROP CONSTRAINT "_PostCategories_B_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "categoryId",
ALTER COLUMN "description" SET NOT NULL;

-- DropTable
DROP TABLE "_PostCategories";
