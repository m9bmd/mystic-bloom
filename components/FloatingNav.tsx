import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Lightbulb } from "lucide-react";
import { Button } from "./ui/button";

const FloatingNav = () => {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2  z-40 text-center">
      <Sheet>
        <SheetTrigger className=" ">
          <div className=" bg-black/30 backdrop-blur-sm border border-t-0 border-yellow-100  rounded-b-full  px-2.5 py-5">
            <Lightbulb
              strokeWidth={1}
              className="w-fit h-9 text-background  rotate-180 fill-yellow-300 "
            />
          </div>
        </SheetTrigger>
        <SheetContent side={"top"} className="h-3/4">
          <div className=" flex flex-col justify-center items-center gap-8 h-full capitalize">
            <Button variant={"link"} className="text-xl font-normal">
              Home
            </Button>
            <Button variant={"link"} className="text-xl font-normal">
              Products
            </Button>
            <Button variant={"link"} className="text-xl font-normal">
              favorites{" "}
            </Button>
            <Button variant={"link"} className="text-xl font-normal">
              Orders
            </Button>
            <Button
              variant={"link"}
              className="text-destructive text-xl font-normal"
            >
              sale
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FloatingNav;
