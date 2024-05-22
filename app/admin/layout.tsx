import { HomeIcon, LightbulbIcon, PackageIcon } from "lucide-react";
import Link from "next/link";
import AuthContextProvider from "./_components/AdminContext";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user?.email !== process.env.ADMIN_EMAIL) {
    redirect("/");
  }
  return (
    <div className="min-h-screen  relative ">
      <AdminNav />
      <div className="pt-28 px-6 h-full">
        <AuthContextProvider>{children}</AuthContextProvider>
      </div>
    </div>
  );
}

function AdminNav({}) {
  return (
    <div className="fixed bottom-0 left-0  w-full ">
      <div className=" py-6 rounded-t-3xl flex justify-around bg-zinc-200 ">
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
}
