import React from 'react'
import Mainheader from '../Component/Mainheader'
import Mainfooter from '../Component/Mainfooter'
import Image from 'next/image'
import { Button } from '@mui/material'

const Login = () => {
  return (
    <div><Mainheader/>
    <div className='h-[781px] w-[1305px] mt-14 mb-14 flex justify-items-start justify-between items-center '>
      <div>
        <Image className='w-[800px] h-[781px] bg-cover object-cover ' alt='' width={500} height={700} src={'/Assets/login.jpg'}/>
      </div>
      <div className='w-[371px] text-left space-y-5 h-[530px]'>
      <h1 className='font-semibold text-[30px]'>Log in to Exclusive</h1>
      <h2>Enter your details below</h2>
      <div className='mt-5 space-y-10'>
        <input className='bg-transparent underline decoration-gray-400 decoration-[15px] underline-offset-[8px]' type="text"  placeholder='Email or Phone Number'/>
        <input className='bg-transparent underline decoration-gray-400 decoration-[15px] underline-offset-[8px]' type="password"  placeholder='Password'/>

      </div>
      <div className=' flex justify-between items-center'>
        <Button className='bg-[#DB4444] text-white w-[143px] h-[56px] rounded-[4px] '>Login</Button>
        <Button className='text-[#DB4444] bg-transparent w-[160px] h-[24px]  rounded-[4px] '>Forgot Password</Button>

      </div>

      </div>

    </div>
    
    <Mainfooter/>
    </div>
  )
}

export default Login