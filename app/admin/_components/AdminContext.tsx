"use client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React, { createContext, ReactNode, useContext, useState } from "react";

const AuthContext = createContext(null);

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth Context should be used within AuthContextProvider");
  }
  return context;
}
