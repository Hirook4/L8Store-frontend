import { link } from "fs";

export const data = {
  banners: [
    { img: "/assets/banners/banner-1.png", link: "" },
    { img: "/assets/banners/banner-2.png", link: "" },
    { img: "/assets/banners/banner-3.png", link: "" },
    { img: "/assets/banners/banner-4.png", link: "" },
  ],
  products: [
    {
      id: 1,
      label: "item1",
      image: "/assets/products/adventurer-tunic.png",
      price: 49.9,
      liked: false,
    },
    {
      id: 2,
      label: "item2",
      image: "/assets/products/fine-cuirass.png",
      price: 49.9,
      liked: false,
    },
    {
      id: 3,
      label: "item3",
      image: "/assets/products/crusader-armor.png",
      price: 49.9,
      liked: false,
    },
    {
      id: 4,
      label: "item4",
      image: "/assets/products/oracle-robe.png",
      price: 49.9,
      liked: false,
    },
  ],
  product: {
    id: 1,
    label: "item1",
    images: [
      "/assets/products/adventurer-tunic.png",
      "/assets/products/oracle-robe.png",
      "/assets/products/adventurer-tunic.png",
    ],
    price: 49.9,
    liked: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  addresses: [
    {
      id: 1,
      zipcode: "12345",
      street: "Rua 1",
      number: "01",
      city: "Anor Londo",
      state: "Lordran",
      country: "Brazil",
      complement: "Apt 1",
    },
    {
      id: 2,
      zipcode: "12666",
      street: "Rua 2",
      number: "01",
      city: "Anor Londo",
      state: "Lordran",
      country: "Brazil",
      complement: "Apt 1",
    },
    {
      id: 3,
      zipcode: "18885",
      street: "Rua 3",
      number: "01",
      city: "Anor Londo",
      state: "Lordran",
      country: "Brazil",
      complement: "Apt 1",
    },
  ],
};
