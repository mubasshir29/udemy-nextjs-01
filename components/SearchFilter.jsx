import React from 'react'
import Link from 'next/link'

function SearchFilter() {
    const Months = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"]
    const currentYear = new Date().getFullYear()
    const Years = Array.from({length:3}, (_, index) => currentYear - index)
  return (
    <div className='h-[64px] w-full bg-emerald-400 flex items-center'>
        <div className='w-[80%] mx-auto flex  justify-between items-center'>
          <label className='flex gap-3 items-center'>
            Month
            <select className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                {Months.map((month,index) => <option key={index} value={index}>{month}</option> )}
            </select>
          </label>
          <label className='flex gap-3 items-center'>
            Year
            <select className='p-2.5 bg-slate-700 rounded-lg'>
                {Years.map((year,index) => <option key={index} value={index}>{year}</option> )}
            </select>
          </label>
        </div>
    </div>
  )
}

export default SearchFilter