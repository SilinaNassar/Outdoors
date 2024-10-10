import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
  link?: string;
  linkTitle?: string;
}

const NoResult = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center ">
      <Image
        src="/assets/images/light-illustration.png"
        alt="no result img"
        width={270}
        height={200}
        className="block object-contain brightness-110 hue-rotate-[200deg] dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="no result img"
        width={270}
        height={200}
        className="hidden object-contain brightness-90 hue-rotate-[220deg] dark:flex"
      />
      <h2 className="h2-bold text-dark200_light900 font-spaceGrotesk mt-8">
        {title}
      </h2>
      <p className="body-regular text-dark500_light700 max-w-md text-center">
        {description}
      </p>
      {link && (
        <Link href={link}>
          <Button className="paragraph-medium bg-primary-500 text-light-900 hover:bg-primary-100 hover:text-dark-400 dark:bg-primary-500 dark:text-light-900 dark:hover:bg-primary-100 dark:hover:text-dark-400 mt-5 min-h-[46px] rounded-lg px-4 py-3">
            {linkTitle}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NoResult;
