import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { FlowerIcon, ShoppingBagIcon } from "lucide-react";
import { useCartContext } from "../cart/CartContextProvider";
import { Button, buttonVariants } from "../ui/button";
import CartItem from "./CartItem";
import Link from "next/link";
import { navigate } from "@/lib/navigate";
import TotalCartAmout from "../cart/TotalCartAmout";

const Cart = () => {
  const { cart } = useCartContext();
  const [open, setOpen] = useState(false);
  // console.log(cart);
  async function onCheckoutSubmit() {
    await navigate("/checkout");
    setOpen(false);
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <span className="relative">
          <ShoppingBagIcon className="h-6 w-6 text-background" />
          {cart.length > 0 && (
            <span className="absolute bottom-0 right-0 flex h-2 w-2 items-center justify-center rounded-full bg-background p-2 text-sm">
              {cart.length}
            </span>
          )}
        </span>
      </SheetTrigger>
      <SheetContent className="w-[90%] pt-16">
        {cart.length === 0 ? (
          <SheetHeader className="flex h-full items-center justify-center pt-0">
            <SheetTitle>Your cart is Empty</SheetTitle>
            <SheetDescription className="flex flex-col items-center justify-center gap-2">
              fill it with flowers
              <FlowerIcon className="h-6 w-6 text-pink-400" />
            </SheetDescription>
          </SheetHeader>
        ) : (
          <div className="flex h-full w-full flex-col gap-4 rounded-md p-4">
            <p className="flex items-baseline gap-2 text-lg font-medium">
              Your cart{" "}
            </p>
            {cart.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div>
              <TotalCartAmout/>
            </div>
            <Button onClick={() => onCheckoutSubmit()} className="w-full">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
