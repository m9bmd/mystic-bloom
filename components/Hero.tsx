import React from "react";
import Navbar from "./Navbar/Navbar";
import { Playfair_Display as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
});
const Hero = () => {
  return (
    <div className=" relative ">
      <video
        autoPlay
        loop
        muted
        className="object-cover h-full w-full md:h-[800px]"
      >
        <source src="/videos/frostedLily.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className={cn(
          "absolute top-1/2 left-1/2 transform -translate-x-1/2  flex flex-col items-center gap-3"
        )}
      >
        <h1
          className={cn(
            "text-background capitalize text-3xl text-center font-sans ",
            fontSans.variable
          )}
        >
          We make the best Flower table tops in india
        </h1>
        <Button
          className="w-fit rounded-full text-base "
          size={"lg"}
          variant={"secondary"}
        >
          Explore
        </Button>
      </div>
    </div>
  );
};

export default Hero;
