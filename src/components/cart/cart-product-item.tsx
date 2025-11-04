import { setCartState } from "@/actions/set-cart-state";
import { useCartStore } from "@/store/cart";
import { CartListItem } from "@/types/cart-list-item";
import Image from "next/image";

type Props = {
  item: CartListItem;
};

export const CartProductItem = ({ item }: Props) => {
  const cartStore = useCartStore((state) => state);

  const updateCookies = async () => {
    const updateCart = useCartStore.getState().cart;
    await setCartState(updateCart);
  };

  /* Função para aumentar quantidade de produtos do carrinho */
  const handlePlus = async () => {
    cartStore.updateQuantity(item.product.id, item.quantity + 1);
    await updateCookies();
  };

  /* Função para reduzir quantidade de produtos do carrinho */
  const handleMinus = async () => {
    if (item.quantity > 1) {
      cartStore.updateQuantity(item.product.id, item.quantity - 1);
      await updateCookies();
    } else {
      await handleRemove();
    }
  };

  /* Função para remover um produto do carrinho */
  const handleRemove = async () => {
    cartStore.removeItem(item.product.id);
    await updateCookies();
  };

  return (
    <div className="flex items-center p-6 gap-4 md:gap-8 border-0 md:border-b border-gray-200">
      <div className="border border-gray-200 p-1">
        <Image
          src={item.product.image}
          alt={item.product.label}
          width={96}
          height={96}
          className="size-24 md:size-16"
        />
      </div>
      <div className="flex-1 flex flex-col md:flex-row justify-between md:items-center">
        <div>
          <div className="text-sm mb-2">{item.product.label}</div>
          <div className="hidden md:block text-xs text-gray-500">
            C0D: {item.product.id}
          </div>
        </div>
        <div>
          <div className="w-30 flex text-gray-500 border border-gray-200 rounded-sm text-center">
            <div
              onClick={handleMinus}
              className="flex cursor-pointer text-2xl justify-center items-center size-10"
            >
              -
            </div>
            <div className="flex text-lg justify-center items-center size-10 border-x border-gray-200">
              {item.quantity}
            </div>
            <div
              onClick={handlePlus}
              className="flex cursor-pointer text-2xl justify-center items-center size-10"
            >
              +
            </div>
          </div>
        </div>
      </div>
      <div className="w-24 md:w-40 flex flex-col md:flex-row justify-between items-end md:items-center">
        <div className="text-lg text-blue-600">
          $ {item.product.price.toFixed(2)}
        </div>
        <div>
          <div className="cursor-pointer size-12 border border-gray-200 rounded-sm flex justify-center items-center">
            <Image
              onClick={handleRemove}
              src={"/assets/ui/trash.png"}
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
