"use client";

import { Button, Input, NextUIProvider } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    signIn("credentials", {
      redirect: false,
      username: username,
      password: password,
      // @ts-ignore
    }).then(({ error }) => {
      if (error) {
        console.log(error);
      } else {
        router.refresh();
        router.push("/main");
      }
    });
  };

  return (
    <NextUIProvider>
      <div className="flex items-center h-screen p-8 font-steppe">
        <div className="flex items-center flex-col w-full gap-24">
          <div className="flex flex-col items-center gap-4">
            <Image src={"/logo.png"} width={72} height={72} alt="logo" />
            <h1 className="font-bold text-3xl bg-gradient-to-r from-purple-700 to-purple-300 bg-clip-text text-transparent">
              CONNECT
            </h1>
          </div>
          <div className="w-full">
            <h2 className="text-center mb-6">Вход в CONNECT</h2>
            <div className="flex flex-col w-full gap-4">
              <Input
                variant="bordered"
                type="text"
                label="Telegram (через @)"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <Input
                variant="bordered"
                type="password"
                label="Пароль"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full items-stretch">
            <Button
              color="secondary"
              variant="shadow"
              className="w-full"
              onClick={handleLogin}
            >
              Войти
            </Button>
            <Link href={"/"}>
              <Button color="secondary" variant="ghost" className="w-full">
                Назад
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
};

export default Login;
