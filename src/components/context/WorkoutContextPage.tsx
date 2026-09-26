'use client'
import React, { createContext, useState } from 'react'
import { StatsType, WorkoutType } from '../../../types/type';

export const WorkoutContext = createContext({})

export default function WorkoutContextPage({children}: {children: React.ReactNode}) {
  const[plan, setPlan] = useState<WorkoutType[]>([]);
  const[saved, setSaved] = useState<WorkoutType[]>([]);
  const [todaysStats, setTodaysStats] = useState<StatsType>({
    exercises: 0,
    minutes: 0,
    calories: 0,
  });

  const [savedStats, setSavedStats] = useState({
    exercises: 0,
    minutes: 0,
    calories: 0,
  });

  const sharedData = {
    plan, setPlan,
    saved, setSaved,
    todaysStats, setTodaysStats,
    savedStats, setSavedStats,
  }

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  )
}
