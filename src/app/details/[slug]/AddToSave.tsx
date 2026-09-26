'use client'
import { WorkoutContext } from '@/components/context/WorkoutContextPage';
import { Bookmark } from 'lucide-react'
import { useContext } from 'react';
import { WorkoutType } from '../../../../types/type';
import { toast, ToastContainer } from 'react-toastify';

interface WorkoutProps{
  workout:WorkoutType;
}

export default function AddToSave({workout}:WorkoutProps) {
  const context = useContext(WorkoutContext);
  const {
    saved, setSaved,
    setSavedStats
  } = context;

  const handleAdd = () => {
    const exists = saved.find((val) => val.id === workout.id);

    if (exists){
      toast.error(`${workout.name} already exists.`);
      return;
    }

    setSaved((prev) => [...prev, workout]);

    setSavedStats((prev) => ({
      exercises: prev.exercises + 1,
      minutes: prev.minutes + workout.duration,
      calories: prev.calories + workout.caloriesBurned,
    }));
    toast.success(`${workout.name} saved successfully.`)
  }
  return (
    <button onClick={() => handleAdd()} className='btn rounded-md border border-gray-700'><Bookmark /> Save for latter</button>
  )
}

