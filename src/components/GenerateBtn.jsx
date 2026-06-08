import React, {useContext} from 'react'
import {assets} from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {
  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
  const onClickHandler = () => {
    if(user){
        navigate('/result')
    }
    else{
      setShowLogin(true)
    }
    }
  
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className='pb-16 text-center'
    >
      <h1 className='text-2x1 md:text-3x1 lg:text-4x1 font-semibold mt-4 text-neutral-800 py-6 md:py-16 text-xl text-center'>See the magic. Try Now</h1>
      <button onClick={onClickHandler} className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500 cursor-pointer'>
        Generate Images
        <img className='h-6' src={assets.star_group} alt="magic wand" />
      </button>
    </motion.div>
  )
}

export default GenerateBtn