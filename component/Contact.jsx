import Image from 'next/image'
import assets from '@/assets/assets'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const Contact = () => {
    const[result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending......");

        const formData = new FormData(event.target);

        formData.append("access_key", "0f39a32a-25a4-4b27-b0c3-945ba7e2ef42");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Thank you for your submission!!")
                event.target.reset();
            } else {
                setResult(data.message)
            }
        } catch (error) {
            setResult(error.message)
        }


    };
    return (
        <motion.div
         initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration:1}}
        className='w-full  px-[12%] py-10 scroll-my-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none' id='contact'>
            <motion.h4
             initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration:0.3, delay:0.5}}
            className='text-center mb-2 text-lg'>Connect with me</motion.h4>
            <motion.h2
             initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration:0.5, delay:0.5}}
            
            className=' text-center text-5xl'>My Contact</motion.h2>
            <motion.p
             initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration:0.6, delay:0.5}}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 '>I'm currently available to take new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
            </motion.p>

            <motion.form
             initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration:1, delay:0.5}}
            className='max--w-2xl mx-auto' onSubmit={onSubmit}>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <motion.input
                     initial={{x: -50, opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{duration:0.6, delay:1.1}}
                    type="text" name='name ' placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#11001f] dark:border-white/90' />
                    <motion.input
                     initial={{x: 50, opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{duration:0.6, delay:1.2}}
                    type="email" name='email' placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#11001f] dark:border-white/90' />

                </div>
                <motion.textarea
                 initial={{y: 100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration:0.6, delay:1.1}}
                name="textarea" rows='6' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-[#11001f] dark:border-white/90' required placeholder='Enter your message here....'></motion.textarea>
                <motion.button
                whileHover={{scale:1.05}}
                transition={{duration: 0.5}}
                type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:hover:border-[0.5px] dark:hover:bg-[#11001f] cursor-pointer'>Submit <Image src={assets.right_arrow_white} className='w-4' alt=''/></motion.button>
                <p className='mt-4'>{result}</p>
            </motion.form>
        </motion.div>
    )
}

export default Contact