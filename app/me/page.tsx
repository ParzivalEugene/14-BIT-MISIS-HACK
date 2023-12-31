"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Button, NextUIProvider, Progress } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";

const Profile = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const data = useSession();

  return (
    <NextUIProvider>
      <div className="p-6">
        <Header />
        <main className="pt-12 relative">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <img
              src="/connect-mock.png"
              alt="card"
              className="w-full"
              onClick={() => {
                setIsFlipped(!isFlipped);
              }}
            />
            <img
              src="/connect-mock-back.png"
              alt="card"
              className="w-full"
              onClick={() => {
                setIsFlipped(!isFlipped);
              }}
            />
          </ReactCardFlip>
          <div className="flex flex-col w-full items-center gap-2 mt-6 mb-4">
            <Progress
              value={70}
              classNames={{
                indicator: "bg-gradient-to-r from-purple-900 to-purple-400",
              }}
            />
            <h3 className="font-bold bg-gradient-to-r from-purple-700 to-purple-300 bg-clip-text text-transparent">
              12 MISIS Level
            </h3>
          </div>
          <div className="flex flex-col w-full gap-6">
            <Button className="bg-gradient-to-r from-purple-900 to-purple-400 font-bold">
              Ежедневные задания
            </Button>
            <Link href={"/me/cards"}>
              <div className="grid grid-cols-2 bg-[#170E27] rounded-2xl relative overflow-clip">
                <h3 className="text-2xl font-bold p-6">
                  Коллекция MISIS&nbsp;ID
                </h3>
                <img
                  src="/card-collection-preview.png"
                  alt="card"
                  className="h-full absolute right-0"
                />
              </div>
            </Link>
            <div className="flex gap-6">
              <Link href={"/"} className="w-full">
                <Button color="secondary" className="w-full">
                  Настройки
                </Button>
              </Link>
              <Link href={"/me/notifications"} className="w-full">
                <Button color="secondary" variant="shadow" className="w-full">
                  Уведомления
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Navbar />
      </div>
    </NextUIProvider>
  );
};

export default Profile;
