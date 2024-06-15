"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { UserCogIcon, UserIcon } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoLink from "./LogoLink";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Cart from "./Cart";
type NavProps = {
  isAdmin: boolean;
  user: KindeUser | null;
};
const Navbar = ({ isAdmin, user }: NavProps) => {
  const pathname = usePathname();
  const isRootPath = pathname === "/";

  return (
    <div
      className={`absolute left-0 top-0 z-20 w-full ${
        isAdmin ? "bg-foreground" : !isRootPath && "bg-neutral-900"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-8 lg:px-16">
        <LogoLink />
        <div className="flex items-center gap-6 lg:gap-12">
          <AuthPrompt user={user} />
          <Cart />
          {isAdmin && (
            <Link href="/admin">
              <UserCogIcon className="h-6 w-6 text-background" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const AuthPrompt = ({ user }: { user: KindeUser | null }) => (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <UserIcon className="h-6 w-6 text-background" />
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
            <Link href="/api/auth/logout" className="font-medium">
              logout
            </Link>
          </DropdownMenuItem>
        </>
      ) : (
        <DropdownMenuItem>
          <Link href="/api/auth/login">sign in</Link>
        </DropdownMenuItem>
      )}
    </DropdownMenuContent>
  </DropdownMenu>
);
