import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-purple-400 rounded-xl p-5'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-3'>{data.taskDescription}</p>
      <div className='mt-4'>
        <button className='bg-green-600 w-full py-1 rounded'>Complete</button>
      </div>
    </div>
  )
}

export default CompleteTask
