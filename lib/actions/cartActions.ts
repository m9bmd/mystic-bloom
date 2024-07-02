"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../db";
import CartItem from "@/components/Navbar/CartItem";
import { revalidatePath } from "next/cache";
async function getProductPrice(productId: string): Promise<string> {
  const product = await prisma.product.findUnique({
    where: { id: productId },
    select: { discountPrice: true },
  });

  if (!product) {
    // throw new Error("Product not found");
    return "null";
  }

  return product.discountPrice;
}
export async function getUserCart() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userEmail = user?.email;

  if (userEmail) {
    try {
      const cart = await prisma.cart.findUnique({
        where: { userEmail: userEmail },
        include: {
          CartItem: {
            include: {
              product: {
                include: {
                  images: true,
                },
              },
            },
          },
        },
      });
      // console.log(cart?.CartItem)
      return cart?.CartItem;
    } catch (error) {
      console.error("Error fetching user's cart:", error);
      return [];
    }
  } else {
    return [];
  }
}

export async function addToCartDB({ productId }: { productId: string }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userEmail = user?.email;
  // console.log("inside addTocartDB", userEmail);
  const productPrice = await getProductPrice(productId);
  if (userEmail) {
    let cart = await prisma.cart.findUnique({
      where: { userEmail: userEmail },
      include: { CartItem: true },
    });
    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          userEmail: userEmail,
          CartItem: {
            create: {
              productId: productId,
              quantity: 1,
              price: productPrice,
            },
          },
        },
        include: {
          CartItem: {
            include: {
              product: {
                include: { images: true },
              },
            },
          },
        },
      });
    } else {
      const cartItem = cart.CartItem.find(
        (item) => item.productId === productId,
      );
      if (!cartItem) {
        console.log("product does not exist in the cart");
        console.log(cart.id);
        await prisma.cartItem.create({
          data: {
            cartId: cart.id,
            productId: productId,
            quantity: 1,
            price: productPrice,
          },
        });
      } else {
        console.log("product exist in cart?", cartItem);
      }
    }
    cart = await prisma.cart.findUnique({
      where: { userEmail: userEmail },
      include: {
        CartItem: {
          include: {
            product: {
              include: {
                images: true,
              },
            },
          },
        },
      },
    });
  }
}

export async function addQuantityDb(cartItemId: string) {
  try {
    const CartItem = await prisma.cartItem.update({
      where: { id: cartItemId },
      data: {
        quantity: { increment: 1 },
      },
    });
    console.log(CartItem);
  } catch (error) {
    return null;
  }
}
export async function subQuantityDb({
  cartItemId,
  quantity,
}: {
  cartItemId: string;
  quantity?: number;
}) {
  try {
    if (quantity === 0) {
      const CartItem = await prisma.cartItem.delete({
        where: { id: cartItemId },
      });
    } else {
      const CartItem = await prisma.cartItem.update({
        where: { id: cartItemId },
        data: {
          quantity: { decrement: 1 },
        },
      });
    }

    
  } catch (error) {
    return null;
  }
}

export async function deleteFromCartDB(productId: string) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userEmail = user?.email;
  // console.log("userEmail", userEmail);
  // console.log("delete from cart db", productId);
  if (userEmail) {
    try {
      let cart = await prisma.cart.findUnique({
        where: { userEmail: userEmail },
      });
      if (cart) {
        const cartId = cart.id;
        console.log("cartId", cartId);
        const cartItemToDelete = await prisma.cartItem.delete({
          where: { id: productId, cartId: cartId },
        });
        console.log(cartItemToDelete);
      }
    } catch (error) {
      console.log("error while deleting", error);
      return null;
    }
  }
}
