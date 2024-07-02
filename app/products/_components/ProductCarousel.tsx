import Logo from "@/components/Logo";
import Smile from "@/components/svg/smile";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { fetchAllProducts } from "@/lib/data/products";

import Link from "next/link";
import React from "react";

const ProductCarousel = async ({ id }: { id: string }) => {
  const products = await fetchAllProducts();
  const filteredProducts = products?.filter((product) => product.id !== id);
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h2 className="font-medium">You may Also like</h2>
        <Smile className="w-20 hover:-translate-y-2 hover:rotate-12" />
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-md border border-slate-300 p-4 px-4">
        <div className="flex w-max space-x-4">
          {filteredProducts?.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.name}
              className="shrink-0"
            >
              <div className="space-y-2 overflow-hidden rounded-md">
                <img
                  src={product.images[0].url}
                  alt={`Photo by ${product.name}`}
                  className="h-96 object-cover rounded-md"
                />
                <p className="">{product.name}</p>
                <div className="flex gap-2 items-center ">
                <p className="text-green-600">₹{product.discountPrice}</p>
                <p className="line-through text-sm ">₹{product.mrpPrice}</p>
                </div>

              </div>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default ProductCarousel;
