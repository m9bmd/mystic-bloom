import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { FlowerIcon, ShoppingBagIcon } from "lucide-react";
import { useCartContext } from "../cart/CartContextProvider";
import CartItem from "./CartItem";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { navigate } from "@/lib/navigate";
const Cart = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCartContext();
  // console.log("from cart in navbar", cart);
  const onClick = async () => {
    await navigate("/cart");
    setOpen((prev) => !prev);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="relative">
        <span className="">
          <ShoppingBagIcon className="h-6 w-6 text-background" />
          {cart?.length !== 0 && (
            <span className="absolute -bottom-2 -right-2 rounded-full bg-background px-2 text-sm">
              {cart?.length}
            </span>
          )}
        </span>
      </SheetTrigger>
      <SheetContent className="w-[90%] pt-16">
        {cart?.length === 0 ? (
          <p className="flex h-full items-center justify-center gap-2 text-2xl font-medium">
            your cart is empty
            <span className="text-pink-500">
              <FlowerIcon />
            </span>
          </p>
        ) : (
          <div className="space-y-8">
            <p className="flex justify-between text-lg font-medium">
              your cart
              <span className="flex items-center gap-2">
                <FlowerIcon className="text-pink-500" /> {cart.length}
              </span>
            </p>
            {
              <div className="space-y-4">
                {cart?.map((item) => (
                  <CartItem key={item.id} cartItem={item} />
                ))}
              </div>
            }
            <Button className="w-full" size={"lg"} onClick={() => onClick()}>
              Proceed to cart
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;

// import React, { useEffect, useState } from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "../ui/sheet";
// import { FlowerIcon, ShoppingBagIcon } from "lucide-react";
// import { useCartContext } from "../cart/CartContextProvider";
// import { getUserCart } from "@/lib/actions/cartActions";
// import CartItem from "./CartItem";
// const Cart = () => {
//   const [open, setOpen] = useState(false);
//   const { cart } = useCartContext();
//   // console.log(cart)
//   // console.log(cart?.CartItem.length)
//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       <SheetTrigger className="relative">
//         <span className="">
//           <ShoppingBagIcon className="h-6 w-6 text-background" />
//           {cart?.CartItem.length !== 0 && (
//             <span className="absolute -bottom-2 -right-2 rounded-full bg-background px-2 text-sm">
//               {cart?.CartItem.length}
//             </span>
//           )}
//         </span>
//       </SheetTrigger>
//       <SheetContent className="w-[90%] pt-16">
//         {cart?.CartItem.length === 0 ? (
//           <p className="flex h-full items-center justify-center gap-2 text-2xl font-medium">
//             your cart is empty
//             <span className="text-pink-500">
//               <FlowerIcon />
//             </span>
//           </p>
//         ) : (
//           <div className="space-y-8">
//             <p className="flex gap-2 text-lg font-medium">
//               your cart
//               <span className="text-pink-500">
//                 <FlowerIcon />
//               </span>
//             </p>
//             {
//               <div className="space-y-4">
//                 {cart?.CartItem.map((item) => (
//                   <CartItem key={item.id} cartItem={item} />
//                 ))}
//               </div>
//             }
//           </div>
//         )}
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default Cart;
