import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='p-10 h-screen w-full'>
            <Header changeUser={props.changeUser} />
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default AdminDashboard
