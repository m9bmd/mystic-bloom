import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'
import Address from './_components/Address'

const page = async () => {
  const {getUser, getIdToken} = getKindeServerSession()
  return (
    <div className=''>
      
    </div>

  )
}

export default page