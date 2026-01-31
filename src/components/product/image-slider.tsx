"use client";

import Image from "next/image";
import { useState } from "react";

type Props = { images: string[] };

export const ImageSlider = ({ images }: Props) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index: number) => () => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="max-w-sm mx-auto md:mx-0">
      <div className="relative overflow-hidden">
        <Image
          src="/assets/backgrounds/footer.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="relative border border-neutral-500 p-14">
          <Image
            src={images[selectedImageIndex]}
            alt=""
            width={380}
            height={380}
            className="max-w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-8">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden">
            <Image
              src="/assets/backgrounds/footer.png"
              alt=""
              fill
              priority
              className="object-cover"
            />
            <div
              onClick={handleThumbnailClick(index)}
              className={` relative cursor-pointer border p-3 ${
                index === selectedImageIndex
                  ? "border-orange-500"
                  : "border-neutral-500"
              }`}
            >
              <Image src={image} alt="" width={120} height={120} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
