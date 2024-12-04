import React from 'react'
import {projects} from "@/data";
import { PinContainer } from './ui/3d-pin';
import {FaLocationArrow} from "react-icons/fa";
import Link from 'next/link';
import {FaHome} from "react-icons/fa"
import { GrProjects } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { FloatingNav } from './ui/floating-navbar';

const Projects = () => {
  return (
    // new code
    <div className="py-20 mb-10 mt-10">
      <h1 className="heading">
        A selection of my{" "}
        <span className="text-purple">projects</span>
      </h1>
      <br>
      </br>
      <div className="flex flex-wrap items-center justify-center gap-x-40 gap-y-14 mt-10">
        {projects.map(({ id, title, des, img, link, techStack, learnings }) => (
          <div
            key={id}
            className={`sm:h-[41rem] h-[32rem] lg:min-h-[45rem] flex flex-col items-center justify-center sm:w-96 w-[900vw] bg-gradient-to-tr from-[#1a1d4d] via-[#1d233e] to-[#2a3064] hover:shadow-lg hover:shadow-purple-500 rounded-lg transition-shadow duration-300`}
            
          >
            {/* PinContainer */}
            <PinContainer title={link} href={link}>
              <div className="relative flex flex-1 items-center justify-center sm:w-96 w-[90vw] h-[30vh] overflow-hidden">
                <div className="relative w-full h-full lg:rounded-3xl bg-[#13162d]"></div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0 object-cover"
                />
              </div>
              <h1 className="text-purple text-center font-bold lg:text-2xl md:text-xl text-base">
                <br>
                </br>
                {title}
              </h1>
              <p className="text-center justify-center lg:text-xl lg:font-normal font-light text-sm mb-4">
                <br>
                </br>
                {des}
              </p>
              {/* Tech Stack */}
              <div className="flex justify-center mb-4">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 m-1 text-sm text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full hover:scale-105 transition-transform"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Learnings Section */}
              <div className="text-center text-sm mb-6">
                <strong>What I learned:</strong>
                <p>{learnings}</p>
              </div>
                
              <div className="flex justify-end items-center w-full">
                <p className="justify-between lg:text-xl md:text-xs text-sm text-purple">
                  Check Live Site
                </p>
                <FaLocationArrow className="ms-3" color="CBACF9" />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
    

    // old code
    // <div className='py-20'>
    //     <h1 className='heading'>
    //         A selection of my {' '}
    //         <span className='text-purple'> projects</span>
    //     </h1>
        
    //     <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
    //       {projects.map(({id, title, des, img, link 
    //       }) => (
    //         <div key={id} className=" sm:h-[41rem] h-[32rem] lg:min-h-[40rem] flex flex-col items-center justify-center sm:w-96 w-[800vw]">
    //           <PinContainer title={link} href={link}>
    //             <div className='relative flex flex-1 items-center justify-center sm:w-96 w-[80vw] h-[30vh] mb-10 overflow-hidden'>
    //               <div className='relative w-full h-full lg:rounded-3xl bg-[#13162d]'>
    //               </div>
    //               <img
    //                 src = {img}
    //                 alt = {title}
    //                 className = "z-10 absolute bottom-0 object-cover" 
    //               />
    //             </div>
    //             <h1 className='text-purple text-center font-bold lg:text-2xl md:text-xl text-base'>
    //               {title}
    //             </h1>
    //             <p className='text-center justify-center lg:text-xl lg:font-normal font-light text-sm'>
    //               <br></br>
    //               {des}
    //             </p>
    //             <div>
    //               <br></br>
                
    //             <div className='flex justify-end items-center w-full'>
    //               <p className='justify-between lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
    //               <FaLocationArrow className="ms-3" color="CBACF9"/>
    //             </div>
               

    //             </div>
    //           </PinContainer>
    //         </div>
    //       ))}
    //     </div>
      
    // </div>
  )
}

export default Projects
