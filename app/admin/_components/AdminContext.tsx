"use client";
import { fetchAllProducts } from "@/lib/data/products";
import { TableTopFormData } from "@/lib/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Define the context type
interface AuthContextType {
  products: TableTopFormData[];
}

export const AdminContext = createContext<AuthContextType | null>(null);

export default function AdminContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [products, setProducts] = useState<TableTopFormData[]>([]);
  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const res = await fetchAllProducts();
      console.log("this is the response bro", res)
      if (res && res.length !== 0) {
        console.log('fetched all products')
        setProducts(res);
      }
    };
    fetchAndSetProducts();
  }, []);
  return (
    <AdminContext.Provider value={{ products }}>{children}</AdminContext.Provider>
  );
}

export function useAdminContext() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("AdminContext should be used within AuthContextProvider");
  }
  return context;
}
