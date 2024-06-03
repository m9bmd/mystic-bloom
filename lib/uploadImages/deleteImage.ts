"use server";
import { revalidatePath } from "next/cache";
import prisma from "../db";
import { deleteImageOnCloudinary } from "./uploadOnCloudinary";

export const deleteImageFromDBCloud = async (public_id: string) => {
  try {
    const res = await deleteImageOnCloudinary(public_id);
    console.log(res);
    const image = await prisma.image.delete({
      where: { public_id: public_id },
    });
    revalidatePath("/admin/products");
    // console.log("image from db", image);
  } catch (error) {
    return error;
  }
};
