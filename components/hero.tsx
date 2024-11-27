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
            <Spotlight className = "-top-40 -left-10 md:-left-32 md:-top-40 h-screen" fill="white" />
            <Spotlight className = "top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className = "top-28 left-10 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div className = "text-white text-center">
        <h2 className='heading'>Tanisha Panchal Projects: {' '} <br />
            <span className='text-purple'>from Software to Consulting</span>
        </h2>
        <br></br>

        <div className="flex absolute justify-center items-center left-0 right-0 top-[30%]">
      <div className="max-w-[100vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
        <h2 className="uppercase tracking-widest text-center text-blue-100 max-w-80 text-sm">
          Tanisha Panchal Website
        </h2>
    </div>

    
    </div>
    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
      Hi! Welcome to my portfolio!
    </p>

   

    <div className='text-center top-[50%] md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'> 
      <Link href = "/Projects">
        <MagicButton
          title = "Projects"
          icon = {<FaLocationArrow />}
        />
      </Link>

      
      </div>
    </div>
    
  </div>


    
  )
}

export default Hero
