import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import React, { useEffect } from "react";
import { v4 } from "uuid";

interface PhotosStepProps {
  formStep: number;
  nextFormStep: () => void;
  data: {
    photos: string[];
    setPhotos: (value: string[]) => void;
  };
}

const supabase = createClient(
  process.env.SUPABASE_URL || "https://qucsmgttjfelqvwatpom.supabase.co",
  process.env.SUPABASE_PUBLIC_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y3NtZ3R0amZlbHF2d2F0cG9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNjY5ODYsImV4cCI6MjAwOTc0Mjk4Nn0.w1U0R1KCFoBWW6506J5_w8c2mQCmSXPkH6GjAaJ8Z4o"
);

const PhotosStep: React.FC<PhotosStepProps> = ({
  formStep,
  nextFormStep,
  data,
}) => {
  const uploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const fileName = `public/${v4()}.jpg`;
    const { data: supa_data, error } = await supabase.storage
      .from("Photos")
      .upload(fileName, file);

    if (supa_data) {
      data.setPhotos([...data.photos, supa_data.path]);
    }
  };

  useEffect(() => {}, [data.photos]);

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Фотографии</h1>
      <p className="text-center text-sm text-zinc-600">
        Добавь от 1 до 3 фотографий
      </p>
      <div className="mt-6">
        {data.photos[2] ? (
          <Image
            src={
              "https://qucsmgttjfelqvwatpom.supabase.co/storage/v1/object/public/Photos/" +
              data.photos[2]
            }
            height={356}
            width={356}
            alt="photo1"
            className="rounded-lg"
          />
        ) : (
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Добавить фото</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PNG or JPG
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={uploadPhoto}
              />
            </label>
          </div>
        )}

        <div className="flex gap-6 mt-6">
          {data.photos[0] ? (
            <Image
              src={
                "https://qucsmgttjfelqvwatpom.supabase.co/storage/v1/object/public/Photos/" +
                data.photos[0]
              }
              width={112}
              height={112}
              alt="photo1"
              className="rounded-lg"
            />
          ) : (
            <div className="h-28 w-28 bg-gray-700 rounded-lg"></div>
          )}
          {data.photos[1] ? (
            <Image
              src={
                "https://qucsmgttjfelqvwatpom.supabase.co/storage/v1/object/public/Photos/" +
                data.photos[1]
              }
              width={112}
              height={112}
              alt="photo2"
              className="rounded-lg"
            />
          ) : (
            <div className="h-28 w-28 bg-gray-700 rounded-lg"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default PhotosStep;
