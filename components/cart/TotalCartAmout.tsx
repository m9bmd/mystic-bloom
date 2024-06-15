import React, { useEffect, useState } from "react";
import { useCartContext } from "./CartContextProvider";

const TotalCartAmount = ({ className }: { className?: string }) => {
  const { cart } = useCartContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = cart.reduce(
      (sum, cartItem) =>
        sum + parseFloat(cartItem.discountPrice) * cartItem.quantity,
      0,
    );
    setTotal(totalAmount);
  }, [cart]);

  return (
    <div className="">
      <p className=" flex justify-between">
        Total <span className="font-medium">{total.toFixed(2)} </span>
      </p>
    </div>
  );
};

export default TotalCartAmount;
