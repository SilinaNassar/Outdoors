"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Media from "../postComponents/Media";

interface Reactions {
  [key: string]: number;
}

interface Props {
  id: number;
  author: {
    name: string;
    image: string;
  };
  content: string;
  media: {
    type: string;
    url: string;
    alt: string;
  }[];
  likes: number;
  comments: {
    user: {
      id: number;
      name: string;
      image: string;
    };
    comment: string;
  }[];
  reactions: Reactions;
  postedAt: string;
  tags: string[];
  visibility: string;
}

const PostCard = ({
  id,
  author,
  content,
  media,
  likes,
  comments,
  reactions,
  postedAt,
  tags,
}: Props) => {
  return (
    <div className="card-wrapper background-light800_darkgradient rounded-[10px] p-9 sm:px-11">
      <div className="mb-4 flex items-center">
        <Link href={`/profile/${id}`} className="flex">
          <Image
            src={author.image}
            alt={author.name}
            width={40}
            height={40}
            className="mr-2 rounded-full dark:invert"
          />
          <div>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1 font-inter">
              {author.name}
            </h3>
            <p className=" subtle-regular text-dark400_light700 line-clamp-1 flex font-inter ">
              {new Date(postedAt).toLocaleString()}
            </p>
          </div>
        </Link>
      </div>
      <p className="text-dark500_light700 mb-4 font-inter">{content}</p>

      <Media media={media} />

      {/* Reactions */}
      <div className="mb-4 flex gap-2">
        {Object.entries(reactions).map(([key, value]) => (
          <div key={key} className="flex items-center">
            <span className="text-darkblue_lightgray font-semibold">
              {value}
            </span>
            <span className="text-darkblue_lightgray ">{key}</span>
          </div>
        ))}
      </div>

      {/* Likes */}
      <p className="text-dark200_light900 mb-2 font-spaceGrotesk font-semibold">
        {likes} Likes
      </p>

      {/* Comments */}
      <div>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="flex items-start border-b py-2 ">
              <Link href={`/profile/${comment.user.id}`} className="flex">
                <Image
                  src={comment.user.image}
                  alt={comment.user.name}
                  width={30}
                  height={30}
                  className="mr-2 rounded-full dark:invert"
                />
              </Link>
              <div>
                <p className="text-dark200_light900 mb-1  font-inter font-medium">
                  {comment.user.name}
                </p>
                <p className="text-darkblue_lightgray  mb-2 font-inter text-gray-700">
                  {comment.comment}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-4">
          {tags.map((tag, index) => (
            <span key={index} className="mr-2 text-blue-500">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard;
