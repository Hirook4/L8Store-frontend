import { getRelatedProducts } from "@/actions/get-related-products";
import { ProductList } from "../product-list";

type Props = { id: number };

export const RelatedProducts = async ({ id }: Props) => {
  const products = await getRelatedProducts(id);
  return (
    <div className="mt-10">
      <h3 className="text-2xl">maybe you like</h3>
      <div className="mt-9">
        <ProductList list={products} />
      </div>
    </div>
  );
};
