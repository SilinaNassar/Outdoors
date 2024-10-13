import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  title: string;
  data: {
    id: number;
    name: string;
    image: string;
    industry: string;
    location: string;
  }[];
  image: string;
  type: string;
}

const sideCard = ({ title, data, image, type }: Props) => {
  return (
    <div className="background-light900_dark200 hidden max-h-[450px] flex-col gap-8 rounded-[10px] border-r border-t p-6 sm:px-11 xl:flex">
      <div className="flex flex-col">
        <h3 className="h3-semibold text-dark100_light900 flex font-inter">
          {title}
        </h3>

        {/* Data List */}
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          <>
            {data.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className=" flex gap-4 rounded-lg border-b p-4 shadow-md transition-transform hover:scale-105"
              >
                <Link
                  href={`${type === "company" ? `/companies/${item.id}` : `/profile/${item.id}`}`}
                  className="flex"
                >
                  {/* item Logo */}
                  <Image
                    src={item.image}
                    alt={`${item.name} logo`}
                    width={25}
                    height={25}
                    className=" flex size-12 items-center justify-center rounded-full object-contain p-1"
                  />

                  {/* item Details */}
                  <div className="flex flex-col">
                    <h4 className=" flex font-inter font-semibold">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      {item.industry}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {item.location}
                    </p>
                  </div>
                </Link>
                <Button className="rounded-lg bg-primary-100 px-4 py-2 font-inter text-white hover:bg-primary-500">
                  <Image
                    src={image}
                    height={20}
                    width={20}
                    alt="connect"
                    className="bg-transparent"
                  />
                </Button>
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default sideCard;
