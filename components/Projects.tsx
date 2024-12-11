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
    <section id='projects'>
<div className="py-10">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-y-40 gap-x-40 mt-10">
        {projects.map((item: any ) => (
          <div
            className="lg:min-h-[32.5rem] h-[40rem] flex items-center justify-center sm:w-96 w-[90vw]"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              href={item.link}
            >
              <div className="relative flex flex-1 items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[40vh] lg:h-[40vh] mb-10">
                <div
                  className="relative w-full h-full inline-block overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 max-h-full max-w-full object-cover absolute top-6"
                />
                <br> 
                </br>
              </div>

              <h1 className="font-bold text-purple text-center lg:text-2xl md:text-xl text-base line-clamp-2">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-5"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Projects
