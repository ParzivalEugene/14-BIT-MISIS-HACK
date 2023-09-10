"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Card, CardBody, Chip } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";

// const data = [
//   {
//     username: "@olya_kotik",
//     firstName: "Ольга",
//     lastName: "Мичкова",
//     courser: "Бакалавриат",
//     tags: ["Фильмы", "IT", "Клубы"],
//     bio: "Привет! Я ищу интересных людей, которые работают c вебом. Если вы увлечены этими технологиями, давайте познакомимся!",
//     image: "/students/1.jpg",
//   },
//   {
//     username: "@nagibator228",
//     firstName: "Александр",
//     lastName: "Петров",
//     courser: "Бакалавриат",
//     tags: ["Хакатоны", "Музыка", "Кошки"],
//     bio: "Ищу людей, которые любят музыку, хакатоны и кошек. Давайте познакомимся!",
//     image: "/students/2.jpg",
//   },
//   {
//     username: "@ivan_ivanov",
//     firstName: "Иван",
//     lastName: "Иванов",
//     courser: "Бакалавриат",
//     tags: ["Футбол", "Путешествия", "Книги"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/3.jpg",
//   },
//   {
//     username: "@maria_smirnova",
//     firstName: "Мария",
//     lastName: "Смирнова",
//     courser: "Магистратура",
//     tags: ["Искусство", "Мода", "Кофе"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/4.jpg",
//   },
//   {
//     username: "@sergey_kuznetsov",
//     firstName: "Сергей",
//     lastName: "Кузнецов",
//     courser: "Бакалавриат",
//     tags: ["Музыка", "Кино", "Еда"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/5.jpg",
//   },
//   {
//     username: "@anna_petrova",
//     firstName: "Анна",
//     lastName: "Петрова",
//     courser: "Магистратура",
//     tags: ["Танцы", "Живопись", "Путешествия"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/6.jpg",
//   },
//   {
//     username: "@dmitry_sokolov",
//     firstName: "Дмитрий",
//     lastName: "Соколов",
//     courser: "Бакалавриат",
//     tags: ["Футбол", "Компьютеры", "Кофе"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/7.jpg",
//   },
//   {
//     username: "@ekaterina_kovaleva",
//     firstName: "Екатерина",
//     lastName: "Ковалева",
//     courser: "Магистратура",
//     tags: ["Мода", "Кино", "Еда"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/8.jpg",
//   },
//   {
//     username: "@alexey_nikitin",
//     firstName: "Алексей",
//     lastName: "Никитин",
//     courser: "Бакалавриат",
//     tags: ["Музыка", "Компьютеры", "Кофе"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/9.jpg",
//   },
//   {
//     username: "@olga_ivanova",
//     firstName: "Ольга",
//     lastName: "Иванова",
//     courser: "Магистратура",
//     tags: ["Танцы", "Живопись", "Путешествия"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/10.jpg",
//   },
//   {
//     username: "@maxim_kozlov",
//     firstName: "Максим",
//     lastName: "Козлов",
//     courser: "Бакалавриат",
//     tags: ["Футбол", "Книги", "Кофе"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/11.jpg",
//   },
//   {
//     username: "@anna_sidorova",
//     firstName: "Анна",
//     lastName: "Сидорова",
//     courser: "Магистратура",
//     tags: ["Искусство", "Мода", "Кофе"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/12.jpg",
//   },
//   {
//     username: "@nikita_romanov",
//     firstName: "Никита",
//     lastName: "Романов",
//     courser: "Бакалавриат",
//     tags: ["Музыка", "Кино", "Еда"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/13.jpg",
//   },
//   {
//     username: "@marina_kuzmina",
//     firstName: "Марина",
//     lastName: "Кузьмина",
//     courser: "Магистратура",
//     tags: ["Танцы", "Живопись", "Путешествия"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/14.jpg",
//   },
//   {
//     username: "@alexandra_ivanova",
//     firstName: "Александра",
//     lastName: "Иванова",
//     courser: "Бакалавриат",
//     tags: ["Футбол", "Компьютеры", "Кофе"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/15.jpg",
//   },
//   {
//     username: "@dmitry_kuzmin",
//     firstName: "Дмитрий",
//     lastName: "Кузьмин",
//     courser: "Магистратура",
//     tags: ["Искусство", "Мода", "Кофе"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/16.jpg",
//   },
//   {
//     username: "@maria_romanova",
//     firstName: "Мария",
//     lastName: "Романова",
//     courser: "Бакалавриат",
//     tags: ["Музыка", "Кино", "Еда"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/17.jpg",
//   },
//   {
//     username: "@alexey_sokolov",
//     firstName: "Алексей",
//     lastName: "Соколов",
//     courser: "Магистратура",
//     tags: ["Танцы", "Живопись", "Путешествия"],
//     bio: "Фронтэндер найдись! Необходимо написать приложение на React. Рад любой помощи!",
//     image: "/students/18.jpg",
//   },
// ];

const Match = () => {
  const [lastDirection, setLastDirection] = useState();
  const session = useSession();
  const [data, setData] = useState([]);

  // @ts-ignore
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  useEffect(() => {
    console.log(session.data?.user)
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
        <h2 className="text-2xl font-bold p-6 text-center mt-12">Ой! Кажется ты и так нашел много друзей</h2>
        <p className="text-center px-8">Подожди пока в приложении появятся новые пользователи</p>
        {data.length > 0 &&
          data.map((user, index) => (
            <TinderCard
              key={index}
              className="absolute m-auto left-4 right-4 top-6"
              onSwipe={(dir) => swiped(dir, user.firstName)}
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
