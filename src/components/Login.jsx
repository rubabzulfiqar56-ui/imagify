import React from 'react'
import {assets} from '../assets/assets'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"

const Login = () => {
const [state,setState] = useState('Login')
const {setShowLogin} = useContext(AppContext)

useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
},[])


  return (
    <div className=' fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-black/30 flex items-center justify-center'>
      
        <motion.form className='relative bg-white p-10 rounded-xl text-slate-500'
        initial={{ opacity: 0.2, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        >
            <h1 className='text-center text-2x1 font-medium text-neutral-700'>{state}</h1>
            <p>Welcome back! PLease sign in to continue</p>


            {state !== 'Login' && <div className='border px-6 py-2 flex item-center gap-2 rounded-full mt-5'>
                <img src={assets.user_icon} alt="" />
                <input type="text" placeholder='Full Name' className='outline-none text-sm' required/>
            </div>
            }

            <div className='border px-6 py-2 flex item-center gap-2 rounded-full mt-4'>
                <img src={assets.email_icon} alt="" />
                <input type="text" placeholder='Email' className='outline-none text-sm' required/>
            </div>

            <div className='border px-6 py-2 flex item-center gap-2 rounded-full mt-4'>
                <img src={assets.lock_icon} alt="" />
                <input type="password" placeholder='Password' className='outline-none text-sm' required/>
            </div>
            <p className='text-center text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>
            <button className='bg-zinc-900 text-white px-10 py-2.5 rounded-full mt-6 w-full hover:scale-105 transition-transform duration-500'>{state === 'Login' ? 'Login' : 'Sign Up'}</button>

            {state === 'Login' ?
                <p className='text-center mt-5'>Dont have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')}>Sign Up</span></p>
            :
                <p className='text-center mt-5'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>Sign In</span></p>
            }

            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' />
        </motion.form>

    </div>
  )
}

export default Login