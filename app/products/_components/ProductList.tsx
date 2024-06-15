import { TableTopFormData } from "@/lib/types";
import Link from "next/link";

import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: { products: TableTopFormData[] }) => {
  return (
    <div className="grid grid-cols-2 gap-2 gap-x-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
