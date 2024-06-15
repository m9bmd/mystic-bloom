import BestProducts from "@/components/BestProducts";
import CustomerReviews from "@/components/CustomerReviews";
import FloatingNav from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import MadeInIndia from "@/components/MadeInIndia";
import ProductCarousel from "@/components/ProductCarousel";
import Smile from "@/components/svg/smile";
import {
  FacebookIcon,
  Instagram,
  InstagramIcon,
  Lightbulb,
  LightbulbIcon,
  TwitterIcon,
  X,
  Youtube,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="max-w-[1224px] lg:mx-auto">
      <MadeInIndia />
      <ProductCarousel />
      <CustomerReviews />
      <BestProducts />
      <Passion />
      </div>

    </main>
  );
}

function Passion({}) {
  return (
    <div className="info relative">
      <Smile className="w-24 h-24 absolute right-5 top-2 hover:rotate-12 hover:-translate-y-2 " />

      <h2 className="info-label">made with passion</h2>
      <div className="info-description">
        <p className="info-text">
          our products are made with love, care and passion from our beloved
          artists who are obsessed with flowers.
        </p>
      </div>
    </div>
  );
}


