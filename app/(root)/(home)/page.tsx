"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";
import Filter from "@/components/shared/Filter";
import { PostFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import PostCard from "@/components/cards/PostCard";
import image from "next/image";

const posts = [
  {
    id: 1,
    author: {
      name: "John Doe",
      image: "/assets/icons/user.webp",
    },
    content: "Excited to start my new journey in web development!",
    media: [
      {
        type: "image",
        url: "/assets/icons/logo.webp",
        alt: "Web Development",
      },
    ],
    likes: 150,
    comments: [
      {
        user: {
          id: 2,
          name: "Jane Smith",
          image: "/assets/icons/user.webp",
        },
        comment: "Congrats, John! Can't wait to see your projects!",
      },
      {
        user: {
          id: 3,
          name: "Mark Johnson",
          image: "/assets/icons/user.webp",
        },
        comment: "Welcome to the club!",
      },
    ],
    reactions: {
      "🎉": 50,
      "👌🏻": 30,
      "💖": 20,
    },
    postedAt: "2024-10-01T12:00:00Z",
    tags: ["#webdevelopment", "#journey", "#coding"],
    visibility: "public",
  },
  {
    id: 2,
    author: {
      name: "Alice Brown",
      image: "/assets/icons/user.webp",
    },
    content: "Just completed my first marathon! 🏃‍♀️💪",
    media: [
      {
        type: "image",
        url: "/assets/icons/logo.webp",
        alt: "Marathon",
      },
      {
        type: "video",
        url: "/assets/CharityCompassionShop.mp4",
        alt: "Coding Tutorial",
      },
      {
        type: "image",
        url: "/assets/icons/logo.webp",
        alt: "Marathon",
      },
      {
        type: "image",
        url: "/assets/icons/logo.webp",
        alt: "Marathon",
      },
      {
        type: "image",
        url: "/assets/icons/logo.webp",
        alt: "Marathon",
      },
      {
        type: "image",
        url: "/assets/icons/logo.webp",
        alt: "Marathon",
      },
      {
        type: "image",
        url: "/assets/icons/logo.webp",
        alt: "Marathon",
      },
    ],
    likes: 200,
    comments: [
      {
        user: {
          id: 4,
          name: "Tom Harris",
          image: "/assets/icons/user.webp",
        },
        comment: "Amazing achievement, Alice! 🎉",
      },
    ],
    reactions: {
      "🎉": 80,
      "👌🏻": 10,
      "💖": 30,
    },
    postedAt: "2024-10-02T14:30:00Z",
    tags: ["#marathon", "#fitness", "#achievement"],
    visibility: "public",
  },
  {
    id: 3,
    author: {
      name: "Emma Wilson",
      image: "/assets/icons/user.webp",
    },
    content: "Enjoying a beautiful day at the beach! 🌊☀️",
    media: [
      {
        type: "image",
        url: "/assets/icons/logo.webp",
        alt: "Beach",
      },
    ],
    likes: 300,
    comments: [
      {
        user: {
          id: 5,
          name: "Liam Thompson",
          image: "/assets/icons/user.webp",
        },
        comment: "Looks so relaxing! I need a beach day soon!",
      },
      {
        user: {
          id: 6,
          name: "Olivia Davis",
          image: "/assets/icons/user.webp",
        },
        comment: "Love the beach vibes! 🌴",
      },
    ],
    reactions: {
      "🎉": 60,
      "💖": 50,
      "🤩": 20,
    },
    postedAt: "2024-10-03T09:00:00Z",
    tags: ["#beach", "#vacation", "#relaxation"],
    visibility: "public",
  },
  {
    id: 4,
    author: {
      name: "Michael Green",
      image: "/assets/icons/user.webp",
    },
    content: "Check out my latest coding tutorial! 🎥",
    media: [
      {
        type: "video",
        url: "/assets/Earth.mp4",
        alt: "Coding Tutorial",
      },
    ],
    likes: 120,
    comments: [
      {
        user: {
          id: 7,
          name: "Sarah Brown",
          image: "/assets/icons/user.webp",
        },
        comment: "Great tutorial! Very helpful! 👍",
      },
    ],
    reactions: {
      "🎉": 40,
      "👌🏻": 20,
      "💖": 15,
    },
    postedAt: "2024-10-04T15:45:00Z",
    tags: ["#coding", "#tutorial", "#education"],
    visibility: "public",
  },
];

const PostBox = () => {
  const { mode, setMode } = useTheme();
  const { user } = useUser();
  const [isExpanded, setIsExpanded] = useState(false);
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      const data = files.map((file) => {
        return {
          name: file.name,
          url: URL.createObjectURL(file),
        };
      });
      setFiles((prevData) => [...prevData, ...data]);
    } else {
      setFiles([]);
    }
  };
  const handleRemove = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <>
      <div
        className="background-light800_darkgradient relative flex min-h-[120px] grow items-center gap-4 rounded-xl px-4"
        onClick={() => setIsExpanded(true)}
      >
        {user?.imageUrl && (
          <Image
            src={user.imageUrl}
            alt="user"
            width={25}
            height={25}
            className="rounded-full"
          />
        )}
        <Textarea
          placeholder="What’s on your mind?"
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        />
        <Button className="primary-gradient min-h-[46px] px-4 py-3 text-white">
          Post
        </Button>
      </div>
      <Filter
        filters={PostFilters}
        otherClasses="min-h-[56px] sm:min-w-[170px]"
        containerClasses="hidden max-md:flex"
      />
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <PostCard
              key={index}
              id={post.id}
              author={post.author}
              content={post.content}
              media={post.media}
              likes={post.likes}
              comments={post.comments}
              reactions={post.reactions}
              postedAt={post.postedAt}
              tags={post.tags}
              visibility={post.visibility}
            />
          ))
        ) : (
          <NoResult
            title="There' no posts to show"
            description=" Be the first to break the silence! 🚀 Write what you are thinking about .Get involved"
          />
        )}
      </div>
      {isExpanded && (
        <div className="background-light800_darkgradient fixed inset-0 z-50 flex items-center justify-center ">
          <div className="background-light900_dark200  mx-4 w-full max-w-2xl rounded-xl p-6 shadow-lg">
            <div className="flex flex-col gap-4">
              <div className="flex-between flex items-center">
                {user?.imageUrl && (
                  <Image
                    src={user.imageUrl}
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}

                <Image
                  onClick={() => setIsExpanded(false)}
                  src="/assets/icons/close.webp"
                  width={25}
                  height={25}
                  alt="close"
                  className={`${mode === "dark" ? "invert" : ""} cursor-pointer`}
                />
              </div>

              <Textarea
                placeholder="What’s on your mind?"
                className="paragraph-regular scrollable-sidebar background-light800_darkgradient h-auto min-h-[150px] w-full border-none shadow-none outline-none"
              />

              <div className="mt-2 flex items-center justify-between">
                <div className="relative">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileChange}
                    multiple
                  />
                  <label
                    htmlFor="file-upload"
                    className="text-dark400_light900 btn-secondary cursor-pointer rounded px-4 py-2"
                  >
                    Choose File
                  </label>
                  {files && (
                    <div className="mt-2 flex gap-3">
                      {files.map((data, index) => (
                        <div key={index} className="relative inline-block">
                          <Image
                            src="/assets/icons/close.webp"
                            alt="close"
                            width={8}
                            height={8}
                            className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 cursor-pointer"
                            onClick={() => handleRemove(index)}
                          />
                          <Image
                            src={data.url}
                            width={25}
                            height={25}
                            alt={data.name}
                            className="h-full rounded border"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button className="primary-gradient base-semibold min-h-[46px] px-4 py-2 text-white">
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostBox;
