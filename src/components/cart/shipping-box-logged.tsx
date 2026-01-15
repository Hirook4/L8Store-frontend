"use client";

import { getShippingInfo } from "@/actions/get-shipping-info";
import { getUserAddresses } from "@/actions/get-user-address";
import { useAuthStore } from "@/store/auth";
import { useCartStore } from "@/store/cart";
import { Addresses } from "@/types/addresses";
import { useEffect, useState, useTransition } from "react";
import { AddressModal } from "./address-modal";

export const ShippingBoxLogged = () => {
  const { token, hydrated } = useAuthStore((state) => state);
  const cartStore = useCartStore((state) => state);
  const [addresses, setAddresses] = useState<Addresses[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (token) {
      startTransition(() => {
        getUserAddresses(token).then((res) => {
          console.log("Endereços carregados com sucesso!", res);
          setAddresses(res);
        });
      });
    }
  }, [token]);

  useEffect(() => {
    if (cartStore.selectedAddressId) {
      updateShippingInfo();
    }
  }, [cartStore.selectedAddressId]);

  const updateShippingInfo = async () => {
    if (cartStore.shippingZipCode.length > 4) {
      const shippingInfo = await getShippingInfo(cartStore.shippingZipCode);
      if (shippingInfo) {
        cartStore.setShippingCost(shippingInfo.cost);
        cartStore.setShippingDays(shippingInfo.days);
      }
    }
  };

  const handleSelectAddress = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    cartStore.clearShipping();
    const id = parseInt(e.target.value);
    if (id) {
      const address = addresses.find((addr) => addr.id === id);
      if (address) {
        cartStore.setShippingZipcode(address.zipcode);
        cartStore.setSelectedAddressId(id);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <select
        value={cartStore.selectedAddressId ?? ""}
        onChange={handleSelectAddress}
        className="flex-1 px-6 py-5 bg-white border border-gray-200 rounded-sm"
      >
        <option value="">
          {addresses.length === 0 ? "no addresses found" : "select an address"}
        </option>

        {addresses.map((item) => (
          <option key={item.id} value={item.id}>
            {item.street}, {item.number} - {item.city} ({item.zipcode})
          </option>
        ))}
      </select>
      <button
        onClick={() => setModalOpen(true)}
        className="cursor-pointer border-0"
      >
        add new address
      </button>
      <AddressModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
