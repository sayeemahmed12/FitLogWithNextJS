import type{ WorkoutType } from '@/types/type';
import React from 'react'
import WorkoutCard from './WorkoutCard';

const getWrokouts = async() => {
  const res =await fetch("https://api.abcz.workers.dev/api/fitlog");

  if(!res.ok){
    throw new Error("Failed to fetch data?")
  }
  const data = res.json();
  return data;
}

export default async function Library() {
  const workouts = await getWrokouts();

  return (
    <div className='m-10'>
      <h1 className='font-oswald text-3xl font-bold'>THE LIBRARY</h1>
      <p className='text-gray-400'>Twelve lifts covering every major muscle group.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center my-8">
        {workouts.map((workout:WorkoutType) => (
          <WorkoutCard key={workout.id} workout={workout}/>
        ))}
      </div>

    </div>
  )
}
