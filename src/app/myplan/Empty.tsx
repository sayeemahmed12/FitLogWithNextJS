import Link from 'next/link'
import React from 'react'

export default function Empty() {
  return (
    <div className='flex min-h-[30vh] flex-col justify-center items-center'>
        <h1 className='font-oswald font-bold text-2xl'>NOTHING HERE YET</h1>
        <p className='text-gray-400 mt-2'>Browse the library and add a lift to get today moving.</p>
        <button className='btn bg-[#C2F700] text-black mt-5 rounded-3xl'><Link href={"/"}>Go to workouts</Link></button>
    </div>
  )
}
