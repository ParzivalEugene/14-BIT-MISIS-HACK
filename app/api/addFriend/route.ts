import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId1, userId2 } = await req.json();
  const profile1 = await prisma.profile.findUnique({
    where: {
      userId: Number(userId1),
    },
  });
  const profile2 = await prisma.profile.findUnique({
    where: {
      userId: Number(userId2),
    },
  });

  if (!profile1 || !profile2) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  const addFriend = await prisma.matchingPool.create({
    data: {
      profileId: profile1.id,
      possibleFriendId: profile2.id,
    },
  });

  const checkIfFriend = await prisma.matchingPool.findFirst({
    where: {
      profileId: profile2.id,
      possibleFriendId: profile1.id,
    },
  });

  if (checkIfFriend) {
    const makeFriend1 = await prisma.profile.update({
      where: {
        id: profile1.id,
      },
      data: {
        friends: {
          connect: {
            id: profile2.id,
          },
        },
      },
    });
    const makeFriend2 = await prisma.profile.update({
      where: {
        id: profile2.id,
      },
      data: {
        friends: {
          connect: {
            id: profile1.id,
          },
        },
      },
    });
  }

  return NextResponse.json({status: 200});
}
