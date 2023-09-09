"use client"

import { useSession } from "next-auth/react";

export default async function AuthStatus() {
  const { data: session, status } = await useSession();
  return (
    <div className="absolute top-5 w-full flex justify-center items-center">
      {session && (
        <p className="text-stone-200 text-sm">
          Signed in as {JSON.stringify(session.user?.email)}
        </p>
      )}
    </div>
  );
}
