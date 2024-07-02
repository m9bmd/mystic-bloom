"use client"
import React, { useEffect, useState } from "react";
import { useCartContext } from "./CartContextProvider";

const TotalCartAmount = () => {
  const { cart } = useCartContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = cart.reduce((sum, cartItem) => {
      const price =
        typeof cartItem.price === "string"
          ? parseFloat(cartItem.price)
          : cartItem.price;
      return sum + price * (cartItem.quantity || 1);
    }, 0);

    setTotal(totalAmount);
  }, [cart]);

  return (
    <div className="flex flex-col  gap-2">
      <div className="flex flex-col rounded-lg gap-2">
        {cart.map((cartItem) => (
          <div key={cartItem.id} className="flex gap-2 w-full">
            <p> {cartItem.product.name}</p>
            <p>x</p>
            <p>{cartItem.quantity}</p>
            <p className="flex-1 text-end">₹{cartItem.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between ">
        <p> Total Cart Amount: </p>
        <span className="flex items-center justify-center gap-0.5 font-medium">
          <span className="text-xs">₹</span>
          {total}
        </span>
      </div>
    </div>
  );
};

export default TotalCartAmount;
