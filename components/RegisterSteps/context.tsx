import { ReactNode, createContext, useContext, useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  sex: string;
  course: string;
  tags: string[];
  bio: string;
  photos: string[];
}

interface FormContextType {
  data: FormData;
  setFormValues: (values: FormData) => void;
}

export const FormContext = createContext<FormContextType>({
  data: {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    sex: "",
    course: "",
    tags: [],
    bio: "",
    photos: [],
  },
  setFormValues: () => {},
});

export default function FormProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<FormData>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    sex: "",
    course: "",
    tags: [],
    bio: "",
    photos: [],
  });

  const setFormValues = (values: FormData) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
