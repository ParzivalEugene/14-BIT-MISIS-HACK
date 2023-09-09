"use client";

import InterestsStep from "@/components/RegisterSteps/InterestsStep";
import NameStep from "@/components/RegisterSteps/NameStep";
import PhotosStep from "@/components/RegisterSteps/PhotosStep";
import { Button, Progress, Spinner } from "@nextui-org/react";
import { useState } from "react";

const Register = () => {
  const [formStep, setFormStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tgUsername, setTgUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [bio, setBio] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [created, setCreated] = useState(false);

  const nextFormStep = () => {
    if (formStep === 3) {
      console.log({
        firstName,
        lastName,
        tgUsername,
        password,
        tags,
        bio,
        photos,
      });
      try {
        fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            tgUsername,
            password,
            tags,
            bio,
            photos,
          }),
        });
      } catch (e) {
        console.log(e);
      }
    } else {
    }
    setFormStep((currentStep) => currentStep + 1);
  };
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  const maxSteps = 3;

  return (
    <div className="h-screen w-screen">
      <div className="px-6 py-6 h-full relative">
        {formStep === 4 && !created && (
          <div className="flex items-center content-center h-full w-full">
            <div className="flex flex-col items-center content-center w-full gap-4">
              <Spinner />
              <p>СПАСИБО ЗА РЕГИСТРАЦИЮ!</p>
            </div>
          </div>
        )}
        {formStep === 4 && created && (
          <div className="flex items-center content-center h-full w-full">
            <div className="flex flex-col items-center content-center w-full gap-4">
              <p>Вы успешно зарегистрировались</p>
            </div>
          </div>
        )}
        {formStep === 1 && (
          <NameStep
            formStep={formStep}
            nextFormStep={nextFormStep}
            data={{
              firstName,
              setFirstName,
              lastName,
              setLastName,
              tgUsername,
              setTgUsername,
              password,
              setPassword,
            }}
          />
        )}
        {formStep === 2 && (
          <InterestsStep
            formStep={formStep}
            nextFormStep={nextFormStep}
            data={{ tags, setTags, bio, setBio }}
          />
        )}
        {formStep === 3 && (
          <PhotosStep
            formStep={formStep}
            nextFormStep={nextFormStep}
            data={{ photos, setPhotos }}
          />
        )}
        {formStep !== 4 && (
          <div className="fixed w-full pr-12 gap-4 flex flex-col bg-[#0B011B] bottom-0 pt-6 z-50">
            <div className="flex flex-col gap-2">
              <Button color="secondary" onClick={nextFormStep}>
                Следующий шаг
              </Button>
              {formStep > 1 && (
                <Button color="secondary" onClick={prevFormStep}>
                  Предыдущий шаг
                </Button>
              )}
            </div>
            <div className="flex flex-col items-center gap-2 pb-6">
              <Progress
                aria-label="Progress"
                value={(formStep * 100) / maxSteps}
                classNames={{
                  indicator: "bg-gradient-to-r from-purple-700 to-purple-300",
                }}
              />
              {formStep}/{maxSteps}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
