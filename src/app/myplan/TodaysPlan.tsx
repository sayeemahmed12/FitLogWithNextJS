import { WorkoutContext } from '@/components/context/WorkoutContextPage'
import Image from 'next/image';
import { useContext, useState } from 'react'
import { WorkoutType } from '../../../types/type';
import { Check, Clock, Flame, Star, X} from 'lucide-react';
import Link from 'next/link';

export default function TodaysPlan() {
  const context = useContext(WorkoutContext);
  const {
    plan, setPlan, 
    setTodaysStats
  } = context;
  
  const [done, setDone] = useState<number[]>([]);

  const handleDelete = (id: number) => {
    const deletedWorkout = plan.find((val) => val.id === id);

    if (!deletedWorkout) return;

    setPlan((prev) => prev.filter((val) => val.id !== id));

    setTodaysStats((prev) => ({
      exercises: prev.exercises - 1,
      minutes: prev.minutes - deletedWorkout.duration,
      calories: prev.calories - deletedWorkout.caloriesBurned,
    }));
  };

  return (
    <div className='grid grid-cols-1 gap-10'>
      {plan.map((val:WorkoutType, indx:number) => (
        <div key={indx} className="flex justify-between bg-[#14171eb5] rounded-xl p-5">

          <div className="flex gap-5 items-center"> 
            <div className="">
              <Image 
                src={val.image}
                alt={val.name}
                width={300}
                height={300}
                className='w-50 h-30 object-cover rounded-md'
              />
            </div>

            <div className="">
              <h2 className='font-oswald font-bold text-2xl'>{val.name}</h2>
              <p className='text-gray-400'>{val.equipment}</p>
              
              <div className="mt-5 border-t border-gray-800">
                <ul className='flex items-center gap-4 text-gray-400 mt-4'>
                  <li className='flex items-center gap-2'><Clock color='#CCFF00' size={17}/> {val.duration} min</li>
                  <li className='flex items-center gap-2'><Flame color='#CCFF00' size={17}/> {val.caloriesBurned} kcal</li>
                  <li className='flex items-center gap-2'><Star color='#CCFF00' size={17}/> {val.rating}</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="flex gap-2 items-center">
            <Link href={`/details/${val.id}/`} className='btn border-gray-700 rounded-2xl'>View Details</Link>

            {done.includes(val.id) ? 
              <button
                className='btn bg-white text-black font-bold rounded-2xl'
                onClick={() => setDone((prev) => prev.filter((id) => id !== val.id))}
              >
                Done
              </button>
            :
              <button
                className='btn bg-[#CCFF00] text-black font-bold rounded-2xl'
                onClick={() => setDone((prev) => [...prev, val.id])}
              >
              <Check /> Mark as Done 
              </button>
            }

            <button onClick={() => handleDelete(val.id)} className='btn text-gray-500'><X /></button>
          </div>
        </div>
      ))}

    </div>
  )
}
