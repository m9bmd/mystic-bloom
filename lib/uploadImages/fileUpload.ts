"use server";
import fs from "fs/promises";
import { uploadOnCloudinary } from "./uploadOnCloudinary";
export interface ImageInfo {
  name: string;
  url: string;
  public_id: string;
}

export const fileUpload = async (image: File) => {
  try {
    await fs.mkdir("public/temp", { recursive: true });
    const path = `public/temp/${image.name}`;
    await fs.writeFile(path, Buffer.from(await image.arrayBuffer()));
    console.log("File created:", path);
    const res = await uploadOnCloudinary(path);
    const secure_url = res?.secure_url;
    await fs.unlink(path);
    return secure_url;
  } catch (error) {
    return error;
  }
};
type FileArray = File[];

export async function fileFetch(images: FormData) {
  const imagesArray = images.getAll("images") as File[];
  const imageUrl =  await multipleFileUpload(imagesArray)
  return imageUrl
}

export const multipleFileUpload = async (images: FileArray) => {
  try {
    const imageUrlObject = await images.reduce(async (accPromise, image, index) => {
      const acc = await accPromise;
      const path = `public/temp/${image.name}`;
      await writeFile(path, image);
      const res = await uploadOnCloudinary(path);
      const img_object = res;
      const name = img_object?.original_filename as string;
      acc[index] = {
        name: img_object?.original_filename || '',
        url: img_object?.secure_url || '',
        public_id: img_object?.public_id || '',
      };
      await deleteFile(path);
      return acc;
    }, Promise.resolve({} as { [key: number]: ImageInfo }));
    
    console.log("Upload complete");
    console.log(imageUrlObject);
    return imageUrlObject;
  } catch (error) {
    throw new Error("File upload failed");
  }
};


const writeFile = async (path: string, image: File) => {
  try {
    await fs.writeFile(path, Buffer.from(await image.arrayBuffer()));
  } catch (error) {
    return error;
  }
};
const deleteFile = async (path: string) => {
  try {
    await fs.unlink(path);
  } catch (error) {
    return error;
  }
};
