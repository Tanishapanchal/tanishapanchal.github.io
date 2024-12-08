'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import Link from 'next/link';
import Projects from "@/components/Projects"
import {FaLocationArrow} from "react-icons/fa";


const navItems = [
  {
    name: "Home",
  },
  {
    name: "Projects",
  },
];

const Hero = () => {
  return (
    <div className = "pb-20 pt-36">
        <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div>
            <Spotlight className="-top-40 right-10 md:-right-32 md:-top-40 h-screen" fill="white" />
            <Spotlight className = "-top-100 right-30 md:-right-32 md:-top-40 h-screen" fill="pink" />
        </div>

        

      <nav className="fixed top-0 left-0 w-full flex items-center px-8 py-4">
          <h1 className="text-purple text-2xl font-bold">TanishaPanchal
            <span className='text-white'> ._ </span>
          </h1>
          <div className="flex-grow flex justify-center space-x-8 text-gray-300 text-sm uppercase -translate-x-12">
            <a href="#home">// home</a>
            <a href="#expertise">// about</a>
            <a href="#work">// projects</a>
            <a href="#experience">// experience</a>
            <a href="#contact">// contact</a>
          </div>
      </nav>


        <div className="flex relative justify-center items-center left-0 right-0 top-[30%] mt-20">
        <div className="max-w-[100vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
          <h2 className="uppercase tracking-widest text-center text-blue-100 max-w-80 text-sm">
           Welcome to my portfolio!
          </h2>
        </div>
        </div>
{/* 
        <div className="text-center ">
    <h1 className=" text-7xl font-bold leading-tight text-purple">
      <Typical
        steps={['Tanisha Panchal', 2000, 'Software Developer', 3000]}
        loop={Infinity}
        wrapper="span"
      />
      </h1> */}
     
        <div className = "text-white text-center top-5">
        <h1 className=' text-7xl font-bold leading-tight text-purple'>Tanisha Panchal
        </h1>
        <br></br>

      
    
    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
      Junior Computer Science student at the University of Michigan
    </p>

  

    <div className='text-center top-[50%] md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'> 
      <Link href = "/Projects">
        <MagicButton
          title = "Projects"
          icon = {<FaLocationArrow />}
        />
      </Link>

      <br> 

      </br>
      <br>
      </br>

      <br>
      </br>
      <div className = "text-white text-center mt-60">
        <span className='heading text-purple'>About </span>
      </div>
    </div>

    
    <section className="about-me bg-[#13162d] text-white py-20 px-8">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Image Section */}
    <div className="relative">
      <img 
        src="headshot.jpg" 
        alt="Tanisha Panchal" 
        className="rounded-lg shadow-lg object-cover w-full h-auto"
      />
    </div>
    <div>
      {/* Optional Overlay */}
      <div className="absolute text-left top-0 left-0 w-full h-full bg-purple-500 opacity-30 rounded-lg hover:opacity-0 transition duration-300"></div>
    
      <h2 className="text-4xl text-left font-bold text-white mb-4">About Me</h2>
      <p className="text-lg text-left leading-relaxed mb-4">
        Hi! I'm <span className="text-purple font-bold">Tanisha Panchal</span>, 
        a passionate Software Developer and junior studying Computer Science student at the 
        <span className="font-bold text-blue-500"> University of Michigan</span>.
      </p>
      <p className="text-lg text-left leading-relaxed mb-4">
        With a strong interest in <span className="text-purple-300">software engineering</span>, 
        I thrive on creating unique and innovative solutions to complex problems.
        I love exploring jazz music , 
        cooking, and astronomy. Thanks for visiting my site!
      </p>
      
    </div>
  </div>
</section>
    
  </div>  
  

</div>
    
  )
}

export default Hero
