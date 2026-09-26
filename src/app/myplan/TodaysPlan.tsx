import { WorkoutContext } from '@/components/context/WorkoutContextPage'
import Image from 'next/image';
import { useContext, useState } from 'react'
import { SortOption, WorkoutType } from '../../../types/type';
import { Check, Clock, Flame, Star, X} from 'lucide-react';
import Link from 'next/link';
import { toast } from 'react-toastify';

interface props{
  sortWith:SortOption
}

export default function TodaysPlan({sortWith}:props) {
  const context = useContext(WorkoutContext);
  const {
    plan, setPlan, 
    setTodaysStats
  } = context;

  const sortedPlan = [...plan].sort((a, b) => a[sortWith] - b[sortWith])
  
  const [done, setDone] = useState<WorkoutType[]>([]);

  const handleDelete = (id: number) => {
    const deletedWorkout = plan.find((val) => val.id === id);

    if (!deletedWorkout) return;

    toast.error(`${deletedWorkout.name} has been removed from the Today's list.`)
    setPlan((prev) => prev.filter((val) => val.id !== id));

    setTodaysStats((prev) => ({
      exercises: prev.exercises - 1,
      minutes: prev.minutes - deletedWorkout.duration,
      calories: prev.calories - deletedWorkout.caloriesBurned,
    }));
  };

  const addToDone = (workout:WorkoutType) => {
    setDone((prev) => prev.filter((val) => val.id !== workout.id))
    toast.error(`${workout.name} has been removed from the 'Marked as Done' list.`)

  }
  
  const removeFromDone = (workout:WorkoutType) => {
    setDone((prev) => [...prev, workout]);
    toast.success(`Congratulations, your ${workout.name} is complete.`)
  }

  return (
    <div className='grid grid-cols-1 gap-10'>
      {sortedPlan.map((val:WorkoutType, indx:number) => (
        <div key={indx} className="flex flex-col gap-5 lg:flex-row justify-between items-center bg-[#14171eb5] rounded-xl p-5">

          <div className="flex flex-col md:flex-row gap-5 items-center"> 
            <div className="">
              <Image 
                src={val.image}
                alt={val.name}
                width={300}
                height={300}
                className='w-50 h-30 object-cover rounded-md'
              />
            </div>

            <div className="text-center md:text-start">
              <h2 className='font-oswald font-bold text-2xl'>{val.name}</h2>
              <p className='text-gray-400'>{val.equipment}</p>
              
              <div className="">
                <ul className='flex items-center gap-4 text-gray-400 mt-4'>
                  <li className='flex items-center gap-2 text-sm sm:text-md'><Clock color='#CCFF00' size={17}/> {val.duration} min</li>
                  <li className='flex items-center gap-2 text-sm sm:text-md'><Flame color='#CCFF00' size={17}/> {val.caloriesBurned} kcal</li>
                  <li className='flex items-center gap-2 text-sm sm:text-md'><Star color='#CCFF00' size={17}/> {val.rating}</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <Link href={`/details/${val.id}/`} className='btn border-gray-700 rounded-2xl'>View Details</Link>

            {done.includes(val) ? 
              <button
                className='btn bg-white text-black font-bold rounded-2xl'
                onClick={() => addToDone(val)}
              >
                Done
              </button>
            :
              <button
                className='btn bg-[#CCFF00] text-black font-bold rounded-2xl'
                onClick={() => removeFromDone(val)}
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
