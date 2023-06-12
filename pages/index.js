import Image from 'next/image'
import { Inter } from 'next/font/google'
import data from './../data/sampleData.json'
import EventCard from '@/components/eventCard';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='max-w-screen min-h-screen overflow-x-auto bg-emerald-50'>
      
      <div className='mt-[64px] mx-auto w-[80%] flex flex-col items-center gap-3 p-6'>
         {data.map(event => !event.isFeatured? "": <EventCard key={event.id} event={event}/> )}
      </div>
   </div>
  )
}
