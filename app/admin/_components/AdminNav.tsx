import { HomeIcon, LightbulbIcon, PackageIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AdminNav = () => {
  return (
    <div className="fixed bottom-0 left-0  w-full  z-40">
    <div className=" py-6 rounded-t-3xl flex justify-around bg-primary text-primary-foreground lg:w-[900px] lg:mx-auto">
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
  )
}

export default AdminNav