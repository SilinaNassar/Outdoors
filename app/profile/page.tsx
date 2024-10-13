"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/navbar/LeftSidebar";
import Tags from "@/components/shared/Tags";
import { FiMail, FiLinkedin, FiPhone } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ImageSlider from "@/components/cards/ImageSlider";
import SideCard from "@/components/cards/SideCard";

const user = {
  id: 1,
  name: "Silina Nassar",
  title: "Full Stack Developer",
  location: "Beirut, Lebanon",
  bio: "Passionate developer with experience in building scalable web applications. Excels in creating robust back-end services and delivering dynamic front-end experiences.",
  profileImage: "/assets/icons/user.webp",
  coverImage: "/assets/icons/user.webp",
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "Next.js",
  ],
  experience: [
    {
      company: "Outdoors Inc.",
      position: "Senior Frontend Developer",
      duration: "Jan 2022 - Present",
      description:
        "Developed high-performance web applications using React and Next.js.",
    },
    {
      company: "Tech Solutions",
      position: "Backend Developer",
      duration: "Feb 2020 - Dec 2021",
      description:
        "Built RESTful APIs and worked with databases like MongoDB and MySQL.",
    },
    {
      company: "Tech Solutions",
      position: "Backend Developer",
      duration: "Feb 2020 - Dec 2021",
      description:
        "Built RESTful APIs and worked with databases like MongoDB and MySQL.",
    },
    {
      company: "Tech Solutions",
      position: "Backend Developer",
      duration: "Feb 2020 - Dec 2021",
      description:
        "Built RESTful APIs and worked with databases like MongoDB and MySQL.",
    },
    {
      company: "Tech Solutions",
      position: "Backend Developer",
      duration: "Feb 2020 - Dec 2021",
      description:
        "Built RESTful APIs and worked with databases like MongoDB and MySQL.",
    },
  ],
  certifications: [
    "AWS Certified Developer",
    "Google Cloud Professional Developer",
    "AWS Certified Developer",
    "Google Cloud Professional Developer",
    "AWS Certified Developer",
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Lebanese American University",
      year: "2016 - 2020",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Lebanese American University",
      year: "2016 - 2020",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Lebanese American University",
      year: "2016 - 2020",
    },
  ],
  projects: [
    {
      name: "Task Manager",
      description:
        "Developed a fully featured task manager app using Node.js and MongoDB.",
      link: "#",
    },
    {
      name: "E-commerce Platform",
      description:
        "Built a scalable e-commerce platform with React and Next.js.",
      link: "#",
    },
    {
      name: "E-commerce Platform",
      description:
        "Built a scalable e-commerce platform with React and Next.js.",
      link: "#",
    },
  ],
  contacts: {
    email: "silina@example.com",
    phone: "+961 3 123456",
    linkedIn: "https://linkedin.com/in/silinanassar",
  },
  commonConnections: [
    "/assets/icons/user.webp",
    "/assets/icons/user.webp",
    "/assets/icons/user.webp",
  ],
  activities: [
    {
      description: "Completed a coding challenge on LeetCode.",
      date: "2024-10-12",
      image: "/assets/icons/activity1.png",
      title: "LeetCode Challenge Completed",
    },
    {
      description: "Participated in a team hackathon.",
      date: "2024-10-10",
      image: "/assets/icons/activity2.webp",
      title: "Team Hackathon Participation",
    },
    {
      description: "Published a blog post on web development.",
      date: "2024-10-08",
      image: "/assets/icons/activity3.png",
      title: "Blog Post Published",
    },
  ],
};

const recommendedCompanies = [
  {
    id: 1,
    name: "Techify Solutions",
    image: "/assets/icons/logo.webp",
    industry: "Software",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "GreenWave Energy",
    image: "/assets/icons/logo.webp",
    industry: "Renewable Energy",
    location: "Austin, TX",
  },
  {
    id: 3,
    name: "NextGen Media",
    image: "/assets/icons/logo.webp",
    industry: "Media & Entertainment",
    location: "New York, NY",
  },
];

