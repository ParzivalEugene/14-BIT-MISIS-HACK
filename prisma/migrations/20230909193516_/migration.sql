/*
  Warnings:

  - The values [Hobby] on the enum `TagsEnum` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `university` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TagsEnum_new" AS ENUM ('IT', 'Design', 'Linguistics', 'Physics', 'Music', 'Animals', 'Programming', 'WebDevelopment', 'MobileDevelopment', 'DataAnalysis', 'ArtificialIntelligence', 'ProgrammingLanguages', 'GraphicDesign', 'Photography', 'Literature', 'Sports', 'Travel', 'Cooking', 'Ecology', 'Psychology', 'Medicine', 'Business');
ALTER TYPE "TagsEnum" RENAME TO "TagsEnum_old";
ALTER TYPE "TagsEnum_new" RENAME TO "TagsEnum";
DROP TYPE "TagsEnum_old";
COMMIT;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "university";

-- DropEnum
DROP TYPE "universityEnum";
