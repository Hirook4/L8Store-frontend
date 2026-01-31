import { getBanners } from "@/actions/get-banners";
import { Banners } from "@/components/home/banners";
import { MostSold } from "@/components/home/most-sold";
import { MostViewed } from "@/components/home/most-viewed";
import { ProductListSkeleton } from "@/components/home/product-list-skeleton";
import Image from "next/image";
import { Suspense } from "react";
export default async function Page() {
  const banners = await getBanners();
  return (
    <div className="pb-30">
      <Banners list={banners} />
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-12">
        <div className="flex flex-1 py-6 border border-orange-500 rounded-sm">
          <div className="w-32 border-r border-neutral-500 flex justify-center items-center">
            <Image
              src={"/assets/ui/chariot.png"}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="flex-1 pl-8">
            <div className="font-bold text-xl">Free Shipping</div>
            <div className="text-neutral-500">to the entire kingdom</div>
          </div>
        </div>
        <div className="flex flex-1 py-6 border border-orange-500 rounded-sm">
          <div className="w-32 border-r border-neutral-500 flex justify-center items-center">
            <Image src={"/assets/ui/money.png"} alt="" width={40} height={40} />
          </div>
          <div className="flex-1 pl-8">
            <div className="font-bold text-xl ">Best Prices</div>
            <div className="text-neutral-500">fair prices (mostly)</div>
          </div>
        </div>
        <div className="flex flex-1 py-6 border border-orange-500 rounded-sm">
          <div className="w-32 border-r border-neutral-500 flex justify-center items-center">
            <Image
              src={"/assets/ui/exchange.png"}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="flex-1 pl-8">
            <div className="font-bold text-xl">Free Exchange</div>
            <div className="text-neutral-500">simple & fast</div>
          </div>
        </div>
      </div>
      {/* Enquanto o componente não carregar o Skeleton vai ser exibido */}
      <Suspense fallback={<ProductListSkeleton />}>
        <MostViewed />
      </Suspense>
      <Suspense fallback={<ProductListSkeleton />}>
        <MostSold />
      </Suspense>
    </div>
  );
}
