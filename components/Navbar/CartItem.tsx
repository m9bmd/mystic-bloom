import React from "react";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { CartItemType, useCartContext } from "../cart/CartContextProvider";
import { subQuantityDb } from "@/lib/actions/cartActions";

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
  const { deleteFromCart, addQuantity, subQuantity } = useCartContext();
  // const {deleteFromCart} = useCartContext()
  // console.log("cartItem",cartItem)
  return (
    <div
      key={cartItem.id}
      className="flex h-44 w-full gap-4 rounded-md border p-2"
    >
      <div className="h-full w-full">
        <img
          className="max-h-full rounded-md"
          src={cartItem.product.images[0].url}
          alt=""
        />
      </div>
      <div className="flex w-full flex-col justify-center gap-2">
        <p className="text-sm font-medium">{cartItem.product.name}</p>
        <p className="">₹{cartItem.price}</p>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => subQuantity({ cartItemId: cartItem.id })}
            size={"icon"}
            variant={"ghost"}
          >
            <MinusIcon />
          </Button>
          <p className="font-medium">{cartItem.quantity}</p>
          <Button
            onClick={() => addQuantity({ cartItemId: cartItem.id })}
            size={"icon"}
            variant={"ghost"}
          >
            <PlusIcon />
          </Button>
        </div>
        <div className="">
          <Button
            onClick={() => deleteFromCart(cartItem.id)}
            className="border-rose-400 text-rose-600 hover:bg-rose-100 hover:text-rose-600"
            variant={"outline"}
          >
            <TrashIcon className="h-4 w-4 text-rose-400" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
