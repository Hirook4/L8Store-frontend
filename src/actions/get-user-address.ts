"use server";

import { api } from "@/libs/axios";
import { Addresses } from "@/types/addresses";

export const getUserAddresses = async (token: string): Promise<Addresses[]> => {
  try {
    const response = await api.get("/user/addresses", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.status === 200) {
      return response.data.addresses as Addresses[];
    }
  } catch {}
  return [];
};
