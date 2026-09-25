'use client'
import { CalendarDays } from 'lucide-react'
import React, { useContext } from 'react'
import { WorkoutType } from '../../../../types/type'
import { WorkoutContext } from '@/components/context/WorkoutContextPage';

interface WorkoutProps{
  workout:WorkoutType;
}

export default function PlanButton({workout}:WorkoutProps) {
  const context = useContext(WorkoutContext);
  const {plan, setPlan} = context;

  const handleAdd = () => {
    setPlan([...plan, workout]);
  }

  return (
    <button onClick={() => handleAdd()} className='btn bg-[#C2F700] text-black rounded-md'><CalendarDays /> Add to today's plan</button>
  )
}