const recommendedPeople = [
  {
    id: 1,
    name: "Alicia Fernandez",
    image: "/assets/icons/user.webp",
    industry: "Marketing",
    location: "Los Angeles, CA",
  },
  {
    id: 2,
    name: "Michael Johnson",
    image: "/assets/icons/user.webp",
    industry: "Finance",
    location: "Chicago, IL",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    image: "/assets/icons/user.webp",
    industry: "Tech",
    location: "Seattle, WA",
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    image: "/assets/icons/user.webp",
    industry: "Renewable Energy",
    location: "Austin, TX",
  },
  {
    id: 5,
    name: "Sara Tanaka",
    image: "/assets/icons/user.webp",
    industry: "Healthcare",
    location: "New York, NY",
  },
];

const UserProfilePage = () => {
  const dataForImageSlider = user.activities.map((item, index) => {
    return {
      id: index,
      title: item.title,
      image: item.image,
    };
  });
  const [visibleExperiences, setVisibleExperiences] = useState(
    user.experience.slice(0, 2)
  );
  const [loadedExperienceCount, setLoadedExperienceCount] = useState(2);

  const [visibleProjects, setVisibleProjects] = useState(
    user.projects.slice(0, 2)
  );
  const [loadedProjectsCount, setLoadedProjectsCount] = useState(2);

  const [visibleCertificates, setVisibleCertificates] = useState(
    user.certifications.slice(0, 2)
  );
  const [loadedCertificatesCount, setLoadedCertificatesCount] = useState(2);

  const [visibleEducations, setVisibleEducations] = useState(
    user.education.slice(0, 2)
  );
  const [loadedEducationsCount, setLoadedEducationsCount] = useState(2);

  const [visibleActivities, setVisibleActivities] = useState(
    user.activities.slice(0, 2)
  );
  const [loadedActivitiesCount, setLoadedActivitiesCount] = useState(2);

  const handleLoadMore = (
    items,
    setVisibleItems,
    loadedCount,
    setLoadedCount,
    increment = 2
  ) => {
    const nextCount = loadedCount + increment;
    setVisibleItems(items.slice(0, nextCount));
    setLoadedCount(nextCount);
  };

  // Usage for Experiences:
  const handleLoadMoreExperience = () => {
    handleLoadMore(
      user.experience,
      setVisibleExperiences,
      loadedExperienceCount,
      setLoadedExperienceCount
    );
  };

  // Usage for Projects:
  const handleLoadMoreProjects = () => {
    handleLoadMore(
      user.projects,
      setVisibleProjects,
      loadedProjectsCount,
      setLoadedProjectsCount
    );
  };

  // Usage for Certificates:
  const handleLoadMoreCertificates = () => {
    handleLoadMore(
      user.certifications,
      setVisibleCertificates,
      loadedCertificatesCount,
      setLoadedCertificatesCount
    );
  };

  const handleLoadMoreEducations = () => {
    handleLoadMore(
      user.education,
      setVisibleEducations,
      loadedEducationsCount,
      setLoadedEducationsCount
    );
  };

  const handleLoadMoreActivities = () => {
    handleLoadMore(
      user.activities,
      setVisibleActivities,
      loadedActivitiesCount,
      setLoadedActivitiesCount
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex w-full">
        <LeftSidebar />
        <section className="flex min-h-screen flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="flex w-full  max-w-4xl items-center justify-start">
            <div className="card-wrapper dark:background-light900_dark200 flex flex-col gap-8 rounded-[10px] border-r border-t  p-9 sm:px-11">
              <div className="background-light800_darkgradient w-full overflow-hidden rounded-lg border-r border-t p-8">
                {/* Profile Header */}
                <div className="flex flex-col items-center ">
                  <div className="relative h-48 w-full">
                    <Image
                      className="size-full object-cover"
                      src={user.coverImage}
                      alt="Cover Picture"
                      layout="fill"
                    />
                  </div>
                  <div className="flex w-full max-w-4xl items-center space-x-6 px-4">
                    {/* Profile Image */}
                    <div className="relative size-32">
                      <Image
                        className="rounded-full object-contain dark:invert"
                        src={user.profileImage}
                        alt={`${user.name}'s profile`}
                        fill
                      />
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1">
                      <h1 className="h3-bold text-dark200_light900 font-inter text-2xl font-bold leading-loose">
                        {user.name}
                      </h1>
                      <p className="body-regular text-dark400_light900 font-inter">
                        {user.title}
                      </p>
                      <p className="small-regular text-light400_light500 ml-1 mt-1 font-inter">
                        {user.location}
                      </p>

                      <div className="flex items-center">
                        {user.commonConnections
                          .slice(0, 3)
                          .map((connection, index) => (
                            <div key={index} className="relative mr-1 mt-2">
                              <Image
                                className="rounded-full border object-contain"
                                src={connection}
                                alt="Connection"
                                width={20}
                                height={20}
                              />
                            </div>
                          ))}
                        {user.commonConnections.length > 3 && (
                          <div className="relative mt-2 text-sm  text-gray-500">
                            +{user.commonConnections.length - 3}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Message and Connect Buttons */}
                    <div className="space-x-4">
                      <Button className="rounded-lg bg-primary-100 px-4 py-2 font-inter text-white hover:bg-primary-500">
                        <FiMail className="mr-2" /> Message
                      </Button>
                      <button className="rounded-lg border bg-secondary px-4 py-2 font-inter text-slate-500 hover:bg-primary-500 dark:text-white">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bio Section */}
                <div className="mt-8">
                  <p className="text-dark400_light900 mt-2 font-inter leading-relaxed">
                    {user.bio}
                  </p>
                </div>

                {/* Skills Section */}
                <div className="mt-8">
                  <h2 className="text-dark200_light900 font-inter text-xl font-semibold">
                    Skills & Endorsements
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Tags items={user.skills} />
                  </div>
                </div>

                {/* Experience Section */}
                <div className="mt-8">
                  <h2 className="text-dark200_light900 font-inter text-xl font-semibold">
                    Work Experience
                  </h2>
                  <div className="mt-4 space-y-4">
                    {visibleExperiences.map((exp, index) => (
                      <div
                        key={index}
                        className="rounded-lg border p-4 shadow-sm"
                      >
                        <h3 className="text-dark300_light900 font-inter text-lg font-medium">
                          {exp.position}
                        </h3>
                        <p className="text-darkblue_lightgray">
                          {exp.company} | {exp.duration}
                        </p>
                        <p className="text-dark500_light700 mt-1">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  {loadedExperienceCount < user.experience.length && (
                    <div className="mt-6 text-center">
                      <Button
                        onClick={handleLoadMoreExperience}
                        className="bg-primary-100 text-white hover:bg-primary-500"
                      >
                        Load More
                      </Button>
                    </div>
                  )}
                </div>

                {/* Projects Section */}
                <div className="mt-8">
                  <h2 className="text-dark200_light900 font-inter text-xl font-semibold">
                    Projects
                  </h2>
                  <div className="mt-4 space-y-4">
                    {visibleProjects.map((project, index) => (
                      <div
                        key={index}
                        className="rounded-lg border p-4 shadow-sm"
                      >
                        <h3 className="text-dark300_light900 font-inter text-lg font-medium">
                          {project.name}
                        </h3>
                        <p className="text-dark500_light700 mt-1">
                          {project.description}
                        </p>
                        <a
                          href={project.link}
                          className="text-blue-500 hover:underline"
                        >
                          View Project
                        </a>
                      </div>
                    ))}
                  </div>
                  {loadedProjectsCount < user.projects.length && (
                    <div className="mt-6 text-center">
                      <Button
                        onClick={handleLoadMoreProjects}
                        className="bg-primary-100 text-white hover:bg-primary-500"
                      >
                        Load More
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              {/* ----- */}
              <div className=" background-light800_darkgradient rounded-[10px] border-r border-t p-9  sm:px-11">
                {/* Certifications Section */}
                <div className="flex flex-col ">
                  <h2 className="text-dark200_light900 mb-4 font-inter text-2xl font-semibold">
                    Certifications
                  </h2>
                  <ol className="mt-4 space-y-4">
                    {visibleCertificates.map((cert, index) => (
                      <li
                        key={index}
                        className="text-dark100_light900 background-light800_darkgradient flex items-center space-x-2 rounded-lg border p-3 font-inter shadow-sm transition-all hover:shadow-xl"
                      >
                        <span>🧿</span>
                        <span className="text-darkblue_lightgray font-inter">
                          {cert}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                {loadedCertificatesCount < user.certifications.length && (
                  <div className="mt-6 text-center">
                    <Button
                      onClick={handleLoadMoreCertificates}
                      className="bg-primary-100 text-white hover:bg-primary-500"
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </div>
              {/* -----  */}
              <div className="background-light800_darkgradient rounded-[10px] border-r border-t  p-9 sm:px-11">
                {/* Education Section */}

                <div className="flex flex-col ">
                  <h2 className="text-dark200_light900 mb-4 font-inter text-2xl font-semibold">
                    Education
                  </h2>
                  <ol className="mt-4 space-y-4">
                    {visibleEducations.map((e, index) => (
                      <li
                        key={index}
                        className="text-dark100_light900 background-light800_darkgradient flex items-center space-x-2 rounded-lg border p-3 font-inter shadow-sm transition-all hover:shadow-xl"
                      >
                        <span>🎓</span>
                        <p className=" text-dark500_light700 mt-1  font-inter">
                          {e.degree}
                        </p>
                        <p className=" text-darkblue_lightgray">
                          {e.school} | {e.year}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                {loadedEducationsCount < user.projects.length && (
                  <div className="mt-6 text-center">
                    <Button
                      onClick={handleLoadMoreEducations}
                      className="bg-primary-100 text-white hover:bg-primary-500"
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </div>
              {/* -----  */}
              {/* Activities Section */}
              <div className="mt-8">
                <div className=" flex-between flex">
                  <h2 className=" text-dark200_light900 flex font-inter text-xl font-semibold">
                    Recent Activities
                  </h2>
                  <Link href={`/posts/${user.id}`}>
                    <Button className="rounded-lg bg-primary-100 px-4 py-2 font-inter text-white hover:bg-primary-500">
                      See all posts
                    </Button>
                  </Link>
                </div>
                <ImageSlider
                  data={dataForImageSlider}
                  title="Featured"
                  paragraph={`${user.name} Posted this `}
                  url={`/posts/${user.id}`}
                />
                <div className="mt-4 space-y-4">
                  {visibleActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="rounded-lg border p-4 shadow-sm"
                    >
                      <p className="text-dark500_light700">
                        {activity.description}
                      </p>
                      <p className="text-darkblue_lightgray mt-1">
                        {activity.date}
                      </p>
                    </div>
                  ))}
                </div>
                {loadedActivitiesCount < user.activities.length && (
                  <div className="mt-6 text-center">
                    <Button
                      onClick={handleLoadMoreActivities}
                      className="bg-primary-100 text-white hover:bg-primary-500"
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </div>
              {/* -----  */}
              <div className="background-light800_darkgradient rounded-lg border-r border-t  p-6   transition-all  duration-300 hover:scale-105 hover:shadow-xl  ">
                {/* Contact Section */}
                <div className="mt-4">
                  <h2 className="mb-4 font-inter text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Contact Information
                  </h2>
                  <ul className="mt-2 space-y-4">
                    <li className="flex items-center space-x-3 rounded-lg p-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
                      <FiMail
                        className="text-blue-600 dark:text-blue-400"
                        size={24}
                      />
                      <div>
                        <span className="font-medium">Email:</span>
                        <a
                          href={`mailto:${user.contacts.email}`}
                          className="text-blue-600 hover:underline dark:text-blue-400"
                        >
                          {user.contacts.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3 rounded-lg p-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
                      <FiPhone
                        className="text-blue-600 dark:text-blue-400"
                        size={24}
                      />
                      <div>
                        <span className="font-medium">Phone:</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {user.contacts.phone}
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3 rounded-lg p-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
                      <FiLinkedin
                        className="text-blue-600 dark:text-blue-400"
                        size={24}
                      />
                      <div>
                        <span className="font-medium">LinkedIn:</span>
                        <a
                          href={user.contacts.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline dark:text-blue-400"
                        >
                          {user.contacts.linkedIn}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col gap-5">
          <div className="mr-5 flex pt-28">
            <SideCard
              title="Companies You May Know"
              data={recommendedCompanies}
              image="/assets/icons/connection.png"
              type="company"
            />
          </div>
          <div className="mr-5 flex">
            <SideCard
              title="People You May Know"
              data={recommendedPeople}
              image="/assets/icons/view.webp"
              type="person"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
