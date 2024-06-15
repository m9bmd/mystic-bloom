import Container from "@/components/Container";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Container>{children}</Container>
    </div>
  );
};

export default layout;
