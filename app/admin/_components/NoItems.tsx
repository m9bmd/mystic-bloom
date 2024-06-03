import { Button } from "@/components/ui/button";
import React from "react";
import LinkButton from "../products/_components/AddButton";

const NoItems = ({
  name,
  description,
  buttonName,
  buttonLink
}: {
  name: string;
  description: string;
  buttonName?: string;
  buttonLink?:string
}) => {
  return (
    <div className="border border-primary border-dashed rounded-md h-[600px]">
      <div className="h-full flex flex-col items-center justify-center gap-4 px-8">
        <h2 className="font-semibold text-xl ">Your have no {name}</h2>
        <p className="text-sm text-center">{description}</p>
        {buttonName && <LinkButton name={buttonName} link="/admin/products/add"/> }
      </div>
    </div>
  );
};

export default NoItems;
