"use client";

import { useAuthStore } from "@/store/auth";
import { useCartStore } from "@/store/cart";
import { ShippingBoxNotLogged } from "./shipping-box-not-logged";
import { ShippingBoxLogged } from "./shipping-box-logged";

export const ShippingBox = () => {
  const { token, hydrated } = useAuthStore((state) => state);
  const cartStore = useCartStore((state) => state);

  /*   if (!hydrated) return null; */

  return (
    <div className="flex flex-col gap-4">
      <div className="text-gray-500">shipping cost and delivery time</div>

      <div>
        {!token && <ShippingBoxNotLogged />}
        {token && <ShippingBoxLogged />}
      </div>

      {cartStore.shippingDays > 0 && (
        <div className="flex items-center bg-white border border-gray-200 rounded-sm p-6">
          <div className="flex-1 ">
            receive thou it within {cartStore.shippingDays}{" "}
            {cartStore.shippingDays != 1 ? "working days" : "working day"}
          </div>
          <div className="text-green-600 font-bold">
            ${cartStore.shippingCost.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};
