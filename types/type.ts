export interface WorkoutType {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}


export type StatsType = {
  exercises: number;
  minutes: number;
  calories: number;
};

export type SortOption = "duration" | "caloriesBurned" | "rating";