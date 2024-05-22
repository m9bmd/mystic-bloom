import { TypeOf, z } from "zod";

const fileSchema = z
  .instanceof(File, { message: "File is required" })
  .refine((file) => file.size > 0 && file.type.startsWith("image/"), {
    message: "File must be a non-empty image",
  });

const fileListSchema = z
  .array(fileSchema)
  .nonempty({ message: "Choose atleast one file" });

const imagesSchema = z.union([fileSchema, fileListSchema]);

export const TableTopSchema = z.object({
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
  weight: z.string({
    required_error: "Weight is required",
    invalid_type_error: "Weight must be a number",
  }),
  images: fileListSchema,
});

export type TableTopSchema = TypeOf<typeof TableTopSchema>;
