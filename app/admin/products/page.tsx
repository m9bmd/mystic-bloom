import React from "react";
import NoItems from "../_components/NoItems";
import { ProductsTable } from "./_components/ProductsTable";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { fetchAllProducts } from "@/lib/data/products";
import { ApiResponse, TableTopFormData } from "@/lib/types";

const page = async () => {
  const products: ApiResponse = await fetchAllProducts();
  return (
    <div className=" space-y-8 lg:pt-12 lg:w-[900px] lg:mx-auto ">
      <div className="flex justify-between ">
        <h2 className="text-xl font-medium ">Inventory</h2>
        <Link
          href={"/admin/products/add"}
          className={buttonVariants({ variant: "default" })}
        >
          Add Product
        </Link>
      </div>

      <ProductsTable products={products.data as TableTopFormData[]} />
    </div>
  );
};

export default page;
