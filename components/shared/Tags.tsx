import React from "react";
import { Button } from "../ui/button";

interface Props {
  items: string[];
}

const Tags = ({ items }: Props) => {
  return (
    <div className="mt-2 flex flex-wrap gap-3 ">
      {items.map((item, index) => (
        <Button
          key={index}
          className={`body-medium text-inter rounded-lg bg-primary-500 px-6 py-3 capitalize text-white shadow-none`}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Tags;
