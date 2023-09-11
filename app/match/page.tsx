"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Card, CardBody, Chip } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";

const Match = () => {
  const [lastDirection, setLastDirection] = useState();
  const session = useSession();
  const [data, setData] = useState([]);

  // @ts-ignore
  const swiped = (direction, user) => {
    if (direction === "right") {
      console.log(user);
      console.log(session.data?.user);
      console.log(data);
      fetch("/api/addFriend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId1: session.data?.user.id,
          userId2: user.userId,
        }),
      })
        .then((res) => {
          const result = res.json();
          result
            .then((res) => {
              console.log(res);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setLastDirection(direction);
  };

  useEffect(() => {
    console.log(session.data?.user);
    setTimeout(() => {
      fetch(`/api/findFriends/${session.data?.user.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          const result = res.json();
          result
            .then((res) => {
              console.log(res);
              setData(res);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  }, []);

  return (
    <div className="pt-6">
      <Header />
      <main className="relative">
        <h2 className="text-2xl font-bold p-6 text-center mt-12">
          Ой! Кажется ты и так нашел много друзей
        </h2>
        <p className="text-center px-8">
          Подожди пока в приложении появятся новые пользователи
        </p>
        {data.length > 0 &&
          data.map((user, index) => (
            <TinderCard
              key={index}
              className="absolute m-auto left-4 right-4 top-6"
              onSwipe={(dir) => swiped(dir, user)}
            >
              <Card
                radius="lg"
                className="border-none gap-4"
                classNames={{
                  footer: "flex flex-col",
                  body: "gap-4 flex flex-col",
                }}
              >
                <img
                  src={
                    "https://qucsmgttjfelqvwatpom.supabase.co/storage/v1/object/public/Photos/" +
                    user.photos[0].imagePath
                  }
                  alt="grid"
                  className="object-cover w-full h-[400px]"
                />
                <CardBody>
                  <h1>
                    {user.firstName}, {user.course}
                  </h1>
                  <div className="flex gap-2">
                    {user.tags.slice(0, 3).map((tag, index) => (
                      <Chip color="secondary" key={index}>
                        {tag}
                      </Chip>
                    ))}
                  </div>
                  <p>{user.bio}</p>
                </CardBody>
              </Card>
            </TinderCard>
          ))}
      </main>
      <Navbar />
    </div>
  );
};

export default Match;
