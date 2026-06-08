import React from 'react'
import {plans} from '../assets/assets'
import {assets} from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"
const BuyCredit = () => {

  const {user} = useContext(AppContext)
  return (
    <motion.div className='min-h-[80vh] text-center pt-14 mb-10'
    initial={{ opacity: 0.2, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}>
        <button className='border border-grey-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
        <h1 className='text-center text-3x1 font-medium mb-6 sm:mb-10'>Choose the Plan</h1>

        <div className='flex flex-wrap justify-center gap-6 text-left'>
          {plans.map((item,index) => (
            <div key={index} className='bg-white drop-shadow-sm  rounded-lg py-12 px-8 text-grey-600 hover:scale-105 transition-transform duration-500'>
              <img  width={40} src={assets.logo_icon} alt="" />
              <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
              <p className='text-sm'>{item.desc}</p>
              <p className='mt-6'> <span className='text-3x1 font-medium'>${item.price}</span> / {item.credits} credits</p>
              <button className='bg-zinc-900 text-white px-10 py-2.5 rounded-full mt-6 hover hover:scale-105 transition-transform duration-00'> {user ? 'Purchase' : 'Get Started'}</button>
            </div>
          ))}
        </div>
    </motion.div>
  )
}

export default BuyCredit