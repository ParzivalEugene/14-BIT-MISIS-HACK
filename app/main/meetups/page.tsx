"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const Meetups = () => {
  return (
    <div className="p-6">
      <Header />
      <main className="py-12 flex flex-col justify-between h-full">
        <div className="relative flex flex-col items-end w-full bg-[#170E27] rounded-2xl p-4 mb-4">
          <Image
            src={"/flag.png"}
            alt="flag"
            width={200}
            height={200}
            className="absolute bottom-0 left-0"
          />
          <h3 className="text-2xl font-bold text-right w-min">
            Следующая встреча
          </h3>
          <p className="text-xl text-right w-min">15.09.2023 в 19:30</p>
        </div>
        <div className="flex gap-4">
          <div className="rounded-2xl bg-[#170E27] p-4">
            <img src="/misis.png" alt="misis" className="rounded-lg mb-4" />
            <p>Второй этаж библиотеки, Корпус-Б</p>
          </div>
          <div className="rounded-2xl bg-[#170E27] px-6 flex items-center">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold">4/5</h3>
              <p>идут</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-20 gap-4">
          <Button color="secondary">Я иду</Button>
          <Button color="secondary" variant="bordered">
            У меня не получится
          </Button>
        </div>
      </main>
      <Navbar />
    </div>
  );
};

export default Meetups;
