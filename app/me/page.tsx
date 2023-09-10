"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Button, NextUIProvider } from "@nextui-org/react";

const Profile = () => {
  return (
    <NextUIProvider>
      <div className="p-6">
        <Header />
        <main>
          {/* CArd */}
          {/* Llevel */}
          <div>
            <Button>
              Ежедневные задания
            </Button>
            <div>

            </div>
            <div>
              <Button>
                Настройки
              </Button>
              <Button>
                Уведомления
              </Button>
            </div>
          </div>
        </main>
        <Navbar />
      </div>
    </NextUIProvider>
  );
};

export default Profile;
