import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    tgUsername,
    firstName,
    lastName,
    bio,
    course,
    photos,
    sex,
    password,
  } = await req.json();
  const exists = await prisma.user.findUnique({
    where: {
      tgUsername,
    },
  });
  if (exists) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  } else {
    const user = await prisma.user.create({
      data: {
        tgUsername,
        password: await hash(password, 10),
        profile: {
          create: {
            firstName,
            lastName,
            bio,
            course,
            sex,
            randomMeetingPool: {
              create: {},
            },
            photos: {
              create: photos.map((photo: string) => ({
                imagePath: photo,
              })),
            },
          },
        },
      },
    });
    return NextResponse.json(user);
  }
}
