'use client'

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState
} from 'react';

import { StatsType, WorkoutType } from '../../../types/type';

type WorkoutContextType = {
  plan: WorkoutType[];
  setPlan: Dispatch<SetStateAction<WorkoutType[]>>;

  saved: WorkoutType[];
  setSaved: Dispatch<SetStateAction<WorkoutType[]>>;

  todaysStats: StatsType;
  setTodaysStats: Dispatch<SetStateAction<StatsType>>;

  savedStats: StatsType;
  setSavedStats: Dispatch<SetStateAction<StatsType>>;
};

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

export default function WorkoutContextPage({children}: {children: React.ReactNode}) {
  const [plan, setPlan] = useState<WorkoutType[]>([]);
  const [saved, setSaved] = useState<WorkoutType[]>([]);

  const [todaysStats, setTodaysStats] = useState<StatsType>({
    exercises: 0,
    minutes: 0,
    calories: 0,
  });

  const [savedStats, setSavedStats] = useState<StatsType>({
    exercises: 0,
    minutes: 0,
    calories: 0,
  });

  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
    todaysStats,
    setTodaysStats,
    savedStats,
    setSavedStats,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
}