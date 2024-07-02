import GoBackButton from "@/components/GoBackButton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { fetchProduct } from "@/lib/data/products";
import { TableTopFormData } from "@/lib/types";
import React from "react";
import AddToCartButton from "../_components/AddToCartButton";


const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const product = (await fetchProduct(id)) as TableTopFormData;
  return (
    <div className="max-w-[1224px] space-y-4 lg:mx-auto">
      <GoBackButton />
      <div className="space-y-6">
        <ScrollArea className="w-full whitespace-nowrap rounded-md border border-slate-300">
          <div className="flex">
            {product.images.map((image) => (
              <figure key={image.name} className="shrink-0 p-4">
                <img
                  src={image.url}
                  alt={image.name}
                  className="h-[464px] rounded-lg"
                />
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <h2 className="text-2xl font-medium">{product.name}</h2>
        <div>
          <p className="flex items-center gap-12 text-base">
            <span className="font-medium"> price: </span>
            <span className="space-x-2">
              <span className="text-xl text-green-600">
                ₹{product.discountPrice}
              </span>
              <span className="text-base line-through">
                ₹{product.mrpPrice}
              </span>
            </span>
          </p>
        </div>

          <AddToCartButton product={product} />


        <div className="space-y-4">
          <p className="font-medium">product description</p>
          <p className="text-pretty text-sm">{product.description}</p>
        </div>
        {/* <div>
          <ProductCarousel id={product.id} />
        </div> */}
      </div>
    </div>
  );
};

export default page;
