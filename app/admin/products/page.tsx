import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ProductsTable } from "./_components/ProductsTable";
import { fetchAllProducts } from "@/lib/data/products";
import { TableTopFormData } from "@/lib/types";

const page = async () => {
  const products = await fetchAllProducts();
  return (
    <div className="space-y-8 lg:mx-auto lg:w-[900px] lg:pt-12">
      <div className="flex justify-between">
        <h2 className="text-xl font-medium">Inventory</h2>
        <Link
          href={"/admin/products/add"}
          className={buttonVariants({ variant: "default" })}
        >
          Add Product
        </Link>
      </div>

      <ProductsTable products={products as TableTopFormData[]} />
    </div>
  );
};

export default page;
