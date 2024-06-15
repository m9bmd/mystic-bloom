"use client";

import { usePathname } from "next/navigation";
import React from "react";

const useIsRootPath = () => {
  const pathname = usePathname();
  return pathname === "/";
};

export default useIsRootPath;
