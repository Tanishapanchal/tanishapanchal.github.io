'use client'
import React from 'react'

const MagicButton = ({
    title, icon, href, handleClick} : {
        title: string; icon: React.ReactNode; href?: string; handleClick?: () => void;
    }
) => {
  

  return (
    <div className="relative inline-flex h-12 w-[200px] md:w-22 overflow-hidden rounded-lg p-[1px] focus:outline-none md:mt-10"
    onClick={handleClick}
  >
    <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 py-3 text-sm font-medium text-white backdrop-blur-3xl gap-2">
      {title}
      <div className="left-0">
        {icon}
      </div>
      
    </span>
</div>
  )
}

export default MagicButton
