'use client'
import { useContext } from 'react'
import { WorkoutContext } from '../context/WorkoutContextPage'
import Link from 'next/link';

export default function NavBtn() {
  const context = useContext(WorkoutContext);
  if(!context) return;
  const {plan, saved} = context;

  return (
    <div className="flex gap-2 sm:gap-5 font-semibold sm:mr-10">
      <Link href={'/myplan'}>Plan <span className='bg-[#C2F800] py-0.5 px-2 rounded-full text-black ml-1'>{plan.length}</span> </Link>
      <Link href={'/myplan'}>Saved <span className='border border-gray-600 py-0.5 px-2 rounded-full ml-1'>{saved.length}</span> </Link>
    </div>
  )
}
