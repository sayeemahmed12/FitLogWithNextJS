import type{ WorkoutType } from '@/types/type'
import Image from 'next/image'
import { Oswald } from 'next/font/google'
import { ChartPie, Clock, Star } from 'lucide-react';
import Link from 'next/link';

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


interface workoutProps{
  workout:WorkoutType;
}

export default function WorkoutCard({workout}:workoutProps) {
  return (
    <div className="card w-full shadow-sm rounded-2xl bg-[#22263079] border border-gray-800/75">
      <Link href={`/details/${workout.id}`}>
        <figure>
          <Image
            src={workout.image}
            alt="Card" 
            width={500}
            height={300}
            className="h-48 w-full object-cover sm:h-60 lg:h-70"
          />
        </figure>

        <div className="card-body">
          <div className="flex gap-2">
            {workout.muscleGroups.map((muscle:string, indx:number) => (
              <span className='bg-[#C2F800] text-black px-3 py-1 rounded-2xl font-bold' key={indx}>{muscle}</span>
            ))}
          </div>

          <h2 className="font-oswald card-title text-3xl mt-2">{workout.name}</h2>
          <p className='text-gray-400'>{workout.equipment}</p>

          <div className="mt-5 border-t border-gray-800">
            <ul className='flex items-center gap-4 text-gray-400 mt-4'>
              <li className='flex items-center gap-2'><Clock size={17}/> {workout.duration} min</li>
              <li className='flex items-center gap-2'><ChartPie size={17}/> {workout.caloriesBurned} kcal</li>
              <li className='flex items-center gap-2'><Star size={17}/> {workout.rating}</li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  )
}
