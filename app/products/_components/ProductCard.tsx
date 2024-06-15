import { TableTopFormData } from "@/lib/types";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: TableTopFormData }) => {
  return (
        
    <Link
      href={`/products/${product.id}`}
      key={product.id}
      className="flex min-h-96 flex-col gap-1 rounded-lg border border-slate-300 p-1"
    >
      <div className="flex-1 lg:flex-0 p-1">
        <img
          src={product.images[0].url}
          className="h-full rounded-lg object-cover"
          alt={product.images[0].name}
        />
      </div>

      <div className="pl-2">
        <p className="font-medium">{product.name}</p>
        <div className="flex gap-2">
          <p className="text-green-600">₹{product.discountPrice}</p>
          <p>
            <span className="line-through">₹{product.mrpPrice} </span>
          </p>
        </div>
      </div>
    </Link>


  );
};

export default ProductCard;
    
    // <Link
    //   href={`/products/${product.id}`}
    //   key={product.id}
    //   className="flex min-h-96 max-h-[700px]  flex-col gap-1 rounded-lg border border-slate-300 p-1"
    // >
    //   <div className="flex-1 lg:flex-0 p-1">
    //     <img
    //       src={product.images[0].url}
    //       className="h-full rounded-lg object-cover"
    //       alt={product.images[0].name}
    //     />
    //   </div>

    //   <div className="pl-2">
    //     <p className="font-medium">{product.name}</p>
    //     <div className="flex gap-2">
    //       <p className="text-rose-400">₹{product.discountPrice}</p>
    //       <p>
    //         <span className="line-through">₹{product.mrpPrice} </span>
    //       </p>
    //     </div>
    //   </div>
    // </Link>