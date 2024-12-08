import Hero from "@/components/hero";
import Projects from "@/components/Projects"
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import {FaHome} from "react-icons/fa"
import { GrProjects } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import Grid from "@/components/Grid"
import Experience from "@/components/Experience"
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className= "min-h-screen relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className = "max-w-7xl w-full">
      <div className = "text-white text-center ">
      
    </div>
        <Hero /> 
        <Projects />
        <Experience />
        <TechStack />
        
      </div>
    </main>
  );
}
