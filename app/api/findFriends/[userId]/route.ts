import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  const profile = await prisma.profile.findUnique({
    where: {
      userId: Number(userId),
    },
  });
  if (!profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }
  const friends = await prisma.matchingPool.findMany({
    where: {
      profileId: Number(profile.id),
    },
  });
  const friendIds = friends
    .map((friend) => friend.possibleFriendId)
    .concat(profile.id);
  const profiles = await prisma.profile.findMany({
    include: {
      photos: true,
    },
    where: {
      id: {
        not: {
          in: friendIds,
        },
      },
    },
  });
  const matchingProfiles = profiles.filter((profile) => {
    return profile.tags.some((tag) => profile.tags.includes(tag));
  });
  if (matchingProfiles.length === 0) {
    return NextResponse.json(
      { error: "No matching profiles found" },
      { status: 404 }
    );
  }
  return NextResponse.json(matchingProfiles);
}
