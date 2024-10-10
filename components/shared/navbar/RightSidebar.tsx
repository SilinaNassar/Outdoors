"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const jobOpportunities = [
  {
    id: 1,
    company: "Company A",
    position: "Full Stack Developer",
    message: "Apply now!",
  },
  {
    id: 2,
    company: "TechCorp",
    position: "React.js Developer",
    message: "Don't miss out!",
  },
  {
    id: 3,
    company: "DesignHub",
    position: "UI/UX Designer",
    message: "Join their creative team!",
  },
  {
    id: 4,
    company: "FinancePlus",
    position: "Data Analyst",
    message: "Apply today!",
  },
  {
    id: 5,
    company: "GreenTech",
    position: "AI Engineer",
    message: "Exciting projects ahead!",
  },
];

const connectionRequests = [
  { id: 1, name: "John Doe", interest: "developers in the AI field" },
  { id: 2, name: "Jane Smith", interest: "connections in UX Design" },
  { id: 3, name: "Mike Johnson", interest: "networking with Product Managers" },
  {
    id: 4,
    name: "Sara Lee",
    interest: "connecting with marketing professionals",
  },
  { id: 5, name: "Chris Evans", interest: "partnerships in the SaaS industry" },
];

const RightSidebar = () => {
  const { mode, setMode } = useTheme();
  const [visibleJobs, setVisibleJobs] = useState(3);
  const [visibleConnections, setVisibleConnections] = useState(3);
  const router = useRouter();

  return (
    <aside className="background-light900_dark200 light-border custom-scrollbar no-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-24 shadow-light-300 dark:shadow-none max-lg:hidden">
      <div>
        <div className="flex gap-4">
          <Image
            src="/assets/icons/job1.png"
            width={25}
            height={25}
            alt="jobsLogo"
            className={`${mode === "dark" ? "invert" : ""}`}
          />
          <h3 className="h3-bold font-inter text-darkblue_lightgray ">
            Job Opportunities
          </h3>
        </div>

        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {jobOpportunities.slice(0, visibleJobs).map((job, index) => (
            <Link
              key={index}
              href={`/companies/${job.id}`}
              className="flex cursor-pointer items-center justify-between gap-7 p-4  rounded-lg shadow-md transition-transform duration-200 ease-in-out hover:shadow-lg hover:scale-105"
            >
              <p className="base-small text-darkblue_lightgray font-inter">
                <strong>{job.company}</strong> is hiring a {job.position}.{" "}
                {job.message}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
          {visibleJobs < jobOpportunities.length && (
            <Button
              onClick={() => {
                router.replace("/jobs");
              }}
              className="small-medium text-dark400_light900 btn-secondary min-h-[41px] w-full rounded-lg p-4 shadow-none"
            >
              <span className="primary-text-gradient">See all jobs</span>
            </Button>
          )}
        </div>
      </div>
      <div className="mt-16">
        <div className="flex gap-4">
          <Image
            src="/assets/icons/notification1.webp"
            width={25}
            height={25}
            alt="jobsLogo"
            className={`${mode === "dark" ? "invert" : ""}`}
          />
          <h3 className="h3-bold text-dark400_light900 font-inter ">
            Connection Requests
          </h3>
        </div>

        <div className="mt-7 flex flex-col gap-4">
          {connectionRequests
            .slice(0, visibleConnections)
            .map((request, index) => (
              <Link
                key={index}
                href={`/companies/${request.id}`}
                className="flex cursor-pointer items-center justify-between gap-7 p-4  rounded-lg shadow-md transition-transform duration-200 ease-in-out hover:shadow-lg hover:scale-105"
              >
                <p className="base-small text-slate-500">
                  <strong>{request.name}</strong> is looking to connect with{" "}
                  {request.interest}.
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            ))}
          {visibleConnections < connectionRequests.length && (
            <Button
              onClick={() => {
                router.replace("/connections");
              }}
              className="small-medium text-dark400_light900 btn-primary min-h-[41px] w-full rounded-lg p-4 shadow-none"
            >
              <span className="primary-text-gradient">
                See all connection requests
              </span>
            </Button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
