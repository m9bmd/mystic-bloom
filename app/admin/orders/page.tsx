import React from 'react'
import NoItems from '../_components/NoItems'

const page = () => {
  return (
    <div className='space-y-8  lg:w-[900px] lg:mx-auto'>
      <h2 className='text-xl font-medium'>Orders</h2>
      <NoItems name='orders' description='Orders are empty'/>
    </div>
  )
}

export default page