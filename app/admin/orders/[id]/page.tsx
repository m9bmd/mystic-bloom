import { fetchOrder } from "@/lib/checkout/checkoutActions";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderType } from "../_types/orderType";

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const page = async ({ params, searchParams }: Props) => {
  const id = searchParams?.id;
  const order: OrderType | null  = await fetchOrder(id as string);

  return (
    
    <div className="space-y-12 pb-24">
      <div className="space-y-4">
        <h1 className="text-xl font-medium">Order details</h1>
        <div className="w-96 space-y-4 rounded-md border p-4">
          <div className="flex gap-4">
            <p className="w-full">customer: </p>
            <p className="w-full text-center">{order?.userEmail}</p>
          </div>
          <div className="flex gap-4">
            <p className="w-full">status: </p>
            <p className="w-full text-center">{order?.status}</p>
          </div>
          <div className="flex gap-4">
            <p className="w-full">Amount: </p>
            <p className="w-full text-center">₹{order?.totalAmount}</p>
          </div>
          <div className="flex gap-4">
            <p className="w-full">payment type: </p>
            <p className="w-full text-center">{order?.paymentType}</p>
          </div>
          <div className="flex gap-4">
            <p className="w-full">payment status: </p>
            <p className="w-full text-center">{order?.paymentStatus}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Address</h2>
          <div className="w-full space-y-4 rounded-md border p-4">
            <div className="flex gap-4">
              <p className="w-full">First name</p>
              <p className="w-full">{order?.address.firstName}</p>
            </div>
            <div className="flex gap-4">
              <p className="w-full">Last name</p>
              <p className="w-full">{order?.address.lastName}</p>
            </div>
            <div className="flex gap-4">
              <p className="w-full">Street</p>
              <p className="w-full">{order?.address.street}</p>
            </div>
            <div className="flex gap-4">
              <p className="w-full">Apartment</p>
              <p className="w-full">
                {order?.address.apartment === "" && "N/A"}
              </p>
            </div>
            <div className="flex gap-4">
              <p className="w-full">Company</p>
              <p className="w-full">{order?.address.company === "" && "N/A"}</p>
            </div>
            <div className="flex gap-4">
              <p className="w-full">City</p>
              <p className="w-full">{order?.address.city}</p>
            </div>
            <div className="flex gap-4">
              <p className="w-full">State</p>
              <p className="w-full">{order?.address.state}</p>
            </div>
            <div className="flex gap-4">
              <p className="w-full">Pincode</p>
              <p className="w-full">{order?.address.pincode}</p>
            </div>
            <div className="flex gap-4">
              <p className="w-full">Phone number</p>
              <p className="w-full">{order?.address.phone}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-medium">products</h2>
        <div className="w-96 space-y-8 rounded-md border p-4">
          {order?.orderItems.map((CartItem) => (
            <div key={CartItem.id} className="flex gap-8">
              <div className="max-w-36">
                <img
                  src={CartItem.product.images[0].url}
                  className="rounded-md"
                  alt=""
                />
              </div>
              <div className="w-full space-y-4">
                <p>{CartItem.product.name}</p>
                <p>Quantity: {CartItem.quantity}</p>
                <p>sale price: {CartItem.price} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
