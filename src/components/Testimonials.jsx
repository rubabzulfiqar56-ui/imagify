import React from 'react'
import { testimonialsData } from '../assets/assets'
import {assets} from '../assets/assets'
import { motion } from "motion/react"
const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className='order items-center justify-center my-24 p-6 md:px-28'
    >
      <h1 className='text-3x1 sm:text-4x1 font-semibold mb-2 text-xl text-center'>Customer Testimonials</h1>
      <p className='text-gray-500 mb-12 text-center'>What our customers say about us</p>
      <div className='flex flex-wrap justify-center gap-6'>
        {testimonialsData.map((testimonials,index) => (
            <div key={index} className='bg-white/20 p-6 rounded-lg shadow-md w-70 cursor-pointer hover:scale-[1.02] transition-all duration-300'>
                <div className='flex flex-col items-center'>
                <img src={testimonials.image} className='rounded-full w-14 '/>
                <h2 className='text-xl font-semibold mt-3'>{testimonials.name}</h2>
                <p className='text-gray-600 mt-4'>" {testimonials.role} "</p>
                <div className='flex mb-4'>
                    {Array(testimonials.stars).fill().map((item,index) => (
                        <img key={index} className='w-4' src={assets.rating_star} alt="star" />
                    ))}
                </div>
                <p className='text-gray-500 text-sm text-center'>{testimonials.text}</p>
            </div>
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials