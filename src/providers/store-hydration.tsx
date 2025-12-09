"use client";

import { getAuthState } from "@/actions/get-auth-state";
import { getCartState } from "@/actions/get-cart-state";
import { useAuthStore } from "@/store/auth";
import { useCartStore } from "@/store/cart";
import { use, useEffect } from "react";

export const StoreHydration = () => {
  const authStore = useAuthStore((state) => state);
  useEffect(() => {
    /* Hydrate auth state */
    getAuthState().then(({ token }) => {
      if (token) {
        authStore.setToken(token);
      } else {
        authStore.setHydrated(true);
      }
    });

    /* Hydrate cart state */
    getCartState().then(({ cart }) => {
      if (cart.length > 0) {
        useCartStore.setState({ cart });
      }
    });
  }, []);
  return null;
};
