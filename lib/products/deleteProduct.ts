"use server";

import { revalidatePath } from "next/cache";
import prisma from "../db";
import { deleteImageOnCloudinary } from "../uploadImages/uploadOnCloudinary";

type props = {
  id: string;
};
export const deleteProduct = async ({ id }: props) => {
  try {
    console.log(id);
    const images = await prisma.image.findMany({
      where: { productId: id },
    });
    for(const image of images) {
      await deleteImageOnCloudinary(image.public_id)
    }
    const res = await prisma.product.delete({ where: { id: id } });
    revalidatePath("/admin/products");
  } catch (error) {
    throw error 
  }
};
