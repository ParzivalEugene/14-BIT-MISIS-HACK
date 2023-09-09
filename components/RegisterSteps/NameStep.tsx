import { Input, Tab, Tabs } from "@nextui-org/react";
import React, { useRef } from "react";
import { useFormData } from "./context";

interface NameStepProps {
  formStep: number;
  nextFormStep: () => void;
  data: {
    firstName: string;
    setFirstName: (value: string) => void;
    lastName: string;
    setLastName: (value: string) => void;
    tgUsername: string;
    setTgUsername: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
  };
}

const NameStep: React.FC<NameStepProps> = ({
  formStep,
  nextFormStep,
  data,
}) => {
  const { setFormValues } = useFormData();
  const formRef = useRef();
  return (
    <>
      <h1 className="text-center font-bold text-2xl mb-6">Личные данные</h1>
      <form>
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col gap-4">
            <Input
              variant="bordered"
              type="text"
              label="Имя"
              onChange={(e) => data.setFirstName(e.target.value)}
              value={data.firstName}
            />
            <Input
              variant="bordered"
              type="text"
              label="Фамилия"
              onChange={(e) => data.setLastName(e.target.value)}
              value={data.lastName}
            />
            <Input
              variant="bordered"
              type="text"
              label="Telegram (через @)"
              onChange={(e) => data.setTgUsername(e.target.value)}
              value={data.tgUsername}
            />
            <Input
              variant="bordered"
              type="password"
              label="Пароль"
              onChange={(e) => data.setPassword(e.target.value)}
              value={data.password}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="pl-4">Пол</h2>
            <Tabs aria-label="Options" color="secondary" variant="bordered">
              <Tab
                key="man"
                title={
                  <div className="flex items-center space-x-2">
                    <span>Мужской</span>
                  </div>
                }
              />
              <Tab
                key="woman"
                title={
                  <div className="flex items-center space-x-2">
                    <span>Женский</span>
                  </div>
                }
              />
            </Tabs>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="pl-4">Курс</h2>
            <Tabs aria-label="Options" color="secondary" variant="bordered">
              <Tab
                key="bac"
                title={
                  <div className="flex items-center space-x-2">
                    <span>Бакалавриат</span>
                  </div>
                }
              />
              <Tab
                key="mag"
                title={
                  <div className="flex items-center space-x-2">
                    <span>Магистратура</span>
                  </div>
                }
              />
            </Tabs>
          </div>
        </div>
      </form>
    </>
  );
};

export default NameStep;
