"use client";
import { PostFilters } from "@/constants/filters";
import React from "react";
import { Button } from "../ui/button";

const HomeFilters = () => {
  const active = "all_posts";
  return (
    <div className="mt-2 flex flex-wrap gap-3 max-md:hidden">
      {PostFilters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${active === filter.value ? "bg-primary-100 text-primary-500" : "bg-light-800 text-light-500 hover:bg-light-900 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"}`}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
