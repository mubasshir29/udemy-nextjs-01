import React from 'react'
import Link from 'next/link'

function SearchFilter() {
    const Months = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"]
    const currentYear = new Date().getFullYear()
    const Years = Array.from({length:100}, (_, index) => currentYear - index)
  return (
    <div className='h-[64px] w-full bg-emerald-400 flex items-center'>
        <div className='w-[80%] mx-auto flex  justify-between items-center'>
          <label>
            Month
            <select className=''>
                {Months.map((month,index) => <option value={index}>{month}</option> )}
            </select>
          </label>
          <label>
            Year
            <select>
                {Years.map((year,index) => <option value={index}>{year}</option> )}
            </select>
          </label>
        </div>
    </div>
  )
}

export default SearchFilter