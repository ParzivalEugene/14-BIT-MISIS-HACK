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
  }
}

const tags = [
  "IT",
  "Design",
  "Linguistics",
  "Physics",
  "Music",
  "Animals",
  "Programming",
  "WebDevelopment",
  "MobileDevelopment",
  "DataAnalysis",
  "ProgrammingLanguages",
  "GraphicDesign",
];

const InterestsStep: React.FC<InterestsStepProps> = ({
  formStep,
  nextFormStep,
}) => {
  const [groupSelected, setGroupSelected] = React.useState([]);

  return (
    <>
      <h1 className="text-center font-bold text-2xl mb-6">Интересы</h1>
      <form>
        <CheckboxGroup
          className="gap-1"
          orientation="horizontal"
          value={groupSelected}
          onChange={setGroupSelected}
        >
          {tags.map((tag) => (
            <CustomCheckbox key={tag} value={tag}>
              {tag}
            </CustomCheckbox>
          ))}
          <Textarea
          className="mt-6"
            labelPlacement="outside"
            placeholder="Расскажи немного о себе"
          />
        </CheckboxGroup>
      </form>
    </>
  );
};

export default InterestsStep;
