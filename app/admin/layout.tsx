import { HomeIcon, LightbulbIcon, PackageIcon } from "lucide-react";
import Link from "next/link";
import AuthContextProvider from "./_components/AdminContext";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import AdminNav from "./_components/AdminNav";
import AdminContextProvider from "./_components/AdminContext";

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
      <div className="pt-28 px-6 h-full lg:w-[1024px] lg:mx-auto ">
        <AdminContextProvider>{children}</AdminContextProvider>
      </div>
      <AdminNav />
    </div>
  );
}
