import Container from "@/components/Container";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  const {isAuthenticated} = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return (
    <div className="min-h-dvh">
      <Container className="max-w-[900px] md:mx-auto ">{children}</Container>
    </div>
  );
};

export default layout;
