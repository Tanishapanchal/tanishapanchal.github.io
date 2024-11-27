import React from 'react'
import {projects} from "@/data";
import { PinContainer } from './ui/3d-pin';
import {FaLocationArrow} from "react-icons/fa";
import Link from 'next/link';


const Projects = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            A selection of my {' '}
            <span className='text-purple'> projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
          {projects.map(({id, title, des, img, link 
          }) => (
            <div key={id} className=" sm:h-[41rem] h-[32rem] lg:min-h-[40rem] flex flex-col items-center justify-center sm:w-96 w-[800vw]">
              <PinContainer title={link} href={link}>
                <div className='relative flex flex-1 items-center justify-center sm:w-96 w-[80vw] h-[30vh] mb-10 overflow-hidden'>
                  <div className='relative w-full h-full lg:rounded-3xl bg-[#13162d]'>
                  </div>
                  <img
                    src = {img}
                    alt = {title}
                    className = "z-10 absolute bottom-0 object-cover" 
                  />
                </div>
                <h1 className='text-purple text-center font-bold lg:text-2xl md:text-xl text-base'>
                  {title}
                </h1>
                <p className='text-center justify-center lg:text-xl lg:font-normal font-light text-sm'>
                  <br></br>
                  {des}
                </p>
                <div>
                  <br></br>
                
                <div className='flex justify-end items-center w-full'>
                  <p className='justify-between lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                  <FaLocationArrow className="ms-3" color="CBACF9"/>
                </div>
               

                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default Projects
