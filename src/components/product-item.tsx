"use client";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  data: Product;
};

export const ProductItem = ({ data }: Props) => {
  const [liked, setLiked] = useState(data.liked);
  const link = `/product/${data.id}`;
  const toggleLiked = () => {
    setLiked(!liked);
  };
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/assets/backgrounds/footer.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="relative border border-neutral-500 rounded-sm p-6">
        <div className="flex justify-end">
          <div
            onClick={toggleLiked}
            className="cursor-pointer size-12 border border-neutral-500 rounded-sm flex justify-center items-center"
          >
            {liked && (
              <Image
                src={"/assets/ui/heart-fill.png"}
                alt=""
                width={24}
                height={24}
              />
            )}
            {!liked && (
              <Image
                src={"/assets/ui/heart.png"}
                alt=""
                width={24}
                height={24}
              />
            )}
          </div>
        </div>
        <div className="flex justify-center ">
          <Link href={link}>
            <Image
              src={data.image}
              alt={data.label}
              width={200}
              height={200}
              className="max-w-full h-48"
            />
          </Link>
        </div>
        <div className="mt-9 text-lg font-bold">
          <Link href={link}>{data.label}</Link>
        </div>
        <div className="mt-3 text-2xl text-orange-500 font-bold">
          <Link href={link}>R$ {data.price.toFixed(2)}</Link>
        </div>
        <div className="mt-5 text-neutral-500">up to 10x on the scroll</div>
      </div>
    </div>
  );
};
