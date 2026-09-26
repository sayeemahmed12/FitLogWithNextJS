'use client';
import { CalendarDays } from 'lucide-react';
import React, { useContext } from 'react';
import { WorkoutType } from '../../../../types/type';
import { WorkoutContext } from '@/components/context/WorkoutContextPage';
import { toast, ToastContainer } from 'react-toastify';

interface WorkoutProps {
  workout: WorkoutType;
}

export default function AddToPlan({ workout }: WorkoutProps) {
  const context = useContext(WorkoutContext);
  const {
    plan, setPlan,
    setTodaysStats,
  } = context;

  const handleAdd = () => {
    const exists = plan.find((val) => val.id === workout.id);
    
    if (exists){
      toast.error(`${workout.name} already exists.`);
      return;
    }

    setPlan((prev) => [...prev, workout]);

    setTodaysStats((prev) => ({
      exercises: prev.exercises + 1,
      minutes: prev.minutes + workout.duration,
      calories: prev.calories + workout.caloriesBurned,
    }));

    toast.success(`${workout.name} added to today's plan.`)
  };

  return (
      <button onClick={handleAdd} className="btn bg-[#C2F700] text-black rounded-md" ><CalendarDays /> Add to today's plan</button>
  );
}