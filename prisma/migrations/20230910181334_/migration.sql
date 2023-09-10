/*
  Warnings:

  - The values [phd] on the enum `CourseEnum` will be removed. If these variants are still used in the database, this will fail.
  - The `tags` column on the `Profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Tags" AS ENUM ('Films', 'VideoGames', 'Development', 'Art', 'Literature', 'Design', 'Journeys', 'Music', 'Animals', 'Clubs', 'Friends', 'Programming');

-- AlterEnum
BEGIN;
CREATE TYPE "CourseEnum_new" AS ENUM ('Bachelor', 'Master');
ALTER TABLE "Profile" ALTER COLUMN "course" DROP DEFAULT;
ALTER TABLE "Profile" ALTER COLUMN "course" TYPE "CourseEnum_new" USING ("course"::text::"CourseEnum_new");
ALTER TYPE "CourseEnum" RENAME TO "CourseEnum_old";
ALTER TYPE "CourseEnum_new" RENAME TO "CourseEnum";
DROP TYPE "CourseEnum_old";
ALTER TABLE "Profile" ALTER COLUMN "course" SET DEFAULT 'Bachelor';
COMMIT;

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_randomMeetingPoolId_fkey";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "tags",
ADD COLUMN     "tags" "Tags"[];

-- AlterTable
ALTER TABLE "RandomMeetingPool" ADD COLUMN     "place" TEXT NOT NULL DEFAULT 'Online',
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_randomMeetingPoolId_fkey" FOREIGN KEY ("randomMeetingPoolId") REFERENCES "RandomMeetingPool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
