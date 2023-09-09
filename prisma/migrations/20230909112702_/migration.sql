/*
  Warnings:

  - A unique constraint covering the columns `[userId,possibleFriendId]` on the table `MatchingPool` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sex` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('Man', 'Woman');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "sex" "Sex" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MatchingPool_userId_possibleFriendId_key" ON "MatchingPool"("userId", "possibleFriendId");
