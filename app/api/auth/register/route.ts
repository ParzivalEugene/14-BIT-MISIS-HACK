import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    username,
    firstName,
    lastName,
    bio,
    course,
    photos,
    tags,
    sex,
    password,
  } = await req.json();
  const exists = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (exists) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  } else {
    const user = await prisma.user.create({
      data: {
        username,
        password: await hash(password, 10),
        profile: {
          create: {
            firstName,
            lastName,
            bio,
            course,
            sex,
            tags,
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
