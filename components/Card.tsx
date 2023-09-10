const Card = () => {
  return (
    <div className="relative bg-gradient-to-tl from-violet-500 to-orange-300 rounded-2xl flex flex-col w-full p-6">
      <h1 className="uppercase absolute top-0 left-0">Connect</h1>
      <div className="h-[100px]"></div>
      <h2 className="font-bold text-xl">Petya Petya</h2>

      <div className="flex">
        <div>
          <p className="text-xs">Университет</p>
          <h3 className="font-bold text-sm w-max">НИТУ МИСИС</h3>
        </div>
        <div>
          <p className="text-xs">Уровень образования</p>
          <h3 className="font-bold text-sm w-max">Бакалавриат</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
