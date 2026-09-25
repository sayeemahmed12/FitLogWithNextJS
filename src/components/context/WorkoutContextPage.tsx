'use client'
import React, { createContext, useState } from 'react'
import { WorkoutType } from '../../../types/type';

export const WorkoutContext = createContext({})

export default function WorkoutContextPage({children}: {children: React.ReactNode}) {
  const[plan, setPlan] = useState<WorkoutType[]>([]);
  const[saved, setSaved] = useState<WorkoutType[]>([]);

  const sharedData = {
    plan, setPlan,
    saved, setSaved,
  }

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  )
}
