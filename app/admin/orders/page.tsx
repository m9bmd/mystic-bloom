import React from "react";
import NoItems from "../_components/NoItems";
import { fetchAllOrders } from "@/lib/checkout/checkoutActions";
import { OrderTable } from "./_components/OrderTable";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { EyeIcon } from "lucide-react";

const page = async () => {
  const orders = await fetchAllOrders();
  // console.log(orders);
  const formatDateToIndian = (dateString: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-IN", options);
  };

  return (
    <div className="space-y-8 lg:mx-auto lg:w-[900px]">
      <h2 className="text-xl font-medium">Orders</h2>
      {orders?.length === 0 ? (
        <NoItems name="orders" description="Orders are empty" />
      ) : (
        <Table className="border">
          <TableCaption>A list of your recent orders</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Order Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>pay type</TableHead>
              <TableHead className="">Amount</TableHead>
              <TableHead className="text-right">Preview</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders?.map((orderItem, index) => (
              <TableRow key={orderItem.id}>
                <TableCell className="font-medium">
                  {formatDateToIndian(orderItem.orderDate)}
                </TableCell>
                <TableCell>{orderItem.status}</TableCell>
                <TableCell>{orderItem.paymentType}</TableCell>
                <TableCell className="">₹{orderItem.totalAmount}</TableCell>
                <TableCell className="flex justify-end">
                  <Link
                    href={{
                      pathname: `/admin/orders/${index}`,

                      query: { id: orderItem.id },
                    }}
                  >
                    <EyeIcon className="text text-gray-400 hover:text-gray-500" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default page;
