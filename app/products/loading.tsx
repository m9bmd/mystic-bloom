import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <div className="grid grid-cols-2 gap-2 gap-x-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="flex min-h-96 flex-col gap-1 rounded-lg  p-1">
        <Skeleton className="flex-1 lg:flex-0 p-1"/>
        <Skeleton className="pl-2"/>
      </div>
    </div>
  );
};

export default loading;
