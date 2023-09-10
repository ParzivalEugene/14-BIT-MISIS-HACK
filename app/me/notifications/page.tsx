"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const viewed = [
  "Вам назначена встреча!",
  "Вам назначена встреча!",
  "Мэтч! Скорее познакомьтесь",
  "Вам назначена встреча!",
  "Мэтч! Скорее познакомьтесь",
];

const notifications = [
  { text: "Вам назначена встреча!", link: "/main/meetups" },
  { text: "Мэтч! Скорее познакомьтесь", link: "/match" },
];

const Notifications = () => {
  return (
    <div className="p-6">
      <Header />
      <main className="py-6 flex flex-col justify-between h-full">
        <h1 className="text-center text-2xl font-bold mb-6">Уведомления</h1>
        <h2>Новые</h2>
        <div className="w-full flex flex-col gap-2">
          {notifications.map((notification, index) => (
            <Link href={notification.link} key={index} className="w-full">
              <Button color="secondary" className="w-full">
                {notification.text}
              </Button>
            </Link>
          ))}
        </div>
        <h2 className="mt-12">Просмотренные</h2>
        <div className="w-full flex flex-col gap-2">
          {viewed.map((notification, index) => (
            <Button disabled key={index} variant="bordered" color="secondary">
              {notification}
            </Button>
          ))}
        </div>
      </main>
      <Navbar />
    </div>
  );
};

export default Notifications;
