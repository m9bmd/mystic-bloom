"use server";

import prisma from "../db";
import { ApiResponse, TableTopSchema } from "../types";

export const fetchAllProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      // console.log("fetched products successfully: ", data);
      return data;
    } else {
      console.error("Failed to fetch products, status: ", res.status);
      return [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
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
export const fetchProduct = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = (await res.json()) as ApiResponse;
      return data.data;
    }
  } catch (error) {
    console.error(error);
    return "";
  }
};
