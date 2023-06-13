import React from 'react'
import data from './../../data/sampleData.json'
import EventCard from '@/components/EventCard'
import SearchFilter from '@/components/SearchFilter'

function EventsMainPage() {
  return (
    <div className='max-w-screen min-h-screen overflow-x-auto bg-emerald-50'>
      <div className='mt-[64px] mx-auto w-[80%] flex flex-col items-center gap-3 '>
        <SearchFilter />
         {data.map(event => <EventCard key={event.id} event={event}/> )}
      </div>
   </div>
  )
}

export default EventsMainPage
