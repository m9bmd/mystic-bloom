import { HomeIcon, LightbulbIcon, PackageIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const AdminNav = () => {
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full">
      <div className="flex justify-around rounded-t-xl bg-primary py-6 text-primary-foreground lg:mx-auto lg:w-[900px]">
        <Link href={"/admin"} className="">
          <HomeIcon />
        </Link>
        <Link href={"/admin/products"}>
          <div>
            <LightbulbIcon className="rotate-180" />
          </div>
        </Link>
        <Link href={"/admin/orders"}>
          <PackageIcon />
        </Link>
      </div>
    </div>
  );
};

export default AdminNav;
