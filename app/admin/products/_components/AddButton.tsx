"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const LinkButton = ({ name, link }: { name: string; link: string }) => {
  const router = useRouter();
  return (
    <Button className="" onClick={() => router.push(link)}>
      Add {name}
    </Button>
  );
};

export default LinkButton;
