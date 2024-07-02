import React from "react";
import CheckoutForm from "./_components/CheckoutForm";
import TotalCartAmount from "@/components/cart/TotalCartAmout";

const page = async () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Delivery</h2>
      <div>
        <CheckoutForm />
      </div>
    </div>
  );
};

export default page;
