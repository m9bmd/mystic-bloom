"use client";

import { usePathname } from "next/navigation";
import { createContext, ReactNode, useContext } from "react";

const ColorContext = createContext(false);

export default function ColorContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathName = usePathname();
  const adminRoute = pathName.split("/");
  let isAdminRoute = adminRoute[1] === "admin" ? true : false;
  return (
    <ColorContext.Provider value={isAdminRoute}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("Color context should be used within ColorContextProvider");
  }
  return context;
}
