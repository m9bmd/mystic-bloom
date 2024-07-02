"use client";

import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";

type QuantityButtonProps = {
  productCount: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
};

const QuantityButton = ({
  productCount,
  incrementQuantity,
  decrementQuantity,
}: QuantityButtonProps) => {
  return (
    <div className="flex items-center gap-6">
      <p className="font-medium">Quantity: </p>
      <div className="flex items-center gap-4">
        <Button onClick={decrementQuantity} variant={"outline"} size={"icon"}>
          <MinusIcon />
        </Button>
        <div className="text-lg font-medium">{productCount}</div>
        <Button onClick={incrementQuantity} variant={"outline"} size={"icon"}>
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default QuantityButton;
