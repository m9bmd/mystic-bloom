import GoBackButton from "@/components/GoBackButton";
import { fetchAllProducts } from "@/lib/data/products";
import { TableTopFormData } from "@/lib/types";
import { Flower } from "lucide-react";

import React from "react";

import ProductList from "./_components/ProductList";

const page = async () => {
  const products = (await fetchAllProducts()) as TableTopFormData[];
  return (
    <div className="space-y-8 max-w-[1224px] lg:mx-auto">
      <div className="flex items-center justify-between">
        <GoBackButton />
        <h3 className="inline-flex items-center justify-center gap-1">
          <Flower className="text-pink-400" />
          <span className="font-medium">{products?.length}</span>
        </h3>
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default page;
