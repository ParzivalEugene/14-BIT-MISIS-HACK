"use client";
import { Button, NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex items-center h-screen p-8 font-steppe md:hidden">
        <div className="flex items-center flex-col w-full gap-16">
          <div className="flex flex-col items-center gap-4">
            <Image src={"/logo.png"} width={72} height={72} alt="logo" />
            <h1 className="font-bold text-3xl bg-gradient-to-r from-purple-700 to-purple-300 bg-clip-text text-transparent">
              CONNECT
            </h1>
          </div>
          <div className="flex flex-col gap-4 w-full items-stretch">
            <Link href={"/login"}>
              <Button color="secondary" variant="shadow" className="w-full">
                Вход
              </Button>
            </Link>
            <Link href={"/register"}>
              <Button color="secondary" variant="ghost" className="w-full">
                Регистрация
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <h1 className="color">Пожалуйста используйте мобильный телефон!</h1>
      </div>
    </NextUIProvider>
  );
}
