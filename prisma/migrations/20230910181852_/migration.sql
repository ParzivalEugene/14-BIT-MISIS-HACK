/*
  Warnings:

  - The `tags` column on the `Profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `course` on the `Profile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "course",
ADD COLUMN     "course" TEXT NOT NULL,
DROP COLUMN "tags",
ADD COLUMN     "tags" TEXT[];

-- DropEnum
DROP TYPE "CourseEnum";

-- DropEnum
DROP TYPE "Tags";
