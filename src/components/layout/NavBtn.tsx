'use client'
import { useContext } from 'react'
import { WorkoutContext } from '../context/WorkoutContextPage'

export default function NavBtn() {
  const context = useContext(WorkoutContext);
  const {plan, saved} = context;

  return (
    <div className="navbar-end hidden min-[380px]:flex gap-2 sm:gap-5 font-semibold sm:mr-10">
      <p>Plan <span className='bg-[#C2F800] py-0.5 px-2 rounded-full text-black ml-1'>{plan.length}</span> </p>
      <p>Saved <span className='border border-gray-600 py-0.5 px-2 rounded-full ml-1'>{saved.length}</span> </p>
    </div>
  )
}
