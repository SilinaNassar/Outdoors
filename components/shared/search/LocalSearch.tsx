"use client";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { countriesList } from "@/constants";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@radix-ui/react-select";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
  type: string;
}

const LocalSearch = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
  type,
}: CustomInputProps) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  console.log(selectedCountry);

  const fetchCountries = async () => {
    setCountries(countriesList);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setSelectedCountry("United States");
      });
    }
  };

  useEffect(() => {
    fetchCountries();
    getCurrentLocation();
  }, []);
  return (
    <div className="relative mt-6 w-full max-w-[450px] ">
      <div
        className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
      >
        {iconPosition === "left" && (
          <Image
            src={imgSrc}
            alt="search icon"
            width={24}
            height={24}
            className="cursor-pointer dark:invert"
          />
        )}

        {type === "text" && (
          <Input
            type="text"
            placeholder={placeholder}
            onChange={() => {}}
            className="paragraph-regular no-focus placeholder text-dark400_light700 background-light800_darkgradient border-none shadow-none outline-none"
          />
        )}

        {type === "Select_Country" && (
          <div className=" w-full h-auto">
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger
                className={`${otherClasses} w-full border-rounded shadow-sm px-5 py-2.5 background-light800_darkgradient  text-dark400_light700  `}
              >
                <div className="relative line-clamp-1 flex-1 text-left font-inter">
                  <span className="paragraph-regular no-focus placeholder text-dark400_light700  background-light800_darkgradient border-none shadow-none outline-none">
                    {selectedCountry || placeholder}
                  </span>
                </div>
              </SelectTrigger>
              <SelectContent className="relative top-0 mt-1 w-[250px] p-2 scrollable-sidebar no-scrollbar text-dark500_light700 border background-light800_dark300 rounded-md shadow-lg max-h-10 overflow-y-auto">
                {countries.map((country, index) => (
                  <SelectItem
                    key={index}
                    value={country}
                    className="text-dark-500 focus:dark:hover:bg-dark-500 inline-block cursor-pointer items-center rounded-md transition-colors duration-150 focus:hover:bg-gray-100 dark:text-slate-300 "
                  >
                    <div className="flex max-w-[225px] flex-row font-inter p-2">
                      <span className={`body-semibold ml-2`}>{country}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {iconPosition === "right" && (
          <Image
            src={imgSrc}
            alt="search icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default LocalSearch;
