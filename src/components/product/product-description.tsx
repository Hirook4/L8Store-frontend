"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  text: string;
};

export const ProductDescription = ({ text }: Props) => {
  const [opened, setOpened] = useState(true);

  return (
    <div className="border border-neutral-500 px-7 mt-20">
      <div
        className={`flex justify-between items-center py-6 ${
          opened ? "border-b" : "border-0"
        } border-neutral-500`}
      >
        <div className="text-2xl">product info</div>
        <div
          onClick={() => setOpened(!opened)}
          className="cursor-pointer size-14 border border-neutral-500 flex justify-center items-center rounded-sm"
        >
          <Image
            src={"/assets/ui/arrow-up-s-line.png"}
            alt=""
            width={24}
            height={24}
            className={`transition-all ${opened ? "rotate-0" : "rotate-180"}`}
          />
        </div>
      </div>
      {opened && <div className="text-neutral-500 my-12">{text}</div>}
    </div>
  );
};
