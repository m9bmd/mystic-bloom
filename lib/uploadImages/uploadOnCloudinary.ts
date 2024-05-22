"use server"
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


export const uploadOnCloudinary = async (localFilePath:string) => {
  try {
    if (!localFilePath) return null
    const res = await cloudinary.uploader.upload(localFilePath, { resource_type: "auto" })
    console.log("File is uploaded on cloudinary 🎉", res.url)

    return res
  } catch (error) {
    console.log(error)
    return null
  }
}
export const deleteImageOnCloudinary = async(public_id: string) => {
  try {
    const result = await cloudinary.uploader.destroy(public_id)
    return result
  } catch (error) {
    console.log(error)
    return null
  }
}

