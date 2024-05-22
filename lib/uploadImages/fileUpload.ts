"use server"
import fs from "fs/promises";
import { uploadOnCloudinary } from "./uploadOnCloudinary";

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

export const multipleFileUpload = async (images: FileArray) => {
  const imageUrl = [];

  try {
    // console.log("in")
    for (const image of images) {
      const path = `public/temp/${image.name}`;
      await writeFile(path, image);
      const res = await uploadOnCloudinary(path);
      const img_object = res ;
      imageUrl.push({name: img_object?.original_filename, url: img_object?.secure_url, public_id:img_object?.public_id });
      await deleteFile(path);
    }
    console.log("upload complete")
    return imageUrl;
  } catch (error) {
    throw Error
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
