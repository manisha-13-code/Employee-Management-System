import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center text-white'>
        <div className='border-2 border-emerald-600 rounded-xl'>
            <form
            onSubmit={(e)=> {
                submitHandler(e)
            }}
             className='flex flex-col items-center justify-center p-20'>
                <input
                value={email}
                onChange={(e)=> {
                    setEmail(e.target.value)
                }}
                 required className='border-2 text-xl border-emerald-600 py-3 px-6 rounded-full bg-transparent outline-none placeholder:text-white' type="email" placeholder="Enter your email"/>
                <input
                value={password}
                onChange={(e)=> {
                    setPassword(e.target.value)
                }}
                 required className='border-2 text-xl border-emerald-600 py-3 px-6 rounded-full mt-5 bg-transparent outline-none placeholder:text-white' type="password" placeholder="Enter password"/>
                <button className='border-none outline-none bg-emerald-600 py-3 px-6 rounded-full mt-7 w-full text-lg'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
