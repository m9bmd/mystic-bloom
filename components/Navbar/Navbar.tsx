import {
  MenuIcon,
  MilkIcon,
  PackageIcon,
  ShoppingBagIcon,
  UserCogIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { buttonVariants } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

import LogoLink from "./LogoLink";
import ColorContextProvider from "./useColor";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;
  return (
    <div
      className={
        isAdmin
          ? "absolute top-0 left-0 w-full z-20 bg-foreground"
          : "absolute top-0 left-0 w-full z-20 "
      }
    >
      <div className="flex items-center  justify-between  px-6 py-8 lg:px-16  ">
        <LogoLink />
        <div className="flex items-center gap-6 lg:gap-12">
          <AuthPrompt user={user} />
          <Cart />
          <div>
            {isAdmin ? (
              <Link href={"/admin"}>
                <UserCogIcon className="w-6 h-6 text-background" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

function Cart() {
  const cart = [];
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingBagIcon className="w-6 h-6 text-background" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center">
        {cart.length === 0 && (
          <SheetHeader>
            <SheetTitle>Your cart is Empty</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        )}
      </SheetContent>
    </Sheet>
  );
}

async function AuthPrompt({ user }: { user: KindeUser | null }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserIcon className="w-6 h-6 text-background" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {user ? (
          <>
            <DropdownMenuItem className="text-xs font-semibold">
              {user.email}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/api/auth/logout"} className="font-medium">
                logout
              </Link>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <Link href={"/api/auth/login"}>sign in</Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
