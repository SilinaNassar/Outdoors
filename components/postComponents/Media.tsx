"use client";
import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Button } from "../ui/button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  media: {
    type: string;
    url: string;
    alt: string;
  }[];
}

const Media = ({ media }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      {/* Media (Images/Videos) */}
      <div className="mx-auto mb-4 flex max-w-[700px] justify-center ">
        {media.length > 0 && (
          <div className="flex flex-col sm:flex-row">
            {/* First Image: Large on the left */}
            {media[0].type === "image" && (
              <div className="shrink-0">
                <Image
                  src={media[0].url}
                  alt={media[0].alt}
                  width={400}
                  height={500}
                  className="flex h-full cursor-pointer rounded-lg object-contain"
                  onClick={openModal}
                />
              </div>
            )}
            {media[0].type === "video" && (
              <div className="shrink-0">
                <video
                  src={media[0].url}
                  className="flex max-w-[500px] cursor-pointer rounded-lg object-contain"
                  onClick={openModal}
                />
              </div>
            )}

            {/* Column of Second, Third, and potentially Fourth (blurred) Images */}
            {media.length > 1 && (
              <div className=" ml-2 flex flex-col  gap-2 max-sm:max-w-full max-sm:flex-row">
                {media.slice(1, 4).map((item, index) => {
                  // If it's the third item (index 2 in this case) and there are more than 4 images, show it blurred with an overlay
                  if (index === 2 && media.length > 4) {
                    return (
                      <div
                        key={index}
                        className="relative flex h-[80px] shrink-0"
                      >
                        {item.type === "image" && (
                          <Image
                            src={item.url}
                            alt={item.alt}
                            width={250}
                            height={150}
                            className="size-full rounded-lg object-contain blur-sm "
                          />
                        )}
                        {item.type === "video" && (
                          <video
                            className="size-full rounded-lg object-contain blur-sm"
                            src={item.url}
                          />
                        )}
                        {/* Overlay for remaining images */}
                        <div
                          className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-lg bg-black bg-opacity-50 font-bold text-white"
                          onClick={() => openModal()}
                        >
                          +{media.length - 3}
                        </div>
                      </div>
                    );
                  } else {
                    // Regular image in the column
                    return (
                      <div
                        key={index}
                        className="flex w-full items-center justify-center"
                      >
                        {item.type === "image" && (
                          <Image
                            src={item.url}
                            alt={item.alt}
                            width={250}
                            height={150}
                            className="relative w-full cursor-pointer rounded-lg object-cover"
                            onClick={openModal}
                          />
                        )}
                        {item.type === "video" && (
                          <video
                            className="h-full cursor-pointer rounded-lg object-cover"
                            onClick={openModal}
                            src={item.url}
                          />
                        )}
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm ">
            <div className="relative w-full max-w-full md:w-3/4 lg:w-1/2">
              <Button
                onClick={closeModal}
                className="text-light400_light500  absolute right-2 top-2 z-50 cursor-pointer text-lg font-bold"
              >
                &times;
              </Button>

              <Swiper
                className="swiper-container"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {media.map((item, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    {item.type === "image" ? (
                      <Image
                        src={item.url}
                        alt={item.alt}
                        width={400}
                        height={300}
                        className="rounded-lg object-cover"
                      />
                    ) : (
                      <video
                        controls
                        className="rounded-lg object-cover"
                        src={item.url}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Media;
