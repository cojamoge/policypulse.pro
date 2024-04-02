

"use client"

// Assuming this file is located at components/Hero.js
import React, { useMemo, useState } from "react";
import Image from "@/node_modules/next/image";
import config from "@/config/general";
import Form from "./Form";
import ImageModal from "./Atoms/ImageModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const title = useMemo(() => {
    const findIndex = config.contents.title.search(config.contents.markOfTitle);

    if (findIndex >= 0) {
      return {
        text: config.contents.title.slice(0, findIndex),
        mark: config.contents.title.slice(
          findIndex,
          findIndex + config.contents.markOfTitle.length
        ),
      };
    }
    return { text: config.contents.title, mark: null };
  }, [config.contents]);

  return (
    <section className="xl:flex-row flex-col flex items-center justify-center gap-7 sm:gap-14">
      <div className="xl:w-5/12 w-11/12 xl:my-40 mt-10 flex flex-col gap-6">
        <h1 className="min-w-[73%] sm:min-w-[300px] xl:min-w-[490px] xl:w-10/12 w-8/12 font-normal text-2xl sm:text-4xl text-black relative z-40">
          {title.text}
          {title.mark && (
            <span className="bg-primary whitespace-nowrap inline-block ml-1 absolute px-2 w-[fit-content] bottom-[12px] sm:bottom-[12px] leading-[8px] text-black rounded h-2 sm:h-3">
              {title.mark}
            </span>
          )}
        </h1>
        <span className="font-light text-lg sm:text-2xl text-black">
          {config.contents.description}
        </span>
        <Form />
      </div>
      <div onClick={() => setIsModalOpen(true)} className="cursor-pointer">
        <Image
          src="/main page.png"
          alt="hero"
          width={648}
          height={500}
          className="shadow-xl rounded-sm xl:max-w-[548px] w-18/24 h-max"
        />
      </div>
      <ImageModal
        isOpen={isModalOpen}
        src="/main page.png"
        alt="Enlarged hero image"
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
