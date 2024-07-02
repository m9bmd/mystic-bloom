"use server";
import { CheckoutFormSchema } from "@/app/checkout/_types/checkoutFormType";
import { z } from "zod";
import prisma from "../db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { paymentType } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { navigate } from "../navigate";
import { OrderType } from "@/app/admin/orders/_types/orderType";

enum PaymentType {
  ONLINE = "ONLINE",
  COD = "COD",
}

export const fetchOrder = async (id: string): Promise<OrderType | null> => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: id },
      include: {
        address: true,
        orderItems: {
          include: {
            product: { include: { images: true } },
          },
        },
      },
    });
    return order as OrderType | null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const fetchAllOrders = async () => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        address: true,
        orderItems: true,
      },
    });
    // console.log("fetchAllOrders fn : ", orders);
    return orders;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const generateOrder = async (
  order: z.infer<typeof CheckoutFormSchema>,
) => {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (user?.email) {
      const cart = await prisma.cart.findUnique({
        where: { userEmail: user.email },
        include: {
          CartItem: {
            include: { product: true },
          },
        },
      });
      if (!cart) {
        throw new Error("Cart not found");
      }
      const totalAmount = cart?.CartItem.reduce((total, item) => {
        return total + parseFloat(item.price) * item.quantity;
      }, 0);
      const address = await prisma.address.create({
        data: {
          firstName: order.firstName,
          lastName: order.lastName,
          userEmail: user.email,
          company: order.company || "",
          street: order.street,
          apartment: order.apartment || "",
          city: order.city,
          state: order.state,
          pincode: parseInt(order.pincode),
          phone: parseInt(order.phone),
        },
      });
      // console.log("address created", address);
      const newOrder = await prisma.order.create({
        data: {
          userEmail: user.email,
          status: "PENDING",
          totalAmount,
          paymentType: order.paymentType,
          paymentStatus: "PENDING",
          addressId: address.id,
          orderItems: {
            create: cart.CartItem.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
            })),
          },
        },
      });
      await prisma.cartItem.deleteMany({
        where: { cartId: cart.id },
      });

      console.log("New order created:", newOrder);
      revalidatePath("/");
    } else {
      throw new Error("please login ");
    }
  } catch (error) {
    console.log(error);
  }
};
