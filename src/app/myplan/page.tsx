import React from 'react'
import Empty from './Empty'

export default function MyPlan() {
  return (
    <div className="m-10 min-h-screen">
      <h1 className='font-oswald font-bold text-3xl'>MY PLAN</h1>
      <p className='text-gray-400'>Cap of five lifts for today. Finish them, then load more.</p>

      <div className="border bg-[#22263079] border-gray-800 mt-4 flex justify-between p-5 rounded-xl shadow-md">
          <div className="w-[380px]">
              <p className='text-gray-400'>Exercises</p>
              <p className='font-oswald text-4xl font-bold mt-2 text-[#C2F800]'>2</p>
          </div>
          <div className="w-[380px]">
              <p className='text-gray-400'>Minutes</p>
              <p className='font-oswald text-4xl font-bold mt-2'>23</p>
          </div>
          <div className="w-[380px]">
              <p className='text-gray-400'>Calories</p>
              <p className='font-oswald text-4xl font-bold mt-2'>190</p>
          </div>
      </div>

      {/* Tab */}
      <div className="mt-5">
          <div className="tabs tabs-lift">
          <input type="radio" name="my_tabs_3" className="tab font-bold rounded-l-xl bg-[#111317]" aria-label="Today's Plan" />
          <div className="mt-5 tab-content bg-[#11131789] border-base-300 p-6">
            <Empty />
          </div>


          <input type="radio" name="my_tabs_3" className="tab font-bold rounded-r-xl bg-[#111317]" aria-label="Saved" />
          <div className="mt-5 tab-content bg-[#11131789] border-base-300 p-6">Tab content 3</div>
          </div>
      </div>
    </div>
  )
}
