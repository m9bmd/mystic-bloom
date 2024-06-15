import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn("pt-28 pb-16 px-6", className)}>{children}</div>;
};

export default Container;
