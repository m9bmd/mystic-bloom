"use server";

import next from "next";
import prisma from "../db";
import { ApiResponse, TableTopFormData, TableTopSchema } from "../types";

export const fetchAllProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
      next: { tags: ["products"] },
    });
    if (res.ok) {
      const data: ApiResponse = await res.json();
      if (data.success === false) {
        return [];
      } else {
        return data.data as TableTopFormData[];
      }
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
// export const fetchAllProducts = async () => {
//   try {
//     const products = await prisma.product.findMany()
//     console.log(products)
//     return []
//   } catch (error) {
//     console.log('error fetching')
//     return []
//   }
// }

export const fetchProduct = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
      cache: "no-store",
      next: { tags: ["product"] },
    });
    if (res.ok) {
      const data: ApiResponse = await res.json();
      return data.data as TableTopFormData;
    }
  } catch (error) {
    console.error(error);
    return {};
  }
};

// ? prisma way
// export const fetchProduct = async (id: string) => {
//   try {
//     const res = await prisma.product.findFirst({
//       where: { id: id },
//       include: { images: true },
//     });
//     const data = res;
//     //@ts-ignore
//     return data as TableTopSchema;
//   } catch (error) {
//     console.error(error);
//     return "";
//   }
// };
