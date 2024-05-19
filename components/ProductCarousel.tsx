import React from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Image from "next/image";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { products } from "@/lib/data";

const ProductCarousel = ({}) => {
  return (
    <div>
      <h1 className="pl-4 pb-10 text-muted-foreground">Explore the Art </h1>
      <div className="pl-4 pb-4">
        <ScrollArea className="w-full whitespace-nowrap rounded-md border border-slate-300 px-4 p-4">
          <div className="flex w-max space-x-4 ">
            {products.map((product) => (
              <figure key={product.name} className="shrink-0 ">
                <div className="overflow-hidden rounded-md relative">
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
                    <Button
                      variant={"secondary"}
                      size={"sm"}
                      className="rounded-full text-sm font-medium "
                    >
                      Explore{" "}
                    </Button>
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

export default ProductCarousel;
