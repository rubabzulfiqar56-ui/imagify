import React from 'react'
import {assets} from '../assets/assets'
import { motion } from "motion/react"
const Description = () => {
  return (
    <motion.div
    initial={{ opacity: 0.2, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-2x1 sm:text-4x1 font-semibold mb-2 text-xl '>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>
        Transform your ideas into stunning visuals with our cutting-edge AI technology.
      </p>

      <div className='flex flex-col gap-10 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt="description" className='w-80 xl:w-96rounded-lg shadow-md' />
        <div>
            <h2 className='text-2xl font-medium mt-6'>Introducing AI powered Image Generator</h2>
            <p className='text-gray-500 mt-4 justify'>Experience the future of creativity with our AI-powered image generator. Transform your ideas into stunning visuals effortlessly. Whether you're a designer, marketer, or content creator, our tool empowers you to bring your vision to life in seconds. Say goodbye to creative blocks and hello to endless possibilities with our cutting-edge technology.</p>
            <p className='text-gray-500 mt-4'>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to characters designs and portraits, even concepts that don't yet exist can be visualized effortlessly.</p>

        </div>
      </div>
    </motion.div>
  )
}

export default Description