"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const Meetups = () => {
  return (
    <div className="p-6">
      <Header />
      <main>
        <div>
          
          <h3>Следующая встреча</h3>
          <p>15.09.2023 в 19:30</p>
        </div>
        <div>
          <div>
            <p>Второй этаж библиотеки, Корпус-Б</p>
          </div>
          <div>
            <h3>4/5</h3>
            <p>идут</p>
          </div>
        </div>
      </main>
      <Navbar />
    </div>
  );
};

export default Meetups;
