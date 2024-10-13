import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  data: {
    id: number;
    image: string;
    title: string;
  }[];
  title: string;
  paragraph: string;
  url: string;
}

const ImageSlider = ({ title, paragraph, data, url }: Props) => {
  const handleLeft = () => {
    const container = document.getElementById("scroll-container");
    if (container) {
      container.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleRight = () => {
    const container = document.getElementById("scroll-container");
    if (container) {
      container.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  return (
    <div className="background-light800_darkgradient relative mt-6 w-full rounded-[10px] p-5">
      <h2 className="text-dark200_light900 font-inter text-xl font-semibold">
        {title}
      </h2>
      <p className="text-dark400_light700 text-md mt-1 font-inter max-sm:text-[12px] sm:text-[14px]">
        {paragraph}
      </p>

      <div className="relative mx-2 mt-4 flex items-center">
        {/* Left Arrow */}

        <Image
          src="/assets/icons/leftArrow.png"
          alt="left"
          height={23}
          width={23}
          className="absolute -left-6 z-10 flex cursor-pointer justify-center "
          onClick={handleLeft}
        />

        {/* Scrollable image row */}
        <div
          id="scroll-container"
          className="no-scrollbar flex space-x-4 overflow-x-auto scroll-smooth p-4 max-sm:w-[370px] sm:w-[550px] lg:w-full"
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="background-light-custom w-[150px] shrink-0 rounded-md border-2 p-4 max-sm:w-[80px] sm:w-[120px]"
            >
              <Link href={`${url}/${item.id}`}>
                <Image
                  src={item.image}
                  alt={`${item.title} logo`}
                  height={64}
                  width={64}
                  className="mx-auto mb-3 cursor-pointer rounded-full border object-contain "
                />
              </Link>

              <h3 className="text-dark300_light800 text-md text-center font-inter font-semibold max-sm:text-[10px] sm:text-[14px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <Image
          src="/assets/icons/rightArrow.png"
          alt="left"
          height={28}
          width={28}
          className="absolute -right-6 z-10 flex cursor-pointer justify-center"
          onClick={handleRight}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
