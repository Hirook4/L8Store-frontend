import Image from "next/image";
import Link from "next/link";
import { FooterButton } from "./footer-button";
import { MenuItem } from "@/types/menu-item";

export const Footer = () => {
  const menu: MenuItem[] = [
    { label: "Armors", href: "/categories/armors" },
    { label: "Weapons", href: "/categories/weapons" },
    { label: "Bows", href: "/categories/bows" },
    { label: "Magics", href: "/categories/magics" },
    { label: "Instruments", href: "/categories/instruments" },
  ];

  return (
    <footer>
      <div className="relative  border-t border-orange-500 px-6 py-14 overflow-hidden">
        <Image
          src="/assets/backgrounds/footer.png"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="relative w-full max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/assets/ui/mail-send-line.png"
            alt=""
            width={68}
            height={68}
          />

          <div className="text-center md:text-left">
            <h3 className="font-bold text-white text-2xl mb-6 md:mb-2">
              stay updated on promotions
            </h3>
            <p className="text-neutral-500">
              enter your email and be the first to know
            </p>
          </div>

          <form
            method="POST"
            className="w-full flex-1 flex flex-col gap-4 md:flex-row"
          >
            <input
              type="text"
              className="flex-1 border border-neutral-500 rounded-sm px-6 py-5 outline-0 placeholder-neutral-500"
              placeholder="your best email"
            />
            <input
              type="submit"
              value="send"
              className="w-full md:w-50 px-6 py-5 bg-orange-500 text-white border-0 rounded-sm"
            />
          </form>
        </div>
      </div>

      <div className="bg-black text-white">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-16 md:py-10 border-b border-neutral-500">
            <Link href="/">
              <Image
                src={"/assets/ui/logo-white.png"}
                alt="L8Store"
                width={144}
                height={48}
              />
            </Link>
            <ul className="flex flex-col md:flex-row gap-8 items-center">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:flex-row gap-6 py-16 md:py-10 border-b border-neutral-500">
            <div className="flex-1">
              <h4 className="mb-6 text-center md:text-left">need help?</h4>
              <div className="flex flex-col md:flex-row gap-6">
                <FooterButton
                  href="mailto:leonardohirooka@hotmail.com"
                  icon="/assets/ui/mail-line.png"
                  label="leonardohirooka@hotmail.com"
                />
                <FooterButton
                  href=""
                  icon="/assets/ui/phone-line.png"
                  label="(99) 99999-9999"
                />
              </div>
            </div>
            <div className="">
              <h4 className="mb-6 text-center md:text-left">
                follow us on social medias
              </h4>
              <div className="flex flex-row justify-between gap-6">
                <FooterButton href="" icon="/assets/ui/instagram.png" />
                <FooterButton href="" icon="/assets/ui/linkedIn.png" />
                <FooterButton href="" icon="/assets/ui/facebook.png" />
                <FooterButton href="" icon="/assets/ui/x.png" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-14 justify-between items-center py-16 md:py-10">
            <div className="text-xl text-center md:text-left">
              praise the sun!
            </div>
            <div className="flex justify-center">
              <FooterButton href="/" icon="/assets/ui/arrow-up-line.png" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
