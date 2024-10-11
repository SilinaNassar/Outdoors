"use client";
import ImageSlider from "@/components/cards/ImageSlider";
import JobCrad from "@/components/cards/JobCrad";
import SeekerCard from "@/components/cards/SeekerCard";
import HomeFilters from "@/components/home/HomeFilters";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { JobFilters, JobSeekersFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import React from "react";

const jobSeekersData = [
  {
    id: 1,
    name: "Alice Johnson",
    skills: ["JavaScript", "React", "Node.js"],
    location: "New York, NY",
    image: "/assets/icons/user.webp",
    mutualConnections: [
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
    experience: "3 years",
    posted: "Posted 2 days ago",
    availability: "Full-time",
  },
  {
    id: 2,
    name: "Bob Williams",
    skills: ["Python", "Django", "Data Analysis"],
    location: "San Francisco, CA",
    image: "/assets/icons/user.webp",
    mutualConnections: [
      {
        id: 103,
        name: "Alex Johnson",
        image: "/assets/icons/user.webp",
      },
    ],
    experience: "5 years",
    posted: "Active 1 week ago",
    availability: "Full-time",
  },
  {
    id: 3,
    name: "Catherine Smith",
    skills: ["UI/UX Design", "Figma", "Photoshop"],
    location: "Austin, TX",
    image: "/assets/icons/user.webp",
    mutualConnections: [],
    experience: "2 years",
    posted: "Active 3 days ago",
    availability: "Part-time",
  },
  {
    id: 4,
    name: "David Brown",
    skills: ["Java", "Spring", "Microservices"],
    location: "Boston, MA",
    image: "/assets/icons/user.webp",
    mutualConnections: [
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
    experience: "4 years",
    posted: "Active 2 weeks ago",
    availability: "Full-time",
  },
  {
    id: 5,
    name: "Eva White",
    skills: ["Project Management", "Agile", "Scrum"],
    location: "Los Angeles, CA",
    image: "/assets/icons/user.webp",
    mutualConnections: [
      {
        id: 106,
        name: "Sarah Parker",
        image: "/assets/icons/user.webp",
      },
    ],
    experience: "6 years",
    posted: "Active 1 month ago",
    availability: "Part-time",
  },
  {
    id: 6,
    name: "Frank Black",
    skills: ["C#", ".NET", "SQL"],
    location: "Seattle, WA",
    image: "/assets/icons/user.webp",
    mutualConnections: [
      {
        id: 107,
        name: "Anna Taylor",
        image: "/assets/icons/user.webp",
      },
    ],
    experience: "7 years",
    posted: "Active 1 week ago",
    availability: "Part-time",
  },
  {
    id: 7,
    name: "Grace Lee",
    skills: ["Ruby", "Rails", "JavaScript"],
    location: "Miami, FL",
    image: "/assets/icons/user.webp",
    mutualConnections: [],
    experience: "3 years",
    posted: "Active 4 days ago",
    availability: "Full-time",
  },
  {
    id: 8,
    name: "Henry King",
    skills: ["PHP", "Laravel", "MySQL"],
    location: "Chicago, IL",
    image: "/assets/icons/user.webp",
    mutualConnections: [
      {
        id: 108,
        name: "Robert Smith",
        image: "/assets/icons/user.webp",
      },
    ],
    experience: "5 years",
    posted: "Active 2 days ago",
    availability: "Full-time",
  },
];

const page = () => {
  return (
    <section className="max-w-[950px] ">
      <HomeFilters filters={JobSeekersFilters} active="all_jobs" />
      <div className="flex flex-between gap-2 max-sm:flex-col sm:mb-4 mb-4 sm:items-start max-sm:gap-0">
        <LocalSearch
          route=""
          iconPosition="left"
          imgSrc="/assets/icons/search.webp"
          placeholder="Experience,Skill,Title "
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
          filters={JobSeekersFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex mb-5"
        />

        <SeekerCard
          data={jobSeekersData}
          title="Top Job Seekers for You"
          subTitle="Based on your company's preferences"
          hasMutualFriends={false}
        />
      </div>
      {/*
      <ImageSlider
        title="Explore job collections"
        paragraph="Broaden your job search with curated collections of opportunities
            tailored to your skills and interests."
        data={jobSeekersData}
        url="/companies"
      />
      */}
      <SeekerCard
        data={jobSeekersData}
        title="Job Seekers in Your Network"
        subTitle="Find potential candidates through your network"
        hasMutualFriends={true}
      />
    </section>
  );
};

export default page;
