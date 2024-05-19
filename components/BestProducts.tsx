import React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { products } from "@/lib/data";
import { HeartIcon, ShoppingBag, ShoppingBasketIcon } from "lucide-react";
const BestProducts = () => {
  return (
    <div className="px-4 space-y-8 ">
      <h1 className="info-label">our best sellers</h1>
      <div className="pb-8">
        <ScrollArea className="w-full whitespace-nowrap rounded-md border border-slate-300 p-4">
          <div className="flex w-max space-x-4 ">
            {products.map((product) => (
              <figure key={product.name} className="shrink-0 ">
                <div className="overflow-hidden rounded-md relative">
                  {/* <Button
                    size={"sm"}
                    variant={"secondary"}
                    className="rounded-full h-12 absolute top-5 right-5 "
                  >
                    <ShoppingBag className="" />
                  </Button>
                  <Button
                    size={"sm"}
                    variant={"secondary"}
                    className="rounded-full h-12 absolute top-5 right-20 "
                  >
                    <HeartIcon className="text-pink-500" />
                  </Button> */}
                  <Image
                    src={product.imageUrl}
                    alt={`Photo by ${product.name}`}
                    className="aspect-[3/4] h-fit w-fit object-cover"
                    width={300}
                    height={400}
                  />
                  <div className="absolute top-5  left-5 flex flex-col gap-2">
                    <Logo className="text-xs uppercase text-background font-light" />
                    <p className=" text-background   font-normal capitalize text-pretty w-24 ">
                      {product.name}
                    </p>
                    <p className="text-background w-fit bg-transparent ">
                      ₹ {product.price}
                    </p>
                  </div>
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Made by{" "}
                  <span className="font-semibold text-foreground capitalize">
                    {product.artist}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default BestProducts;
