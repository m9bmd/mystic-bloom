


"use client";
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

import { TableTopFormData } from "@/lib/types";
import { PencilIcon, TrashIcon } from "lucide-react";
import NoItems from "../../_components/NoItems";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { deleteProduct } from "@/lib/products/deleteProduct";

export function ProductsTable({ products }: { products: TableTopFormData[] } ) {
  // console.log("from productsTable", products)
  const { toast } = useToast();
  const deleteToast = async (id:string) => {
    toast({
      variant: "destructive",
      title: "You sure?",
      description: "action cannot be undone",
      action: (
        <ToastAction onClick={() => deleteProduct({id})} altText="Delete Product" className="flex items-center gap-4">Delete<TrashIcon className="w-4 h-4"/></ToastAction>
      ),
    });
  };
  return products.length === 0 ? (
    <NoItems
      name="products"
      description="You can start selling as soon as you add a product"
      buttonName="product"
    />
  ) : (
    <div className="">
      <Table className=" ">
        <TableCaption>A list of your recent products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Name</TableHead>
            <TableHead>Color</TableHead>
            <TableHead className="">Mrp</TableHead>
            <TableHead className="">Discount Price</TableHead>
            <TableHead className="">Edit</TableHead>
            <TableHead className="">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell className="">{product.name}</TableCell>
              <TableCell>{product.color}</TableCell>
              <TableCell className="">₹{product.mrpPrice}</TableCell>
              <TableCell className="">₹{product.discountPrice}</TableCell>
              <TableCell className="cursor-pointer">
                <Link
                  href={{
                    pathname: `/admin/products/edit/${index}`,

                    query: { id: product.id },
                  }}
                >
                  <PencilIcon className="w-5 h-5 text-muted-foreground hover:text-primary focus:border " />
                </Link>
              </TableCell>
              <TableCell className="">
                <Button variant={"link"} onClick={() => deleteToast(product.id)}>
                  <TrashIcon className="w-5 h-5 text-destructive " />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
