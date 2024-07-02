import Container from "@/components/Container";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-dvh">
      <Container className="max-w-[900px] md:mx-auto ">{children}</Container>
    </div>
  );
};

export default layout;
