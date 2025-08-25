import assets from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDark}) => {
  return (
    <div className='mt-20'>
        <div>
            <h1 className='text-3xl text-center mb-2 font-bold'>RabbyCode.</h1>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDark? assets.mail_icon_dark: assets.mail_icon} alt='' className='w-6'/>abeebrasaq02@gmail.com
            </div>
        </div>
        <div className='sm:flex items-center justify-between text-center border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <h1 className='text-2xl font-semibold'>RabbyCode.</h1>
            <ul className='flex justify-center items-center gap-10 justify-centermt-4 mt-5 sm:mt-0'>
                <li><a href="https://github.com/devrabby" target='_blank'>Github</a></li>
                <li><a href="www.linkedin.com/in/rasaq-abeeb-105734243" target='_blank'>LinkedIn</a></li>
                <li><a href="https://x.com/HolyShina001?t=a1_DaV-EwYfXJVtdh-4Yfg&s=09" target='_blank'>Twitter</a></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Footer