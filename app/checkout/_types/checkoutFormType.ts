import { z } from "zod";

export const CheckoutFormSchema = z.object({
  firstName: z
    .string()
    .min(4, { message: "minimum 4 characters" })
    .max(25, { message: "exceeded max character" }),
  lastName: z
    .string()
    .min(4, { message: "minimum 4 characters" })
    .max(25, { message: "exceeded max character" }),
  company: z.string().max(25).optional(),
  street: z
    .string()
    .min(10, { message: "minimum 4 characters required " })
    .max(100),
  apartment: z.string().max(25).optional(),
  city: z
    .string()
    .min(2, { message: "city must be atleast 2 characters" })
    .max(28, { message: "exceeded max character for city" }),
  state: z.string().max(13),
  pincode: z
    .string()
    .min(6)
    .max(6)
    .refine((value) => /^\d+$/.test(value), {
      message: "Pincode must be a valid number",
    }),
  phone: z
    .string()
    .min(10, { message: "phone must be atleast 10 numbers" })
    .max(10, { message: "phone must be atleast 10 numbers" })
    .refine((value) => /^\d+$/.test(value), {
      message: "Phone must be a valid number",
    }),
  paymentType: z.enum(["COD"]),
});
