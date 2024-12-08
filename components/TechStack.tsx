import { frameworks, prog_lang, Technologies } from '@/data/index'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const TechStack = () => {
  return (
    <div>
        <div className = "text-white text-center mt-20 mb-20">
        <h1 className='heading text-white mb-10'> Tech
            <span className='heading text-purple'> Stack </span>
        </h1>
            
        <h2 className='text-[35px] text-purple'>Programming Languages </h2>
        <InfiniteMovingCards
            items={prog_lang}
            direction="right"
            speed="slow"
            className='mb-10'
        />
        <h2 className='text-[35px] text-purple'> Frameworks & Libraries </h2>
        <InfiniteMovingCards
            items={frameworks}
            direction="right"
            speed="fast"
            className='mb-10'
        />

        <h2 className='text-[35px] text-purple'> Technologies </h2>
        <InfiniteMovingCards
            items={Technologies}
            direction="right"
            speed="slow"
            className='mb-10'
        />

      </div>
      
    </div>
  )
}

export default TechStack
