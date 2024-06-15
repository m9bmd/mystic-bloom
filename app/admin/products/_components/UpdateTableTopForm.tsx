"use client";
import {
  TableTopSchema,
  uploadedImageSchema,
  uploadedImagesSchema,
} from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import { fileFetch } from "@/lib/uploadImages/fileUpload";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { deleteImageFromDBCloud } from "@/lib/uploadImages/deleteImage";
import { redirect, usePathname } from "next/navigation";
import { revalidatePath } from "next/cache";
import { navigate } from "@/lib/navigate";

const UpdateTableTopForm = ({ product }: { product: TableTopSchema }) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<uploadedImagesSchema | []>(
    product.images as uploadedImagesSchema | [],
  );
  const form = useForm<z.infer<typeof TableTopSchema>>({
    resolver: zodResolver(TableTopSchema),
    defaultValues: {
      id: product.id,
      name: product.name,
      description: product.description,
      color: product.color,
      weight: product.weight,
      mrpPrice: product.mrpPrice,
      discountPrice: product.discountPrice,
      quantity: product.quantity,
      images: images,
    },
  });
  const { toast } = useToast();
  const deleteImage = async (public_id: string) => {
    setLoading(true);
    const filteredImages = images.filter(
      (image) => image.public_id !== public_id,
    );
    if (filteredImages.length === 0) {
      setImages([]);
      await deleteImageFromDBCloud(public_id);
      setLoading(false);
    } else {
      setImages(filteredImages as uploadedImagesSchema);
      await deleteImageFromDBCloud(public_id);
      setLoading(false);
      form.setValue("images", filteredImages as uploadedImagesSchema);
      // console.log(filteredImages);
    }
  };
  const showDeleteToast = async (public_id: string) => {
    toast({
      variant: "destructive",
      title: "You sure?",
      description: "Once deleted the action cannot be undo",
      action: (
        <ToastAction onClick={() => deleteImage(public_id)} altText="Try again">
          delete
        </ToastAction>
      ),
    });
  };
  async function onSubmit(values: z.infer<typeof TableTopSchema>) {
    setLoading(true);
    const images = values.images;
    const allFilesAreValid = images.every(
      (image: unknown) => image instanceof File,
    );
    if (allFilesAreValid) {
      const ImageFormData = new FormData();
      for (let i = 0; i < values.images.length; i++) {
        ImageFormData.append("images", values.images[i] as File);
      }
      const imageUrl = await fileFetch(ImageFormData);
      values.images = imageUrl as uploadedImagesSchema;
      const jsonValues = JSON.stringify(values);
      const response = await fetch("http://localhost:3000/api/products", {
        method: "PUT",
        body: jsonValues,
      });
      console.log("All items in images are valid File objects");
    } else {
      console.log("no file uploaded but deleted", values);
      const jsonValues = JSON.stringify(values);
      const response = await fetch("http://localhost:3000/api/products", {
        method: "PUT",
        body: jsonValues,
      });
      console.log("Some items in images are not valid File objects");
    }
    setLoading(false);
    navigate("/admin/products");
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 pb-24 pt-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-36 resize-none"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight (gm)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mrpPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mrp (₹)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  The full price will be shown with a strikethrough like this
                  <span className="line-through">₹476</span> and the discounted
                  price will be displayed next to it
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="discountPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discount Price (₹)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product availaible quantity</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="images"
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Pictures</FormLabel>
                <FormControl>
                  <Input
                    {...fieldProps}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(event) => {
                      const files = event.target.files;
                      if (files) {
                        console.log("Inside on Change");
                        onChange(Array.from(files));
                      }
                    }}
                  />
                </FormControl>
                {images.length !== 0 && (
                  <FormDescription>
                    Image uploaded:{" "}
                    <span className="font-medium text-primary">
                      {images.length}
                    </span>
                  </FormDescription>
                )}

                <FormMessage />
              </FormItem>
            )}
          />
          {images.length !== 0 && (
            <ScrollArea className="w-full whitespace-nowrap rounded-md border border-slate-300 p-4 px-4">
              <div className="flex w-max space-x-4">
                {images.map((image) => (
                  <figure className="shrink-0" key={image.public_id}>
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="h-[400px] w-[300px] object-cover"
                      />

                      <Button
                        type="button"
                        variant={"destructive"}
                        onClick={() => showDeleteToast(image.public_id)}
                        className="absolute right-5 top-5 rounded-full bg-destructive/50 p-1"
                      >
                        <X className="h-8 w-8" />
                      </Button>
                      <figcaption className="absolute bottom-5 left-5 text-primary-foreground">
                        {image.name}
                      </figcaption>
                    </div>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          )}

          <Button disabled={loading} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateTableTopForm;
