import { HomeIcon, LightbulbIcon, PackageIcon } from "lucide-react";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import AdminNav from "./_components/AdminNav";

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
    <div className="relative min-h-screen">
      <div className="h-full px-6 pt-28 lg:mx-auto lg:w-[1024px]">
        {children}
      </div>
      <AdminNav />
    </div>
  );
}
