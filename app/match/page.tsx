"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Card } from "@nextui-org/react";
import { useState } from "react";
import TinderCard from "react-tinder-card";

const data = [
  {
    username: "@olya_kotik",
    firstName: "Ольга",
    lastName: "Мичкова",
    courser: "Бакалавриат",
    tags: ["Фильмы", "IT", "Клубы"],
  },
  {
    username: "@nagibator228",
    firstName: "Александр",
    lastName: "Петров",
    courser: "Бакалавриат",
    tags: ["Хакатоны", "Музыка", "Кошки"],
  },
  {
    username: "@ivan_ivanov",
    firstName: "Иван",
    lastName: "Иванов",
    courser: "Бакалавриат",
    tags: ["Футбол", "Путешествия", "Книги"],
  },
  {
    username: "@maria_smirnova",
    firstName: "Мария",
    lastName: "Смирнова",
    courser: "Магистратура",
    tags: ["Искусство", "Мода", "Кофе"],
  },
  {
    username: "@sergey_kuznetsov",
    firstName: "Сергей",
    lastName: "Кузнецов",
    courser: "Бакалавриат",
    tags: ["Музыка", "Кино", "Еда"],
  },
  {
    username: "@anna_petrova",
    firstName: "Анна",
    lastName: "Петрова",
    courser: "Магистратура",
    tags: ["Танцы", "Живопись", "Путешествия"],
  },
  {
    username: "@dmitry_sokolov",
    firstName: "Дмитрий",
    lastName: "Соколов",
    courser: "Бакалавриат",
    tags: ["Футбол", "Компьютеры", "Кофе"],
  },
  {
    username: "@ekaterina_kovaleva",
    firstName: "Екатерина",
    lastName: "Ковалева",
    courser: "Магистратура",
    tags: ["Мода", "Кино", "Еда"],
  },
  {
    username: "@alexey_nikitin",
    firstName: "Алексей",
    lastName: "Никитин",
    courser: "Бакалавриат",
    tags: ["Музыка", "Компьютеры", "Кофе"],
  },
  {
    username: "@olga_ivanova",
    firstName: "Ольга",
    lastName: "Иванова",
    courser: "Магистратура",
    tags: ["Танцы", "Живопись", "Путешествия"],
  },
  {
    username: "@maxim_kozlov",
    firstName: "Максим",
    lastName: "Козлов",
    courser: "Бакалавриат",
    tags: ["Футбол", "Книги", "Кофе"],
  },
  {
    username: "@anna_sidorova",
    firstName: "Анна",
    lastName: "Сидорова",
    courser: "Магистратура",
    tags: ["Искусство", "Мода", "Кофе"],
  },
  {
    username: "@nikita_romanov",
    firstName: "Никита",
    lastName: "Романов",
    courser: "Бакалавриат",
    tags: ["Музыка", "Кино", "Еда"],
  },
  {
    username: "@marina_kuzmina",
    firstName: "Марина",
    lastName: "Кузьмина",
    courser: "Магистратура",
    tags: ["Танцы", "Живопись", "Путешествия"],
  },
  {
    username: "@alexandra_ivanova",
    firstName: "Александра",
    lastName: "Иванова",
    courser: "Бакалавриат",
    tags: ["Футбол", "Компьютеры", "Кофе"],
  },
  {
    username: "@dmitry_kuzmin",
    firstName: "Дмитрий",
    lastName: "Кузьмин",
    courser: "Магистратура",
    tags: ["Искусство", "Мода", "Кофе"],
  },
  {
    username: "@maria_romanova",
    firstName: "Мария",
    lastName: "Романова",
    courser: "Бакалавриат",
    tags: ["Музыка", "Кино", "Еда"],
  },
  {
    username: "@alexey_sokolov",
    firstName: "Алексей",
    lastName: "Соколов",
    courser: "Магистратура",
    tags: ["Танцы", "Живопись", "Путешествия"],
  },
];

const Match = () => {
  const [lastDirection, setLastDirection] = useState();

  // @ts-ignore
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  return (
    <div className="">
      <Header />
      <main className="relative">
        {data.map((user, index) => (
          <TinderCard
            key={index}
            className="absolute m-auto left-4 right-4 top-6"
            onSwipe={(dir) => swiped(dir, user.firstName)}
          >
            <Card isFooterBlurred radius="lg" className="border-none">
              <img
                src={"/girl1.png"}
                alt="grid"
                className="object-cover w-full h-[600px]"
              />
            </Card>
          </TinderCard>
        ))}
      </main>
      <Navbar />
    </div>
  );
};

export default Match;
