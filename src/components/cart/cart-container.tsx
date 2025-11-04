"use client";

import { useCartStore } from "@/store/cart";
import { CartListItem } from "@/types/cart-list-item";
import Image from "next/image";
import { useEffect } from "react";
import { CartProductList } from "./cart-product-list";

type Props = {
  initialCartProducts: CartListItem[];
  initialSubtotal: number;
};

export const CartContainer = ({
  initialCartProducts,
  initialSubtotal,
}: Props) => {
  const cartStore = useCartStore((state) => state);

  useEffect(() => {
    cartStore.clearShipping();
  }, []);

  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src={"/assets/ui/shopping-bag-black.png"}
          alt=""
          width={24}
          height={24}
        />
        <div className="text-lg">
          your wagon{" "}
          <span className="text-gray-500">
            ({cartStore.cart.length} item{cartStore.cart.length > 1 ? "s" : ""}){" "}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mt-9">
        <div className="flex-1">
          <CartProductList initialList={initialCartProducts} />
        </div>
        <div className="flex-1 md:max-w-sm"> info</div>
      </div>
    </div>
  );
};
