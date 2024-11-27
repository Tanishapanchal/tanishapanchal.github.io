import React from 'react'
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from './ui/bento-grid'

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
      {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.d}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
          ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
