"use client";

import {
  TableTopSchema,
  uploadedImageSchema,
  uploadedImagesSchema,
} from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { fileFetch } from "@/lib/uploadImages/fileUpload";
import { Textarea } from "@/components/ui/textarea";
import { navigate } from "@/lib/navigate";

export function AddTableTopForm() {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof TableTopSchema>>({
    resolver: zodResolver(TableTopSchema),
    defaultValues: {
      name: "",
      description: "",
      color: "",
      weight: "",
      mrpPrice: "",
      discountPrice: "",
      quantity: "",
      images: [],
    },
  });

  async function onSubmit(values: z.infer<typeof TableTopSchema>) {
    setIsUploading(true);
    const ImageformData = new FormData();
    for (let i = 0; i < values.images.length; i++) {
      ImageformData.append("images", values.images[i] as File);
    }
    toast({
      title: "Uploading files...",
      description: "this may take a few seconds",
    });
    const imageUrl = await fileFetch(ImageformData);
    values.images = imageUrl as uploadedImagesSchema;
    const jsonValues = JSON.stringify(values);

    toast({
      title: "Creating Product...🌸",
      description: "this may take a few seconds",
    });
    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: jsonValues,
    });
    const data = await response.json();
    if (data.success === true) {
      toast({
        title: "Created Product ✅",
        description: "product created successfully 🎉",
      });
      form.reset();
      setIsUploading(false);
      navigate("/admin/products");
    } else if (data.success === false) {
      toast({
        variant: "destructive",
        title: "Uh-oh! something Went wrong",
        description: "there was a problem with your request",
      });
      setIsUploading(false);
    }
  }

  return (
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
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                This is your product display name.
              </FormDescription>
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
                  className="h-40 resize-none"
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
                <Input placeholder="" {...field} />
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
                <Input placeholder="" {...field} />
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
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                The full price will be shown with a strikethrough like this ₹
                <span className="line-through">476</span> and the discounted
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
              <FormLabel>Discount price (₹)</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
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
                <Input placeholder="" {...field} />
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
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isUploading} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
