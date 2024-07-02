"use client";
import { useCartContext } from "@/components/cart/CartContextProvider";
import TotalCartAmount from "@/components/cart/TotalCartAmout";

import CartItem from "@/components/Navbar/CartItem";
import { Button } from "@/components/ui/button";
import { navigate } from "@/lib/navigate";
import React from "react";

const CartItems = () => {
  const { cart } = useCartContext();
  const onProceedButtonClick = async () => {
    await navigate("/checkout");
  };
  return (
    <div>
      {cart.length === 0 ? (
        <div className="flex items-center">
          <p>Your cart is empty</p>
          <p>🌸</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex max-w-96 flex-col gap-4">
            {cart.map((cartItem, index) => (
              <CartItem key={index} cartItem={cartItem} />
            ))}
          </div>
          <div className="space-y-4">
            <p className="font-medium">Order summary</p>
            <TotalCartAmount />
          </div>
          <Button className="w-full" size={"lg"} onClick={onProceedButtonClick}>
            proceed to buy {`(${cart.length})`} items
          </Button>
        </div>
      )}
    </div>
  );
};

// // export default CartItems;
// import React from 'react'

// const CartItems = () => {
//   return (
//     <div>CartItems</div>
//   )
// }

export default CartItems;
