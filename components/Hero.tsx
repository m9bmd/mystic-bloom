import React from "react";
import { Playfair_Display as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
});
const Hero = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="h-full w-full object-cover md:h-[800px] md:object-cover "
      >
        <source src="/videos/frostedLily.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className={cn(
          "absolute left-1/2 top-1/2 flex -translate-x-1/2 transform flex-col items-center gap-3",
        )}
      >
        <h1
          className={cn(
            "text-center font-sans text-3xl capitalize text-background",
            fontSans.variable,
          )}
        >
          We make the best Flower table tops in india
        </h1>
        <Link
          href={"/products"}
          className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full bg-secondary px-8 text-sm font-medium text-secondary-foreground ring-offset-background transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Hero;
