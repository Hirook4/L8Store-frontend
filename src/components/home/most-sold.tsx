import { ProductList } from "../product-list";
import { getProducts } from "@/actions/get-products";

/* Requisição dos produtos */
export const MostSold = async () => {
  const products = await getProducts({ orderBy: "selling", limit: 4 });

  return (
    <div className="mt-10">
      <h2 className="text-2xl text-center md:text-left">Most Sold</h2>
      <p className="text-neutral-500 text-center md:text-left">
        our best-sellers and popular products
      </p>
      <div className="mt-9">
        <ProductList list={products} />
      </div>
    </div>
  );
};
