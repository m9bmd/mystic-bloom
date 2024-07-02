"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

async function getUserEmail() {
    const {getUser} =  getKindeServerSession()
    const user = await getUser()
} 