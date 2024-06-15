"use client";
import {
  CartItemType,
  useCartContext,
} from "@/components/cart/CartContextProvider";
import { Button } from "@/components/ui/button";
import { TableTopFormData } from "@/lib/types";
import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";
import QuantityButton from "./QuantityButton";
import { useToast } from "@/components/ui/use-toast";

const AddToCartButton = ({ product }: { product: TableTopFormData }) => {
  const { toast } = useToast();
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  function incrementQuantity() {
    return setQuantity((prev) => prev + 1);
  }
  function decrementQuantity() {
    if (quantity !== 1) {
      return setQuantity((prev) => prev - 1);
    }
  }
  function addToCartToast(product: CartItemType) {
    toast({ title: "🎉Successfully added to the cart🎉" });
    addToCart({ ...product, quantity });
  }
  return (
    <div className="space-y-6">
      <QuantityButton
        quantity={quantity}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <Button
        onClick={() => addToCartToast({ ...product, quantity })}
        className="w-full"
        size={"lg"}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
