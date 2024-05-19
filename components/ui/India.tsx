import { cn } from "@/lib/utils";
import React from "react";

const India = ({ className }: { className?: string }) => {
  return (
    <>
      <span className={cn("uppercase", className)}>
        <span className="text-orange-400">In</span>
        <span className="text-blue-700">d</span>
        <span className="text-green-500">ia</span>
      </span>
    </>
  );
};

export default India;
