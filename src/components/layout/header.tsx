/* Para ter interação do usuário */
"use client";

import Image from "next/image";
import { HeaderIcon } from "./header-icon";
import Link from "next/link";
import { useState } from "react";
import { HeaderSearch } from "./header-search";

type MenuItem = {
  label: string;
  href: string;
};

export function Header() {
  const menu: MenuItem[] = [
    { label: "Armors", href: "/categories/armors" },
    { label: "Weapons", href: "/categories/weapons" },
    { label: "Bows", href: "/categories/bows" },
    { label: "Magics", href: "/categories/magics" },
    { label: "Instruments", href: "/categories/instruments" },
  ];

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header className=" border-b border-orange-500">
      <div className="bg-black text-white text-center p-3">
        <strong>FREE SHIPPING</strong> to the entire Kingdom (except for Lost
        Izalith) on purchases over $199,00. <strong>ENJOY!</strong>
      </div>
      <div className="relative overflow-hidden">
        <Image
          src="/assets/backgrounds/footer.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="relative">
          <div className="w-full max-w-6xl mx-auto px-6 py-6">
            <div className="flex items-center">
              <div className="w-96">
                <Link href={"/"}>
                  <Image
                    src="/assets/ui/logo.png"
                    alt="L8Store"
                    width={250}
                    height={50}
                  />
                </Link>
              </div>
              <div className="flex-1">
                <div className="md:flex hidden w-full items-center px-6 gap-6">
                  <div className="flex-1">
                    <ul className="flex font-medium text-neutral-300">
                      {menu.map((item) => (
                        <li key={item.label} className="px-3">
                          <Link key={item.label} href={item.href}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-80">
                    <HeaderSearch />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href={"/orders"}>
                  <HeaderIcon src="/assets/ui/user-line.png" alt="Profile" />
                </Link>
                <Link href={"/cart"}>
                  <HeaderIcon src="/assets/ui/bag-white.png" alt="Profile" />
                </Link>
                {/* Oculto na versão desktop */}
                <div
                  className="md:hidden"
                  onClick={() => setMenuOpened(!menuOpened)}
                >
                  <HeaderIcon
                    src="/assets/ui/menu-black.png"
                    alt="Menu"
                    selected={menuOpened}
                    srcSelected="/assets/ui/menu-white.png"
                  />
                </div>
              </div>
            </div>
          </div>
          {menuOpened && (
            <div className="md:hidden pb-6">
              {menu.map((item) => (
                <Link key={item.label} href={item.href}>
                  <div className="p-6 border-b border-orange-500 flex items-center justify-between">
                    <div className="font-medium text-lg text-neutral-300">
                      {item.label}
                    </div>
                    <Image
                      src={"/assets/ui/arrow-up-right.png"}
                      alt="Select Category"
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
          <div className="md:hidden pt-0 p-6">
            <HeaderSearch />
          </div>
        </div>
      </div>
    </header>
  );
}
