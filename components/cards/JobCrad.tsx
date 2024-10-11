"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface Props {
  jobsData: {
    id: number;
    title: string;
    company: {
      name: string;
      location: string;
      image: string;
      mutualFriends: {
        id: number;
        name: string;
        image: string;
      }[];
    };
    time: string;
    posted: string;
  }[];
  title: string;
  subTitle: string;
  hasMutualFriends: boolean;
}

const JobCrad = ({ jobsData, title, subTitle, hasMutualFriends }: Props) => {
  const [visibleJobs, setVisibleJobs] = useState(jobsData.slice(0, 2));
  const [loadedJobsCount, setLoadedJobsCount] = useState(2);

  const handleLoadMore = () => {
    const nextCount = loadedJobsCount + 2;
    setVisibleJobs(jobsData.slice(0, nextCount));
    setLoadedJobsCount(nextCount);
  };

  const handleClose = (id: number) => {
    setVisibleJobs(visibleJobs.filter((job) => job.id !== id));
  };
  return (
    <div className="background-light800_darkgradient border light-border sm:rounded-[22px] card-wrapper custom-scrollbar shadow-dark-200 no-scrollbar mt-6  flex w-full flex-col overflow-y-auto rounded-[22px] border-l p-6 pt-8 shadow-light-300   ">
      <div className="text-dark400_light700 mb-4 ">
        <h2 className="text-dark200_light900 font-inter text-xl font-semibold ">
          {title}
        </h2>
        <h5 className="text-light400_light500 ml-2 font-inter">{subTitle}</h5>
      </div>

      <div className="cursor-pointer space-y-6">
        {visibleJobs.map((job) => (
          <div
            key={job.id}
            className="relative flex flex-col gap-4 rounded-lg border dark:border-none p-4 shadow-light-300 transition-shadow hover:shadow-lg dark:shadow-black"
          >
            <Button
              onClick={() => handleClose(job.id)}
              className="text-dark400_light900 absolute right-0 top-0 bg-transparent text-lg font-bold hover:bg-transparent"
            >
              &times;
            </Button>

            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <Image
                  src={job.company.image}
                  alt={`${job.company.name} logo`}
                  height={32}
                  width={32}
                  className="mr-4 size-12 rounded-full border object-contain"
                />

                <div>
                  <h2 className="h3-bold text-dark200_light900 font-inter text-xl">
                    {job.title}
                  </h2>
                  <p className="body-regular text-dark400_light900 font-inter">
                    {job.company.name} - {job.company.location}
                  </p>
                  <p className="small-regular text-dark300_light900 ml-1 font-inter">
                    {job.time}
                  </p>

                  {hasMutualFriends && (
                    <div className="mt-4 flex items-center">
                      {job.company.mutualFriends.length > 0 && (
                        <>
                          {job.company.mutualFriends.map((user, index) => (
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
              <span>{job.posted}</span>
            </div>
          </div>
        ))}
      </div>

      {loadedJobsCount < jobsData.length && (
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

export default JobCrad;
