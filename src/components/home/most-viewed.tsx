import { ProductList } from "../product-list";
import { getProducts } from "@/actions/get-products";

/* Requisição dos produtos */
export const MostViewed = async () => {
  const products = await getProducts({ orderBy: "views", limit: 4 });
  return (
    <div className="mt-10">
      <h2 className="text-2xl text-center md:text-left">Most Viewed</h2>
      <p className="text-neutral-500 text-center md:text-left">
        most viewed and wished products
      </p>
      <div className="mt-9">
        <ProductList list={products} />
      </div>
    </div>
  );
};
