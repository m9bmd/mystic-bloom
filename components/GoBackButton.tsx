"use client";
import React from "react";
import { Button } from "./ui/button";
import { MoveLeft, MoveLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant={"outline"}>
      <MoveLeftIcon className="h-6 w-6" />
    </Button>
  );
};

export default GoBackButton;
