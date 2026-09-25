'use client'
import React, { useState } from 'react'
import { createContext } from 'vm'
import { WorkoutType } from '../../../types/type';

export const workoutContext = createContext({})

export default function WorkoutContext({children}: {children: React.ReactNode}) {
  const[plan, setPlan] = useState<WorkoutType[]>([]);
  const[saved, setSaved] = useState<WorkoutType[]>([]);

  const sharedData = {
    plan, setPlan,
    saved, setSaved,
  }

  return (
    <workoutContext.Provider value={sharedData}>
      {children}
    </workoutContext.Provider>
  )
}
