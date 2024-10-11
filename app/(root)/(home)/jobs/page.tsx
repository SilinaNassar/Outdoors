"use client";
import { Button } from "@/components/ui/button";
import { JobFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import Image from "next/image";
import React, { useState } from "react";
import HomeFilters from "@/components/home/HomeFilters";
import JobCrad from "@/components/cards/JobCrad";
import ImageSlider from "@/components/cards/ImageSlider";
import LocalSearch from "@/components/shared/search/LocalSearch";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: {
      name: "Outdoors",
      location: "New York, NY",
      image: "/assets/icons/logo.webp",
      mutualFriends: [
        {
          id: 101,
          name: "John Doe",
          image: "/assets/icons/user.webp",
        },
        {
          id: 102,
          name: "Jane Smith",
          image: "/assets/icons/user.webp",
        },
      ],
    },
    time: "Full-time",
    posted: "3 days ago",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: {
      name: "Techies",
      location: "San Francisco, CA",
      image: "/assets/icons/logo.webp",
      mutualFriends: [
        {
          id: 103,
          name: "Alex Johnson",
          image: "/assets/icons/user.webp",
        },
      ],
    },
    time: "Part-time",
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: {
      name: "Dev Works",
      location: "Austin, TX",
      image: "/assets/icons/logo.webp",
      mutualFriends: [],
    },
    time: "Remote",
    posted: "2 weeks ago",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: {
      name: "Analytics Corp",
      location: "Boston, MA",
      image: "/assets/icons/logo.webp",
      mutualFriends: [
        {
          id: 104,
          name: "Emily Davis",
          image: "/assets/icons/user.webp",
        },
        {
          id: 105,
          name: "Michael Green",
          image: "/assets/icons/user.webp",
        },
      ],
    },
    time: "Full-time",
    posted: "1 month ago",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: {
      name: "Creative Minds",
      location: "Los Angeles, CA",
      image: "/assets/icons/logo.webp",
      mutualFriends: [
        {
          id: 106,
          name: "Sarah Parker",
          image: "/assets/icons/user.webp",
        },
      ],
    },
    time: "Contract",
    posted: "3 weeks ago",
  },

  {
    id: 5,
    title: "UI/UX Designer",
    company: {
      name: "Creative Minds",
      location: "Los Angeles, CA",
      image: "/assets/icons/logo.webp",
      mutualFriends: [
        {
          id: 106,
          name: "Sarah Parker",
          image: "/assets/icons/user.webp",
        },
      ],
    },
    time: "Contract",
    posted: "3 weeks ago",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: {
      name: "Creative Minds",
      location: "Los Angeles, CA",
      image: "/assets/icons/logo.webp",
      mutualFriends: [
        {
          id: 106,
          name: "Sarah Parker",
          image: "/assets/icons/user.webp",
        },
      ],
    },
    time: "Contract",
    posted: "3 weeks ago",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: {
      name: "Creative Minds",
      location: "Los Angeles, CA",
      image: "/assets/icons/logo.webp",
      mutualFriends: [
        {
          id: 106,
          name: "Sarah Parker",
          image: "/assets/icons/user.webp",
        },
      ],
    },
    time: "Contract",
    posted: "3 weeks ago",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: {
      name: "Creative Minds",
      location: "Los Angeles, CA",
      image: "/assets/icons/logo.webp",
      mutualFriends: [
        {
          id: 106,
          name: "Sarah Parker",
          image: "/assets/icons/user.webp",
        },
      ],
    },
    time: "Contract",
    posted: "3 weeks ago",
  },
];
const JobListingPage = () => {
  return (
    <section className="max-w-[950px] ">
      <HomeFilters filters={JobFilters} active="all_jobs" />
      <div className="flex flex-between gap-2 max-sm:flex-col sm:mb-4 mb-4 sm:items-start max-sm:gap-0">
        <LocalSearch
          route=""
          iconPosition="left"
          imgSrc="/assets/icons/search.webp"
          placeholder="Company,Skill,Title "
          type="text"
        />
        <LocalSearch
          route=""
          iconPosition="left"
          imgSrc="/assets/icons/location.webp"
          placeholder="Country.. "
          type="Select_Country"
        />
      </div>

      <div className="background-light800_darkgradient border max-md:mt-0 light-border sm:rounded-[22px] card-wrapper custom-scrollbar no-scrollbar mt-6  flex w-full flex-col overflow-y-auto rounded-[22px] border-l p-6 pt-8 shadow-light-300 shadow-dark-200 ">
        <Filter
          filters={JobFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex mb-5"
        />

        <JobCrad
          jobsData={jobsData}
          title="Top job picks for you"
          subTitle="Based on your profile and search history"
          hasMutualFriends={false}
        />
      </div>

      <ImageSlider
        title="Explore job collections"
        paragraph="Broaden your job search with curated collections of opportunities
        tailored to your skills and interests."
        data={jobsData}
        url="/companies"
      />

      <JobCrad
        jobsData={jobsData}
        title="Hiring in your network"
        subTitle="Explore relevant jobs in your network"
        hasMutualFriends={true}
      />
    </section>
  );
};

export default JobListingPage;
