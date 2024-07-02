"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";
import { CheckoutFormSchema } from "../_types/checkoutFormType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { generateOrder } from "@/lib/checkout/checkoutActions";
import { navigate } from "@/lib/navigate";

const CheckoutForm = () => {
  const form = useForm<z.infer<typeof CheckoutFormSchema>>({
    resolver: zodResolver(CheckoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      street: "",
      apartment: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
      paymentType: "COD",
    },
  });
  async function onSubmit(values: z.infer<typeof CheckoutFormSchema>) {
    await generateOrder(values);
    navigate("/");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input
                  className="resize-none"
                  placeholder="optional"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea className="resize-none" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="apartment"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Apartment</FormLabel>
              <FormControl>
                <Input
                  className="resize-none"
                  placeholder="optional"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input className="resize-none" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input className="resize-none" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pincode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Pincode</FormLabel>
                <FormControl>
                  <Input className="resize-none" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input className="resize-none" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <h2 className="text-xl font-semibold">Payment</h2>
        <FormField
          control={form.control}
          name="paymentType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              {/* <FormLabel>Notify me about...</FormLabel> */}
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="COD" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      cod (Cash On Delivery)
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" size={"lg"} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CheckoutForm;
