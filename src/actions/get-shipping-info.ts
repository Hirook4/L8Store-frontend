"use server";

type ShippingInfoResponse = {
  zipcode: String;
  cost: number;
  days: number;
};
export const getShippingInfo = async (
  zipCode: string
): Promise<ShippingInfoResponse | false> => {
  return { zipcode: "12345", cost: 10, days: 5 };
};
