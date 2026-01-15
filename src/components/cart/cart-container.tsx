"use client";

import { useCartStore } from "@/store/cart";
import { CartListItem } from "@/types/cart-list-item";
import Image from "next/image";
import { useEffect } from "react";
import { CartProductList } from "./cart-product-list";
import { FinishPurchaseButton } from "./finish-puchase-button";
import Link from "next/link";
import { ShippingBox } from "./shipping-box";

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

  let total = initialSubtotal + cartStore.shippingCost;

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
        <div className="flex-1 flex flex-col gap-4 md:max-w-sm">
          <ShippingBox />
          <div className="bg-white border border-gray-200 rounded-sm">
            <div className="border-b border-gray-200 p-6">
              <div className="flex justify-between items-center mb-5">
                <div>subtotal</div>
                <div className="font-bold">${initialSubtotal.toFixed(2)}</div>
              </div>
              <div className="flex justify-between items-center mb-5 ">
                <div>shipping</div>
                <div className="font-bold">
                  $ {cartStore.shippingCost.toFixed(2)}
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <div>total</div>
                <div className="font-bold text-2xl text-blue-600">
                  $ {total.toFixed(2)}
                </div>
              </div>
              <div className="text-right text-xs text-gray-500 mb-3">
                up to 10x on the scroll
              </div>
              <FinishPurchaseButton />
              <div className="text-center mt-6">
                <Link href={"/"} className="text-xs text-gray-500">
                  purchase more goods
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
