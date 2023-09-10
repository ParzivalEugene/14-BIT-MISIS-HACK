"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const friends = [
  "/cards/card-front (7).png",
  "/cards/card-front (2).png",
  "/cards/card-front (3).png",
  "/cards/card-front (4).png",
  "/cards/card-front (5).png",
  "/cards/card-front (6).png",
];

const Cards = () => {
  return (
    <div className="p-6">
      <Header />
      <main className="py-12 flex flex-col justify-between h-full">
        <h2 className="font-bold text-2xl uppercase text-[#C3DFFF] text-center mb-6">
          Друзья
        </h2>
        <div className="flex flex-col gap-4">
          {friends.map((friend, index) => (
            <img src={friend} alt="friend" key={index} className="w-full" />
          ))}
        </div>
      </main>
      <Navbar />
    </div>
  );
};

export default Cards;
