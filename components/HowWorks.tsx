

"use client";

import Image from "next/image";
import { Title } from "./Atoms";
import config from "@/config/general";
import { useState } from "react";
import ImageModal from "./Atoms/ImageModal";

const HowWorks = () => {
  const [activeTitle, setActiveTitle] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mb-24">
      <Title label="How it works" />
      <div className="flex xl:flex-row flex-col gap-8 justify-center">
      <div onClick={() => setIsModalOpen(true)} className="cursor-pointer">
        <Image
          src="/article details.png"
          alt="executive summary"
          width={460}
          height={330}
          className="shadow-xl rounded-sm xl:max-w-[648px] w-18/24 h-max"
        />
      </div>
      <ImageModal
        isOpen={isModalOpen}
        src="/article details.png"
        alt="Enlarged hero image"
        onClose={() => setIsModalOpen(false)}
      />

        <div className="xl:order-2 order-1 flex flex-col gap-5">
          {config.contents.howWorks.map((item, index) => {
            return (
              <div key={index} onClick={() => setActiveTitle(index)}>
                <div className="flex items-center gap-2 cursor-pointer">
                  <h4 className="flex-1 font-semibold text-lg text-black">
                    {index + 1}. {item.title}
                  </h4>
                  <Image alt="" src={"/down.svg"} width={12} height={6} />
                </div>
                {activeTitle === index && (
                  <p className="text-base text-activeButton w-full md:w-[550px] pt-4 mb-2">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
