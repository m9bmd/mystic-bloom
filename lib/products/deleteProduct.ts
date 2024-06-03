"use server";

import { revalidatePath } from "next/cache";
import prisma from "../db";

type props = {
  id: string;
};
export const deleteProduct = async ({ id }: props) => {
  try {
    const res = await prisma.product.delete({ where: { id: id } });
    revalidatePath("/admin/products");
  } catch (error) {}
};
