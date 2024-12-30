"use client";
import React from "react";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { FloatingNav } from "./ui/floating-navbar";

const Projects = () => {
  return (
    <section id="projects">
      <div className="py-10">
        <h1 className="heading text-center text-3xl font-bold mb-8">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-y-40 gap-x-40 mt-10">
          {projects.map((item: any) => (
            <Link
              key={item.id}
              href={item.link}
              className="lg:min-h-[38rem] h-[56rem] flex flex-col items-center justify-start sm:w-96 lg:w-[70rem] relative group cursor-pointer rounded-3xl border border-white transform transition-transform duration-300 hover:scale-105 p-5 bg-[#13162D]"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[40vh] lg:h-[40vh] mb-6">
                {/* Project Rectangle with Border */}
                <div
                  className="relative w-full h-full inline-block overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                ></div>
                <img
                  src={item.img}
                  alt={`${item.title} Cover`}
                  className="z-10 max-h-full max-w-full object-cover absolute top-6"
                />
              </div>

              <h2 className="font-bold text-purple text-center lg:text-2xl md:text-xl text-base line-clamp-2">
                {item.title}
              </h2>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm text-center mt-2 mx-6"
                style={{
                  color: "#BEC1DD",
                }}
              >
                {item.des}
              </p>

              {/* Tech Stack Section */}
              <div className="tech-stack mt-5 bg-[#29293D] p-4 rounded-2xl w-full">
                <h4 className="text-purple font-bold text-lg mb-3 text-center">
                  Tech Stack
                </h4>
                <ul className="flex flex-wrap justify-center gap-2">
                  {item.techStack.map((tech: string, index: number) => (
                    <li
                      key={index}
                      className="bg-[#1E2138] text-[#BEC1DD] py-2 px-4 rounded-full text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>


              {/* "What I Learned" Section */}
              <div className="what-i-learned mt-8 p-6 bg-[#29293D] rounded-2xl shadow-lg w-full">
                <h4 className="font-extrabold text-2xl text-purple text-center mb-4">
                  What I Learned
                </h4>
                <ul className="text-base lg:text-lg text-[#BEC1DD] leading-8 text-left list-disc pl-6">
                  {item.learnings.map((point: string, index: number) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* <div className="flex items-center justify-center mt-7">
                <div className="flex items-center space-x-2">
                  {item.icons.map((Icon: any, index: any) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Icon className="text-white w-5 h-5" />
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="flex items-center justify-center mt-6">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-[#6c5ce7] p-4 hover:bg-[#5a4fb3] transition-colors duration-300 shadow-lg cursor-pointer">
                  <div className="flex items-center space-x-2 text-center">
                    <p className="text-white lg:text-xl md:text-xs text-sm font-semibold">
                      View More
                    </p>
                    <FaLocationArrow className="text-white" />
                  </div>
                </div>
              </div>
            </div>



              {/* Optional: Add a subtle overlay or additional hover effects */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300 rounded-3xl"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
