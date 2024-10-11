import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: {
    id: number;
    name: string;
    skills: string[];
    location: string;
    image: string;
    mutualConnections: {
      id: number;
      name: string;
      image: string;
    }[];
    experience: string;
    posted: string;
    availability: string;
  }[];
  title: string;
  subTitle: string;
  hasMutualFriends: boolean;
}

const SeekerCard = ({ data, title, subTitle, hasMutualFriends }: Props) => {
  const [visibleSeekers, setVisibleSeekers] = useState(data.slice(0, 2));
  const [loadedUsersCount, setLoadedUsersCount] = useState(2);

  const handleLoadMore = () => {
    const nextCount = loadedUsersCount + 2;
    setVisibleSeekers(data.slice(0, nextCount));
    setLoadedUsersCount(nextCount);
  };

  const handleClose = (id: number) => {
    setVisibleSeekers(visibleSeekers.filter((user) => user.id !== id));
  };
  return (
    <div className="background-light800_darkgradient border light-border sm:rounded-[22px] card-wrapper custom-scrollbar shadow-dark-200 no-scrollbar mt-6  flex w-full flex-col overflow-y-auto rounded-[22px] border-l p-6 pt-8 shadow-light-300   ">
      <div className="text-dark400_light700 mb-4 ">
        <h2 className="text-dark200_light900 font-inter text-xl font-semibold ">
          {title}
        </h2>
        <h5 className="text-light400_light500 ml-2 font-inter">{subTitle}</h5>
      </div>

      <div className="cursor-pointer flex flex-col gap-3 space-y-6">
        {visibleSeekers.map((user) => (
          <Link href={`/profile/user/${user.id}`}>
            <div
              key={user.id}
              className="relative flex flex-col gap-4 rounded-lg border dark:border-none p-4 shadow-light-300 transition-shadow hover:shadow-lg dark:shadow-black"
            >
              <Button
                onClick={() => handleClose(user.id)}
                className="text-dark400_light900 absolute right-0 top-0 bg-transparent text-lg font-bold hover:bg-transparent"
              >
                &times;
              </Button>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <Image
                    src={user.image}
                    alt={`${user.name} logo`}
                    height={32}
                    width={32}
                    className="mr-4 size-12 rounded-full  object-contain dark:invert"
                  />

                  <div>
                    <h2 className="h3-bold text-dark200_light900 font-inter text-xl">
                      {user.name}
                    </h2>
                    <p className="body-regular text-dark400_light900 font-inter">
                      {user.experience} experience - {user.location}
                    </p>
                    {user.skills.length > 0 && (
                      <p className="small-regular text-light400_light500 ml-1 font-inter">
                        --- {user.skills.join(", ")} ---
                      </p>
                    )}

                    {hasMutualFriends && (
                      <div className="mt-4 flex items-center">
                        {user.mutualConnections.length > 0 && (
                          <>
                            {user.mutualConnections.map((user, index) => (
                              <div key={index}>
                                <Image
                                  src={user.image}
                                  width={20}
                                  height={20}
                                  alt={user.name}
                                  className="mr-2 rounded-full dark:invert max-sm:w-[15px]"
                                />
                              </div>
                            ))}
                            <p className="small-regular text-dark300_light900 font-inter">
                              mutual connections
                            </p>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 p-2">
                  <Button className="rounded-lg bg-primary-100 px-4 py-2 text-white hover:bg-primary-500">
                    Save
                  </Button>
                </div>
              </div>

              <div className="text-dark300_light700 flex items-center justify-between font-spaceGrotesk">
                <span>{user.posted}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {loadedUsersCount < data.length && (
        <div className="mt-6 text-center">
          <Button
            onClick={handleLoadMore}
            className="bg-primary-100 text-white hover:bg-primary-500"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default SeekerCard;
