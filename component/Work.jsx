import assets, { workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Work = ({isDark}) => {
  return (
    <motion.div
     initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration:1}}
    className='w-full  px-[12%] py-10 scroll-my-20' id='work'>
        <motion.h4
         initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration:0.3, delay:0.5}}
        className='text-center mb-2 text-lg'>My Portfolio</motion.h4>
            <motion.h2
             initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration:0.5, delay:0.5}}
            className=' text-center text-5xl'>My latest work</motion.h2>

            <motion.p
             initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration:0.7, delay:0.5}}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, eius dolore 
            </motion.p>
            <motion.div
             initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration:0.9, delay:0.6}}
            className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
                {workData.map((project, index)=>(
                    <motion.div
                    whileHover={{scale:1.05}}
                    transition = {{duration: 0.3}}
                    key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative 
                    cursor-pointer group' style={{backgroundImage: `url(${project.bgImage})`}} >
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                            <div>
                                <a href={project.link} target='_blank'><Image src={assets.send_icon} alt='send icon' className='w-5' /></a>
                            </div>
                        </div>
                        
                    </motion.div>
                ))}
            </motion.div>
            <motion.alt
             initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration:1.1, delay:0.5}}
            href="#" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:lg-[#fcf4ff] duration-500 dark:text-white dark:border-white dark:hover:bg-[11001f]'>
                Show more <Image src={isDark? assets.right_arrow_bold_dark: assets.right_arrow_bold} alt='Rght arrow' className='w-4'/>
            </motion.alt>
    </motion.div>
  )
}

export default Work