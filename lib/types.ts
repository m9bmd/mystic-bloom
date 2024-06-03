import { TypeOf, z } from "zod";

const fileSchema = z
  .instanceof(File, { message: "File is required" })
  .refine((file) => file.size > 0 && file.type.startsWith("image/"), {
    message: "File must be a non-empty image",
  });

const fileListSchema = z
  .array(fileSchema)
  .nonempty({ message: "Choose atleast one file" });

const uploadedImageSchema = z.object({
  name: z.string(),
  url: z.string(),
  public_id: z.string(),
});
export type uploadedImageSchema = TypeOf<typeof uploadedImageSchema>;

const uploadedImagesSchema = z.array(uploadedImageSchema).nonempty();
export type uploadedImagesSchema = TypeOf<typeof uploadedImagesSchema>;
const imagesSchema = z.union([
  fileListSchema,
  uploadedImagesSchema,
]);

export const TableTopSchema = z.object({
  id: z.string().optional(),
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1, { message: "Please provide name" }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(1),
  color: z
    .string({
      required_error: "Color is required",
    })
    .min(1, { message: "Please provide color" }),
  weight: z
    .string({
      required_error: "Weight is required",
    })
    .min(1, { message: "Please provide weight value" }),
  mrpPrice: z
    .string({
      required_error: "mrp is required",
    })
    .min(1, { message: "Please provide mrp price" }),
  discountPrice: z
    .string({
      required_error: "discount price is required",
    })
    .min(1, { message: "Please provide discount price" }),
  images: imagesSchema,
});

export type TableTopSchema = TypeOf<typeof TableTopSchema>;

export type image = {
  name: string;
  url: string;
  public_id: string;
};
export type TableTopFormData = {
  id: string;
  name: string;
  description: string;
  color: string;
  weight: string;
  mrpPrice: string;
  discountPrice: string;
  images: image[];
};

export const TableTopUpdateSchema = z.object({
  id: z.string(),
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1, { message: "Please provide name" }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(1),
  color: z
    .string({
      required_error: "Color is required",
    })
    .min(1, { message: "Please provide color" }),
  weight: z
    .string({
      required_error: "Weight is required",
    })
    .min(1, { message: "Please provide weight value" }),
  mrpPrice: z
    .string({
      required_error: "mrp is required",
    })
    .min(1, { message: "Please provide mrp price" }),
  discountPrice: z
    .string({
      required_error: "discount price is required",
    })
    .min(1, { message: "Please provide discount price" }),
  images: z.array(uploadedImageSchema),
});
export type TableTopUpdateSchema = TypeOf<typeof TableTopUpdateSchema>;
export type ApiResponse = {
  success: boolean;
  message: string;
  data: TableTopFormData[] | TableTopFormData;
};
