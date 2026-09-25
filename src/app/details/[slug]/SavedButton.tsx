'use client'
import { WorkoutContext } from '@/components/context/WorkoutContextPage';
import { Bookmark } from 'lucide-react'
import { useContext } from 'react';
import { WorkoutType } from '../../../../types/type';

interface WorkoutProps{
  workout:WorkoutType;
}

export default function SavedButton({workout}:WorkoutProps) {
  const context = useContext(WorkoutContext);
  const {saved, setSaved} = context;

  const handleAdd = () => {
    setSaved([...saved, workout]);
  }
  return (
    <button onClick={() => handleAdd()} className='btn rounded-md border border-gray-700'><Bookmark /> Save for latter</button>
  )
}

