import Link from "next/link";
import Logo from "./Logo";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export function Footer({}) {
  return (
    <footer className="bg-foreground p-4 text-background">
      <div className="space-y-12">
        <div className="flex flex-col gap-6">
          <Logo className="text-4xl" />
          <div className="flex gap-4">
            <Link href={"/#"}>
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link href={"/#"}>
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href={"/#"}>
              <YoutubeIcon className="h-5 w-5" />
            </Link>
            <Link href={"/#"}>
              <FacebookIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="description-label text-lg">Useful Links</h2>
          <div className="flex flex-col gap-4 text-sm font-extralight">
            <Link href={"/"}>Contact</Link>
            <Link href={"/"}>Deliveries and returns</Link>
            <Link href={"/"}>About Bloomy</Link>
          </div>
        </div>
        <div className="text-xs text-neutral-400">2024 Bloomy</div>
      </div>
    </footer>
  );
}
