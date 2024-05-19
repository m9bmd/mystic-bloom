import { cn } from "@/lib/utils";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <h1 className={cn("font-black text-2xl text-background", className)}>
      Bloomy
    </h1>
  );
};

export default Logo;
