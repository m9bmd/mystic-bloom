import { Button } from "@/components/ui/button";
import React from "react";
import LinkButton from "../products/_components/AddButton";

const NoItems = ({
  name,
  description,
  buttonName,
  buttonLink,
}: {
  name: string;
  description: string;
  buttonName?: string;
  buttonLink?: string;
}) => {
  return (
    <div className="h-[600px] rounded-md border border-dashed border-primary">
    <div className="flex h-full flex-col items-center justify-center gap-4 px-8">
      <h2 className="text-xl font-semibold">Your have no {name}</h2>
      <p className="text-center text-sm">{description}</p>
      {buttonName && (
        <LinkButton name={buttonName} link="/admin/products/add" />
      )}
    </div>
    </div>
  );
};

export default NoItems;
