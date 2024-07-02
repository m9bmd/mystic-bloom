import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import CartItems from "./_components/CartItems";

const page = async () => {
  return (
    <div className="mx-auto w-96 space-y-8 pt-10">
      <h2 className="text-lg font-medium">Your cart</h2>
      <CartItems />
      
    </div>
  );
};

export default page;
