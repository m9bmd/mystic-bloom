"use client";

import { Button } from "@/components/ui/button";
import { TableTopFormData } from "@/lib/types";

import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { ToastAction } from "@/components/ui/toast";
import { navigate } from "@/lib/navigate";
import { addToCartDB, getUserCart } from "@/lib/actions/cartActions";
import { useCartContext } from "@/components/cart/CartContextProvider";
const AddToCartButton = ({ product }: { product: TableTopFormData }) => {
  const { toast } = useToast();
  const { isAuthenticated, user } = useKindeBrowserClient();
  const { setCart, addToCart } = useCartContext();

  async function addToCartToast(productId: string) {
    console.log(user);
    if (!user) {
      toast({
        title: "Oops..",
        description: "You need to login to add product to cart",
        action: (
          <ToastAction
            onClick={() => navigate("/api/auth/login")}
            altText="Try again"
          >
            sign in
          </ToastAction>
        ),
      });
    } else if (isAuthenticated) {
      toast({
        title: "successfully added to the cart 🎉🎉",
      });
      await addToCart(productId);
    }
  }
  return (
    <div className="space-y-6">
      <Button
        onClick={() => addToCartToast(product.id)}
        className="w-full"
        size={"lg"}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
