import { Bookmark, CalendarDays } from 'lucide-react'
import Image from 'next/image'

interface paramsProps{
  params: Promise<{ slug: string }>
}

export default async function DetailsPage({params}:paramsProps) {
  const {slug} = await params

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${slug}`)
  const workout = await res.json()

  return (
    <div className="mx-5 my-15 ">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10">

        <div className="">
          <Image
            src={workout.image}
            alt='workoutImage'
            width={500}
            height={600}
            className='h-full object-cover md:min-w-100 xl:min-w-120 rounded-xl'
          />
        </div>

        <div className="flex flex-col gap-2 max-w-[588px]">
          <h1 className="font-oswald text-4xl font-bold">{workout.name.toUpperCase()}</h1>
          <p className="text-gray-400 mt-2">{workout.description}</p>

          <div className="flex gap-2 mt-4">
            {workout.muscleGroups.map((muscle:string, indx:number) => (
              <span className='bg-[#C2F700] text-black px-3 py-1 rounded-2xl font-bold' key={indx}>{muscle}</span>
            ))}
          </div>

          <div className="bg-[#1E2330] mt-4 border border-gray-700/50 rounded-xl text-sm font-bold text-gray-400">
            <div className="flex justify-between border-b p-3 border-gray-700/30">
              <p>EQUIPMENT</p>
              <p>{workout.equipment}</p>
            </div>

            <div className="flex justify-between border-b p-3 border-gray-700/30">
              <p>DIFFICULTY</p>
              <p>{workout.difficulty}</p>
            </div>

            <div className="flex justify-between border-b p-3 border-gray-700/30">
              <p>SETS</p>
              <p>{workout.sets}</p>
            </div>

            <div className="flex justify-between border-b p-3 border-gray-700/30">
              <p>REPS</p>
              <p>{workout.reps}</p>
            </div>

            <div className="flex justify-between border-b p-3 border-gray-700/30">
              <p>DURATION</p>
              <p>{workout.duration}</p>
            </div>

            <div className="flex justify-between border-b p-3 border-gray-700/30">
              <p>CALORIES</p>
              <p>{workout.caloriesBurned}</p>
            </div>

            <div className="flex justify-between border-b p-3 border-gray-700/30">
              <p>RATING</p>
              <p>{workout.rating}</p>
            </div>
          </div>


          <div className="mt-4">
            <h3 className='font-bold text-xl mb-2'>INSTRUCTIONS</h3>
            {workout.instructions.map((instruction:string, indx:number) => (
              <p className='text-gray-300 mb-2' key={indx}>{indx+1}. {instruction}</p>
            ))}
          </div>


        <div className="flex flex-wrap gap-4">
          <button className='btn bg-[#C2F700] text-black rounded-md'><CalendarDays /> Add to today's plan</button>
          <button className='btn rounded-md border border-gray-700'><Bookmark /> Save for latter</button>
        </div>

        </div>
      </div>
    </div>
  )
}
