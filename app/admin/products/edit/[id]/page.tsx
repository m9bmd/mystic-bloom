import { fetchProduct } from "@/lib/data/products";
import React from "react";
import UpdateTableTopForm from "../../_components/UpdateTableTopForm";
import { TableTopSchema } from "@/lib/types";
type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};
const page = async ({ params, searchParams }: Props) => {
  const id = searchParams?.id;
  const product = await fetchProduct(id as string);

  return (
    <div className="space-y-4 lg:w-[900px] lg:mx-auto">
      <h2 className="font-medium">Edit Form</h2>
      <UpdateTableTopForm product={product as TableTopSchema} />
    </div>
  );
};

export default page;
