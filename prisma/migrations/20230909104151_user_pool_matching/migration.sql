/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tgUsername]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `randomMeetingPoolId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tgUsername` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `university` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "universityEnum" AS ENUM ('demo');

-- CreateEnum
CREATE TYPE "CourseEnum" AS ENUM ('Bachelor', 'Master', 'phd');

-- CreateEnum
CREATE TYPE "TagsEnum" AS ENUM ('IT', 'Design', 'Linguistics', 'Physics', 'Hobby', 'Music', 'Animals', 'Programming', 'WebDevelopment', 'MobileDevelopment', 'DataAnalysis', 'ArtificialIntelligence', 'ProgrammingLanguages', 'GraphicDesign', 'Photography', 'Literature', 'Sports', 'Travel', 'Cooking', 'Ecology', 'Psychology', 'Medicine', 'Business');

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
ADD COLUMN     "banned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "bio" VARCHAR(150),
ADD COLUMN     "course" "CourseEnum" NOT NULL DEFAULT 'Bachelor',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "mainFriendId" INTEGER,
ADD COLUMN     "randomMeetingPoolId" INTEGER NOT NULL,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "tgUsername" TEXT NOT NULL,
ADD COLUMN     "university" "universityEnum" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "imagePath" TEXT NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RandomMeetingPool" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RandomMeetingPool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatchingPool" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "possibleFriendId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MatchingPool_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_tgUsername_key" ON "User"("tgUsername");

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_mainFriendId_fkey" FOREIGN KEY ("mainFriendId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_randomMeetingPoolId_fkey" FOREIGN KEY ("randomMeetingPoolId") REFERENCES "RandomMeetingPool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchingPool" ADD CONSTRAINT "MatchingPool_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchingPool" ADD CONSTRAINT "MatchingPool_possibleFriendId_fkey" FOREIGN KEY ("possibleFriendId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
