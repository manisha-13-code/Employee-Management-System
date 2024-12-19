import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 h-48 '>
        <div className='bg-red-500 mb-2 py-2 px-5 flex justify-between rounded font-medium'>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active task</h5>
            <h5 className='w-1/5'>Completed</h5>
            <h5 className='w-1/5'>Failed</h5>
        </div>
       <div id='tasklist' className='h-[80%] overflow-auto '>
       {userData.map(function(elem, idx) {
            return  <div key={idx} className=' border-2 border-emerald-600 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-lg font-medium' >{elem.firstname}</h2>
            <h3 className='w-1/5 text-lg font-medium text-green-400'>{elem.taskCounts.newTask}</h3>
            <h5 className='w-1/5 text-lg font-medium text-blue-400'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 text-lg font-medium text-red-400'>{elem.taskCounts.Failed}</h5>
        </div>
        })}
       </div>
    </div>
  )
}

export default AllTask
