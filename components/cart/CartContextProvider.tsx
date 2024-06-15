"use client";
import { TableTopFormData } from "@/lib/types";
import React, { createContext, ReactNode, useContext, useState } from "react";
import CartItem from "../Navbar/CartItem";

export type CartItemType = TableTopFormData & {
  quantity: number;
};

type CartContextType = {
  cart: CartItemType[];
  addToCart: (product: CartItemType) => void;
  removeFromCart: (id: string) => void;
  addQuantity: (id: string) => void;
  subQuantity: (id: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const addToCart = (product: CartItemType) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === product.id,
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    const filteredCart = cart.filter((cartItem) => cartItem.id !== id);
    setCart(filteredCart);

  };
  const addQuantity = (id: string) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
    setCart(updatedCart);
  };

  const subQuantity = (id: string) => {
    const updatedCart = [];

    for (const cartItem of cart) {
      if (cartItem.id === id) {
        if (cartItem.quantity > 1) {
          updatedCart.push({ ...cartItem, quantity: cartItem.quantity - 1 });
        }
      } else {
        updatedCart.push(cartItem);
      }
    }

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, addQuantity, subQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

// Create a custom hook to use the CartContext
export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("Cart context not found");
  }
  return context;
};
