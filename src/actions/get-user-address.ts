"use server";

import { data } from "@/data";
import { Addresses } from "@/types/addresses";

export const getUserAddresses = async (token: string): Promise<Addresses[]> => {
  return data.addresses;
};
