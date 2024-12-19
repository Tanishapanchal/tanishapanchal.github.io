'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import Link from 'next/link'
import Projects from "@/components/Projects"
import { FaLocationArrow } from "react-icons/fa"
import { SparklesCore } from "./ui/sparkles"
import { motion } from "framer-motion"
import { AuroraBackground } from './ui/aurora-background'
import Particles from "react-tsparticles"


const Hero = () => {
  return (
    <section id = 'home'>
    <div>
      {/* Spotlight Effects */}
      <div className="pb-20 pt-36 relative">
        <div className="absolute inset-0">
          <Spotlight
            className="absolute top-0 left-0 h-screen w-[40vw] hover:bg-purple-300 transition-all"
            fill="white"
          />
          <Spotlight className="h-[80vh] w-[50vw] top-10" fill="purple" />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
          <Spotlight
            className="-top-40 right-10 md:-right-32 md:-top-40 h-screen"
            fill="white"
          />
          <Spotlight
            className="-top-100 right-30 md:-right-32 md:-top-40 h-screen"
            fill="pink"
          />
        </div>

        {/* Navigation Bar */}
        <div className="fixed top-0 left-0 w-full flex items-center px-8 py-4">
          <h1 className="text-purple text-2xl font-bold">
            TanishaPanchal<span className="text-white"> ._ </span>
          </h1>
          <div className="fixed top-0 left-0 w-full flex justify-center space-x-8 text-gray-300 text-sm uppercase z-50 p-4">
            <a href = '#home' className="hover:text-purple-500 hover:underline transition duration-300">// home</a>
            <a href = '#about' className="hover:text-purple-500 hover:underline transition duration-300">// about</a>
            <a href = '#projects' className="hover:text-purple-500 hover:underline transition duration-300">// projects</a>
            <a href = '#experience' className="hover:text-purple-500 hover:underline transition duration-300">// experience</a>
            <a href = '#contact' className="hover:text-purple-500 hover:underline transition duration-300">// contact</a>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex relative justify-center items-center mt-20">
          <div className="max-w-[100vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
            <h2 className="uppercase tracking-widest text-center text-blue-100 max-w-80 text-sm">
              Welcome to my portfolio!
            </h2>
            
            {/* <h1 className="text-7xl font-bold leading-tight text-purple text-center mt-4">  Tanisha Panchal </h1> */}
            <TextGenerateEffect
            words="Tanisha Panchal"
            className=""
          />

            <p className="text-center text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
              Junior Computer Science student at the University of Michigan
            </p>

            <div className='w-[40rem] relative'>
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              
              <Link href='#projects'>
                  <MagicButton title="Projects" icon={<FaLocationArrow />} />
              </Link>
              
            </div>
            </div>

            
          </div>
        </div>

        
          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] pointer-events-none"></div>
        </div>
      </div>
      </section>
  )
}

export default Hero
