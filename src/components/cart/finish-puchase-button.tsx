"use client";

import { clearCartCookie } from "@/actions/clear-cart-cookie";
import { finishCart } from "@/actions/finish-cart";
import { useAuthStore } from "@/store/auth";
import { useCartStore } from "@/store/cart";
import Link from "next/link";
import { redirect } from "next/navigation";

export const FinishPurchaseButton = () => {
  const { token, hydrated } = useAuthStore((state) => state);
  const cartStore = useCartStore((state) => state);

  const handleFinishButton = async () => {
    if (!token || !cartStore.selectedAddressId) {
      return;
    }

    const sessionUrl = await finishCart(
      token,
      cartStore.selectedAddressId,
      cartStore.cart,
    );

    if (sessionUrl) {
      await clearCartCookie();
      cartStore.clearCart();
      redirect(sessionUrl);
    } else {
      alert("Failed to Create Checkout Session.");
    }
  };

  if (!hydrated) {
    return null;
  }

  if (!token) {
    return (
      <Link
        href={"/login"}
        className="block w-full text-center text-white  px-6 py-5 bg-orange-500  border-0 rounded-sm"
      >
        log in to finish purchase
      </Link>
    );
  }

  return (
    <button
      disabled={cartStore.selectedAddressId ? false : true}
      onCanPlay={handleFinishButton}
      className="cursor-pointer w-full text-center text-white  px-6 py-5 bg-orange-500  border-0 rounded-sm disabled:opacity-50"
    >
      finish purchase
    </button>
  );
};
