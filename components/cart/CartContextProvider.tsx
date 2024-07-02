"use client";
import {
  addQuantityDb,
  addToCartDB,
  deleteFromCartDB,
  getUserCart,
  subQuantityDb,
} from "@/lib/actions/cartActions";
import { TableTopFormData } from "@/lib/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import CartItem from "../Navbar/CartItem";

export type CartItemType = {
  id: string;
  quantity: number;
  price: String | number;
  product: TableTopFormData;
};

export type CartContextType = {
  cart: CartItemType[] | [];
  setCart: React.Dispatch<React.SetStateAction<CartItemType[] | []>>;
  addToCart: (productId: string) => Promise<void>;
  deleteFromCart: (productId: string) => Promise<void>;
  addQuantity: ({ cartItemId }: { cartItemId: string }) => Promise<void>;
  subQuantity: ({ cartItemId }: { cartItemId: string }) => Promise<void>;
};
const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[] | []>([]);

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        const fetchedCart = await getUserCart();
        if (fetchedCart) {
          console.log("inside useEffect cartContext", fetchedCart);
          setCart(fetchedCart);
        }
      } catch (error) {
        console.error("Error fetching user's cart:", error);
      }
    };

    fetchUserCart();
  }, []);

  const addToCart = async (productId: string) => {
    await addToCartDB({ productId });
    const updatedCart = await getUserCart();
    if (updatedCart) {
      setCart(updatedCart);
    }
  };
  const addQuantity = async ({ cartItemId }: { cartItemId: string }) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === cartItemId
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
    setCart(updatedCart);
    await addQuantityDb(cartItemId);
  };
  const subQuantity = async ({ cartItemId }: { cartItemId: string }) => {
    const updatedCart: CartItemType[] = [];
    for (let cartItem of cart) {
      if (cartItem.id === cartItemId) {
        let updatedQuantity = cartItem.quantity - 1;
        if (updatedQuantity < 1) {
          console.log("Quantity cannot be less than 1 ", updatedQuantity);
          await subQuantityDb({ cartItemId: cartItemId, quantity: updatedQuantity});
        } else {
          await subQuantityDb({ cartItemId });
          updatedCart.push({ ...cartItem, quantity: updatedQuantity });
        }
      } else {
        updatedCart.push(cartItem);
      }
    }
    setCart(updatedCart);
  };

  const deleteFromCart = async (productId: string) => {
    const prevCart = cart;
    try {
      const updatedCart = cart.filter((cartItem) => cartItem.id !== productId);
      setCart(updatedCart);
      await deleteFromCartDB(productId);
    } catch (error) {
      setCart(prevCart);
    }
  };
  const contextValue = {
    cart,
    setCart,
    addToCart,
    deleteFromCart,
    addQuantity,
    subQuantity,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("Cart context not found");
  }
  return context;
};
