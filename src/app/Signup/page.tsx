import React from 'react'
import Mainheader from '../Component/Mainheader'
import Mainfooter from '../Component/Mainfooter'
import Image from 'next/image'
import { Button } from '@mui/material'
import Link from 'next/link'

const Signup = () => {
  return (
    <div>
        <Mainheader/>
        <div className='h-[781px] w-[1305px] mt-14 mb-14 flex justify-items-start justify-between items-center '>
      <div>
        <Image className='w-[800px] h-[781px] bg-cover object-cover ' alt='' width={500} height={700} src={'/Assets/login.jpg'}/>
      </div>
      <div className='w-[371px] text-left space-y-5 h-[530px]'>
      <h1 className='font-semibold text-[30px]'>Create an Account</h1>
      <h2>Enter your details below</h2>
      <div className='mt-5 space-y-10'>
        <input className='bg-transparent underline decoration-gray-400 decoration-[15px] underline-offset-[8px]' type="text"  placeholder='Name'/>
        <input className='bg-transparent underline decoration-gray-400 decoration-[15px] underline-offset-[8px]' type="text"  placeholder='Email or Phone Number'/>
        <input className='bg-transparent underline decoration-gray-400 decoration-[15px] underline-offset-[8px]' type="password"  placeholder='Password'/>

      </div>
      <div className='flex flex-col gap-10 justify-between items-center'>
        <Button className='bg-[#DB4444] text-white w-[360px] h-[56px] rounded-[4px] '>Create Account</Button>
        <Button className='text-[#DB4444] border-2 border-[#DB4444] bg-transparent w-[360px] rounded-[4px] '>Signup with Google</Button>

      </div>        
      <div className='flex  items-center justify-around text-gray-600       p-3'>
        <h3>Already have account?</h3> 
        <Link className='underline ' href={'Login'}>Login</Link>
      </div>
      </div>

    </div>
        <Mainfooter/>
    </div>
  )
}

export default Signup