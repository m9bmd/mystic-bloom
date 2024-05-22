"use client"
import React from 'react'
import Logo from '../Logo'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useColor } from './useColor'



const LogoLink = () => {

  return (
    <div className="flex items-center ">
    <Link href={"/"}>
    <Logo className="cursor-pointer" />
    </Link>
  </div>
  )
}

export default LogoLink