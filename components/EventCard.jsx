import React from 'react'
import { MdDateRange, MdOutlineLocationOn, MdOutlineArrowRightAlt } from "react-icons/md";


function EventCard({event}) {
  return (
    <div key={event.id} className='w-[520px] rounded-xl bg-white drop-shadow-lg flex'>
      <img src={event.image} className='w-56 object-cover rounded-l-lg'/>
      <div className='w-full p-3 flex flex-col gap-2'>
        <h1 className='font-bold text-slate-700'>{event.title}</h1>
        <span className='flex items-center gap-2'><MdDateRange/><p className='text-sm'>{(new Date(event.date)).toDateString()}</p></span>
        <span className='flex items-center'><MdOutlineLocationOn/><p className='text-sm'>{event.location}</p></span>
        <button className='bg-emerald-400 self-end px-3 text-white rounded-lg py-1 flex gap-1 items-center'>Explore event<span className='text-lg'><MdOutlineArrowRightAlt/></span></button>
      </div>
    </div>
  )
}

export default EventCard