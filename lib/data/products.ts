"use server";

import next from "next";
import prisma from "../db";
import { ApiResponse, TableTopFormData, TableTopSchema } from "../types";

// export const fetchAllProducts = async () => {
//   try {
//     console.log(`${process.env.BASE_URL}/api/products`)
//     const res = await fetch(`${process.env.BASE_URL}/api/products`, {
//       headers: {
//         Accept: "application/json",
//         method: "GET",
//       },
//       next: { tags: ["products"] },
//     });
//     console.log(res)
//     if (res.ok) {
//       const data: ApiResponse = await res.json();
//       if (data.success === false) {
//         return [];
//       } else {
//         return data.data as TableTopFormData[];
//       }
//     }
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// };
export const fetchAllProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      include: { images: true },
    });
    console.log(products);
    return products
  } catch (error) {
    console.log("error fetching");
    return [];
  }
};

// export const fetchProduct = async (id: string) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
//       headers: {
//         Accept: "application/json",
//         method: "GET",
//       },
//       cache: "no-store",
//       next: { tags: ["product"] },
//     });
//     if (res.ok) {
//       const data: ApiResponse = await res.json();
//       return data.data as TableTopFormData;
//     }
//   } catch (error) {
//     console.error(error);
//     return {};
//   }
// };

// ? prisma way
export const fetchProduct = async (id: string) => {
  try {
    const res = await prisma.product.findFirst({
      where: { id: id },
      include: { images: true },
    });
    const data = res;
    //@ts-ignore
    return data as TableTopSchema;
  } catch (error) {
    console.error(error);
    return "";
  }
};
