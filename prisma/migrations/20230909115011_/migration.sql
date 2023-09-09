/*
  Warnings:

  - You are about to drop the column `userId` on the `MatchingPool` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Photo` table. All the data in the column will be lost.
  - You are about to drop the column `banned` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `course` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `mainFriendId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `randomMeetingPoolId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `sex` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `university` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileId,possibleFriendId]` on the table `MatchingPool` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profileId` to the `MatchingPool` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MatchingPool" DROP CONSTRAINT "MatchingPool_possibleFriendId_fkey";

-- DropForeignKey
ALTER TABLE "MatchingPool" DROP CONSTRAINT "MatchingPool_userId_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_mainFriendId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_randomMeetingPoolId_fkey";

-- DropIndex
DROP INDEX "MatchingPool_userId_possibleFriendId_key";

-- AlterTable
ALTER TABLE "MatchingPool" DROP COLUMN "userId",
ADD COLUMN     "profileId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "userId",
ADD COLUMN     "profileId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "banned",
DROP COLUMN "bio",
DROP COLUMN "course",
DROP COLUMN "createdAt",
DROP COLUMN "deleted",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "mainFriendId",
DROP COLUMN "randomMeetingPoolId",
DROP COLUMN "sex",
DROP COLUMN "tags",
DROP COLUMN "university",
DROP COLUMN "updatedAt";

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "bio" VARCHAR(150),
    "sex" "Sex" NOT NULL,
    "tags" TEXT[],
    "university" "universityEnum" NOT NULL,
    "course" "CourseEnum" NOT NULL DEFAULT 'Bachelor',
    "mainFriendId" INTEGER,
    "randomMeetingPoolId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "banned" BOOLEAN NOT NULL DEFAULT false,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "MatchingPool_profileId_possibleFriendId_key" ON "MatchingPool"("profileId", "possibleFriendId");

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_mainFriendId_fkey" FOREIGN KEY ("mainFriendId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_randomMeetingPoolId_fkey" FOREIGN KEY ("randomMeetingPoolId") REFERENCES "RandomMeetingPool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchingPool" ADD CONSTRAINT "MatchingPool_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchingPool" ADD CONSTRAINT "MatchingPool_possibleFriendId_fkey" FOREIGN KEY ("possibleFriendId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
