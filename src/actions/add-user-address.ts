"use server";

import { api } from "@/libs/axios";
import { Addresses } from "@/types/addresses";
import { getUserAddresses } from "./get-user-address";

export const addUserAddress = async (
  token: string,
  address: Addresses,
): Promise<Addresses[]> => {
  try {
    const response = await api.post(
      "/user/addresses",
      { ...address },
      { headers: { Authorization: `Bearer ${token}` } },
    );
    if (response.status === 201) {
      return getUserAddresses(token);
    }
  } catch {}
  return [];
};
