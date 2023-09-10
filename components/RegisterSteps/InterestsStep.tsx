import { CheckboxGroup, Textarea } from "@nextui-org/react";
import React from "react";
import { CustomCheckbox } from "../CustomCheckbox";

interface InterestsStepProps {
  formStep: number;
  nextFormStep: () => void;
  data: {
    tags: string[];
    setTags: (value: string[]) => void;
    bio: string;
    setBio: (value: string) => void;
  };
}

export const tags = [
  "Фильмы",
  "Видеоигры",
  "Разработка",
  "Искусство",
  "Литература",
  "Дизайн",
  "Путешествия",
  "Музыка",
  "Животные",
  "Клубы",
  "Друзья",
  "Программирование",
];

const InterestsStep: React.FC<InterestsStepProps> = ({
  formStep,
  nextFormStep,
  data,
}) => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mb-6">Интересы</h1>
      <form>
        <CheckboxGroup
          className="gap-1"
          orientation="horizontal"
          value={data.tags}
          onValueChange={data.setTags}
        >
          {tags.map((tag) => (
            <CustomCheckbox key={tag} value={tag}>
              {tag}
            </CustomCheckbox>
          ))}
        </CheckboxGroup>
        <Textarea
          className="mt-6"
          labelPlacement="outside"
          placeholder="Расскажи немного о себе"
          onChange={(e) => {
            data.setBio(e.target.value);
          }}
          value={data.bio}
        />
      </form>
    </>
  );
};

export default InterestsStep;
