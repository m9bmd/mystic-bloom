"use client";
import { useCartContext } from "@/components/cart/CartContextProvider";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";

type QuantityButtonProps = {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
};


const QuantityButton = ({quantity,incrementQuantity,decrementQuantity}: QuantityButtonProps) => {

  return (
    <div className="flex items-center gap-6">
      <p className="font-medium">Quantity: </p>
      <div className="flex items-center gap-4">
        <Button onClick={decrementQuantity} variant={"outline"} size={"icon"}>
          <MinusIcon />
        </Button>
        <div className="text-lg font-medium">{quantity}</div>
        <Button onClick={incrementQuantity} variant={"outline"} size={"icon"}>
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default QuantityButton;
