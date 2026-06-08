import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }

  return (
    <motion.div
      className='flex flex-col justify-center items-center text-center my-20'
      initial={{ opacity: 0, y: 80 }}   
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >

      <motion.div
        className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}  
      >
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="header image" />
      </motion.div>

      <motion.h1
        className='text-4xl font-bold text-gray-900 tracking-tight max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }} 
      >
        Turn Text to <span className='text-blue-500'>images</span>, in seconds
      </motion.h1>

      <motion.p
        className='text-gray-500 mt-6 text-sm sm:text-base'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }} 
      >
        Create stunning images with our AI-powered text-to-image generator. Transform your ideas into visuals effortlessly.
      </motion.p>

      <motion.button
        className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full cursor-pointer font-medium'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }} 
        onClick={onClickHandler}
      >
        Generate Images
        <img className='h-6' src={assets.star_group} alt="Star group" />
      </motion.button>

    </motion.div>
  )
}

export default Header