import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function SearchFilter() {
    const Months = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"]
    const currentYear = new Date().getFullYear()
    const Years = Array.from({length:3}, (_, index) => currentYear - index)
    const router = useRouter()

    const initialFilter = {
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    }

    const [filterValue, setFilterValue] = useState(initialFilter)

    const valueChange = (e) => {
      setFilterValue({...filterValue, [e.target.name] : e.target.value})
    }

    const findEvents = (event) => {
      event.preventDefault()
      console.log(filterValue)
      router.push({
        pathname: `/events/${filterValue.year}/${filterValue.month}`,
      })

    }
  return (
    <div className='h-[64px] w-full bg-emerald-400 flex items-center'>
        <div className='w-[80%] mx-auto flex  justify-center gap-24 items-center'>
          <label className='flex gap-2 items-center text-lg font-bold'>
            Month
            <select name='month' defaultValue={filterValue.month+1} onChange={e => valueChange(e)} className='w-36 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                {Months.map((month,index) => <option key={index} value={index+1}>{month}</option> )}
            </select>
          </label>
          <label className='flex gap-2 items-center text-lg font-bold'>
            Year
            <select name='year' defaultValue={filterValue.year}  onChange={e => valueChange(e)} className='w-36 p-2.5 bg-slate-700 rounded-lg'>
                {Years.map((year,index) => <option key={index} value={year}>{year}</option> )}
            </select>
          </label>
          <button onClick={e => findEvents(e)} className='bg-white w-36 rounded-lg px-6 py-2 text-emerald-700 font-bold'>Find</button>
        </div>
    </div>
  )
}

export default SearchFilter