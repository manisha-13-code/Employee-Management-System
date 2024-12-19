import React, { useEffect, useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  const [username, setUsername] = useState('')

 useEffect(() => {
   if(!props.data) {
    setUsername('Admin')
   } else {
    setUsername(props.data.firstname)
   }
 }, [])

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{username}👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-white py-2 px-4 rounded text-xl'>Logout</button>
    </div>
  )
}

export default Header
