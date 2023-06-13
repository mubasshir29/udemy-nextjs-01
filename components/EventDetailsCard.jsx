import React from 'react'
import data from './../data/sampleData.json'
import { useRouter } from 'next/router'
import { MdDateRange, MdOutlineLocationOn, MdOutlineArrowRightAlt } from "react-icons/md";


function EventDetails({event}) {


    return (
      <div className='w-[820px] mx-auto rounded-xl bg-emerald-100 drop-shadow-lg flex flex-col gap-6 items-center p-6'>
        <h1 className='text-6xl text-slate-700'>{event.title}</h1>
        <div className='bg-slate-800 w-[80%] p-6 flex justify-around items-center gap-6'>
          <img className='w-[200px] h-[200px] rounded-full object-cover' src={event.image} />
          <div className='text-slate-100 flex flex-col gap-3'>
            <span className='flex items-center gap-3  '><span className='text-xl'><MdDateRange/></span><p className='text-sm'>{(new Date(event.date)).toDateString()}</p></span>
            <span className='flex items-center gap-3'><span className='text-xl'><MdOutlineLocationOn/></span><p className='text-sm '>{event.location}</p></span>
          </div>
        </div>
        <p className='text-slate-700 w-[80%] text-center'>{event.description}</p>
      </div>
    )
  }

export default EventDetails