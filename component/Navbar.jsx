import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDark, setisDark}) => {
    const[isScroll, setisScroll] = useState(false)
    const sideMenu = useRef()
    const openMenu = () =>{
        sideMenu.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () =>{
        sideMenu.current.style.transform = 'translateX(16rem)'
    }
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setisScroll(true)
            }else{  
                setisScroll(false)
            }
        })
    }, [])
    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='' className='w-full'/>
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-[#11001F] dark:shadow-white/20": ""}`}>
                <a href="#home">
                    <h1 className=' font-bold text-3xl'>RabbyCode</h1>
                </a>
                
                <ul className={`hidden md:flex  items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "": "bg-white bg-opacity-50  shadow-sm dark:border dark:border-white/50 dark:bg-transparent"} `}>
                    <li><a href="#home" >Home</a></li>
                    <li><a href="#about-me" >About me</a></li>
                    <li><a href="#services" >Services</a></li>
                    <li><a href="#work" >My Work</a></li>
                    <li><a href="#contact" >Contact</a></li>
                </ul>
                <div className='flex gap-4 items-center'>
                    <button onClick={()=> setisDark(prev =>!prev)}>
                        <Image src={isDark? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
                    </button>
                    <a href="#contact" className='hidden lg:flex items-center gap-3  border border-gray-500 rounded-full px-10 py-2.5'>Contact
                        <Image src={isDark? assets.arrow_icon_dark: assets.arrow_icon} alt='' className='w-3'/>
                    </a>
                    <button onClick={openMenu}  className='block md:hidden ml-3'>
                        <Image src={ isDark? assets.menu_white: assets.menu_black} alt='' className='w-6'/>
                    </button>
                </div>

                {/* ---------modile view------------ */}
                <ul ref={sideMenu} className='flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#11001F]'>
                    <div className='absolute right-6 top-6' onClick={closeMenu} >
                        <Image src={isDark? assets.close_white: assets.close_black} alt='' className='w-5 cursor-pointer ' />   
                    </div>

                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#work">My Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>

    )
}

export default Navbar