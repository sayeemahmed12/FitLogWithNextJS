'use client'
import { useState, useContext } from 'react';
import Empty from './Empty'
import { WorkoutContext } from '@/components/context/WorkoutContextPage';
import TodaysPlan from './TodaysPlan';
import Saved from './Saved';
import { SortOption } from '../../../types/type';

export default function MyPlan() {
  const context = useContext(WorkoutContext);
  const {plan, saved,todaysStats, savedStats} = context;  
  const [activeTab, setActiveTab] = useState("today");

const [sortWith, setSortWith] = useState<SortOption>("duration");

  return (
    <div className="m-3 md:m-10 min-h-screen">
      <h1 className='font-oswald font-bold text-3xl'>MY PLAN</h1>
      <p className='text-gray-400'>Cap of five lifts for today. Finish them, then load more.</p>

      <div className="border bg-[#22263079] border-gray-800 mt-4 flex justify-between p-5 rounded-xl shadow-md">
          <div className="w-[380px]">
              <p className='text-gray-400'>Exercises</p>
              <p className='font-oswald text-4xl font-bold mt-2 text-[#C2F800]'>{activeTab === 'today' ? todaysStats.exercises : savedStats.exercises}</p>
          </div>
          <div className="w-[380px]">
              <p className='text-gray-400'>Minutes</p>
              <p className='font-oswald text-4xl font-bold mt-2'>{activeTab === 'today' ? todaysStats.minutes : savedStats.minutes}</p>
          </div>
          <div className="w-[380px]">
              <p className='text-gray-400'>Calories</p>
              <p className='font-oswald text-4xl font-bold mt-2'>{activeTab === 'today' ? todaysStats.calories : savedStats.calories}</p>
          </div>
      </div>

      {/* tabs */}
      <div className="mt-5">
        <div className="tabs tabs-lift">
          <input 
            type="radio" 
            name="my_tabs_3" 
            className="tab font-bold rounded-l-xl bg-[#111317]" 
            aria-label="Today's Plan"       
            checked={activeTab === "today"}
            onChange={() => setActiveTab("today")}
          />

          <div className="mt-5 tab-content bg-[#11131789] border-base-300 p-6">
            {plan.length === 0 ?
              <Empty />
            :
            <TodaysPlan sortWith={sortWith}/>
            }
          </div>


          <input
            type="radio"
            name="my_tabs_3"
            className="tab font-bold rounded-r-xl bg-[#111317]"
            aria-label="Saved"
            checked={activeTab === "saved"}
            onChange={() => setActiveTab("saved")}
          />

          <div className="mt-5 tab-content bg-[#11131789] border-base-300 p-6">
            {saved.length === 0 ?
              <Empty />
            :
              <Saved sortWith={sortWith}/>
            }
          </div>

          {/* sort functionlity */}
          <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 items-end sm:items-center justify-end w-full -mt-10">
            <p className='text-gray-400'>Sort By</p>

            <div className="">
              <select name="sort" value={sortWith} 
                onChange={(e) => setSortWith(e.target.value as SortOption)}
                className="border border-gray-800 outline-none p-2 rounded-xl"
              >
                <option value="duration" className="bg-[#111317] text-white">Duration</option>
                <option value="caloriesBurned" className="bg-[#111317] text-white">Calories</option>
                <option value="rating" className="bg-[#111317] text-white">Rating</option>
              </select>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
