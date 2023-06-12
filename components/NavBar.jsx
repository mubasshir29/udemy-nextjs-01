import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <div className='fixed top-0 left-0 h-[64px] w-full bg-emerald-950 flex items-center'>
        <div className='w-[80%] mx-auto flex  justify-between items-center'>
          <span className='text-white text-2xl font-bold'><Link href="/">Network Events</Link></span>
          <span className='text-white text-lg'><Link href="/events">show all events</Link></span>
        </div>
    </div>
  )
}

export default NavBar