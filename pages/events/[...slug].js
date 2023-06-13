import React from 'react'
import { useRouter } from 'next/router'
import data from './../../data/sampleData.json'
import EventCard from '@/components/EventCard'

function FilteredEvents() {

  const router = useRouter()
  console.log(router.query)
  const {year, month} = router.query
  console.log("Year:",year, "Month:",month)

  const filteredData = data.filter(event => {
    const newDate = new Date(event.date)
    if(newDate.getFullYear() == year && newDate.getMonth() == month){
      return event
    }
    //console.log(newDate.getMonth())
  }) 
  return (
    <div className='max-w-screen min-h-screen overflow-x-auto bg-emerald-50'>
      <div className='mt-[64px] mx-auto w-[80%] flex flex-col items-center gap-3 '>
        {filteredData && filteredData.map(event => <EventCard key={event.id} event={event} />)}
      </div>
   </div>
  )
}

export default FilteredEvents