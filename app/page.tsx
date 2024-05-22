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
      <MadeInIndia />
      <ProductCarousel />
      <CustomerReviews />
      <BestProducts />
      <Passion />
      <div className="bg-foreground text-background p-4">
        <div className="space-y-12">
          <div className="flex flex-col gap-6">
            <Logo className="text-4xl" />
            <div className="flex gap-4">
              <Link href={"/#"}>
                <InstagramIcon className="w-5 h-5" />
              </Link>
              <Link href={"/#"}>
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link href={"/#"}>
                <YoutubeIcon className="w-5 h-5" />
              </Link>
              <Link href={"/#"}>
                <FacebookIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="description-label text-lg">Useful Links</h2>
            <div className="text-sm font-extralight  flex flex-col gap-4">
              <Link href={"/"}>Contact</Link>
              <Link href={"/"}>Deliveries and returns</Link>
              <Link href={"/"}>About Bloomy</Link>
            </div>
          </div>
          <div className="text-xs text-neutral-400  ">2024 Bloomy</div>
        </div>
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


