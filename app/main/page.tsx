"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div className="p-6">
      <Header />
      <main className="flex flex-col w-full gap-4 mt-12">
        <Link href={"/main/meetups"}>
          <div className="bg-[#856E1D] flex justify-between items-center px-4 rounded-lg h-[106px] relative">
            <Image
              src={"/flag.png"}
              alt="flag"
              width={168}
              height={171}
              className="absolute bottom-0"
            />
            <div></div>
            <p className="w-min text-right font-bold text-xl">
              Групповые встречи
            </p>
          </div>
        </Link>
        <div className="grid gap-4 grid-cols-2">
          <div className="flex gap-4 flex-col h-full">
            <Link href={"https://t.me/misis_sch_bot"}>
              <div className="bg-[#0E5011] w-full rounded-lg relative min-h-[110px] flex flex-col justify-between">
                <Image
                  src={"/schedule.png"}
                  alt="schedule"
                  width={89}
                  height={89}
                  className="absolute left-0 -top-4"
                />
                <div></div>
                <p className="font-bold text-xl text-center">Расписание</p>
              </div>
            </Link>
            <div className="bg-[#51124E] w-full rounded-lg relative h-full flex justify-between p-3 overflow-clip flex-col">
              <Image
                src={"/target.png"}
                alt="target"
                width={222}
                height={273}
                className="absolute -left-4"
              />
              <div></div>
              <p className="font-bold text-xl text-center">Мэтчи</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Link href={"https://t.me/Misis_anon_Bot"}>
              <div className="bg-[#091B5A] w-full rounded-lg relative h-[140px]">
                <Image
                  src={"/chat.png"}
                  alt="chat"
                  width={100}
                  height={100}
                  className="absolute  bottom-0 right-0"
                />
                <p className="font-bold text-xl text-center pt-2">Анон-чат</p>
              </div>
            </Link>
            <Link href={"https://t.me/itatmisis_bot"}>
              <div className="bg-[#2F0082] w-full rounded-lg overflow-clip relative h-[106px] flex items-center justify-between">
                <Image
                  src={"/itam-bot.png"}
                  alt="itam-bot"
                  width={109}
                  height={109}
                  className="absolute -left-10"
                />
                <div></div>
                <p className="font-bold text-xl w-min text-right pr-4">
                  Itam Bot
                </p>
              </div>
            </Link>
            <Link href={"https://t.me/midjourney3301_bot"}>
              <div className="bg-[#091B5A] w-full rounded-lg relative p-2">
                <Image
                  src={"/midjourney.png"}
                  alt="midjourney"
                  width={76}
                  height={48}
                  className="absolute bottom-0 right-0"
                />
                <p className="font-bold text-xl">Midjourney Pro</p>
              </div>
            </Link>
            <Link href={"https://t.me/personalized_ai_bot"}>
              <div className="bg-[#094C5A] w-full rounded-lg relative">
                <Image
                  src={"/gpt.png"}
                  alt="gpt"
                  width={67}
                  height={65}
                  className="absolute right-0 bottom-1"
                />
                <p className="font-bold text-xl p-4">GPT</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Navbar />
    </div>
  );
};

export default Main;
