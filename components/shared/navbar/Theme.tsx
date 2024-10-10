"use client";
import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { themes } from "@/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <div className="relative">
      <Select
        onValueChange={(value) => {
          setMode(value);
          if (value !== "system") {
            localStorage.theme = value;
          } else {
            localStorage.removeItem("theme");
          }
        }}
      >
        <SelectTrigger className="flex w-[180px] items-center">
          {mode === "night" ? (
            <Image
              src="/assets/icons/lightMode.webp"
              alt="light"
              width={30}
              height={30}
            />
          ) : (
            <Image
              src="/assets/icons/nightMode.png"
              alt="night"
              width={30}
              height={30}
              className="active-theme"
            />
          )}
        </SelectTrigger>
        <SelectContent>
          {themes.map((theme) => (
            <SelectItem
              key={theme.value}
              value={theme.value}
              className="text-dark-500 focus:dark:hover:bg-dark-500 inline-block cursor-pointer items-center rounded-md transition-colors duration-150 focus:hover:bg-gray-100 dark:text-slate-300 "
            >
              <div className="flex max-w-[25px] flex-row">
                <Image
                  src={theme.icon}
                  alt={theme.label}
                  width={23}
                  height={23}
                  className={`${mode === theme.value && "active-theme"}`}
                />
                <span
                  className={`body-semibold ml-2  ${mode === theme.value ? "text-primary-500" : "text-dark100_light900"}`}
                >
                  {theme.label}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Theme;
