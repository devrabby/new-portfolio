'use client'
import About from "@/component/About";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Navbar from "@/component/Navbar";
import Services from "@/component/Services";
import Work from "@/component/Work";
import { useEffect, useState } from "react";

export default function Home() {
  const[isDark, setisDark] = useState(true);
  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setisDark(true)
    }else{
      setisDark(false)
    }
  },[])
  useEffect(()=>{
    if(isDark){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = ''
    }
  },[isDark])
  return (
    <>
      <Navbar isDark={isDark} setisDark={setisDark}/>
      <Header  isDark={isDark} setisDark={setisDark}/>
      <About  isDark={isDark} setisDark={setisDark}/>
      <Services  isDark={isDark} setisDark={setisDark}/>
      <Work  isDark={isDark} setisDark={setisDark}/>
      <Contact  isDark={isDark} setisDark={setisDark}/>
      <Footer isDark={isDark} setisDark={setisDark}/>
    </>
  );
}
