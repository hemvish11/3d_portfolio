import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies,technologiesMobile } from '../constants';

const Tech = () => {
  return (
    <>
    <div className='lg:flex lg:flex-wrap justify-center gap-10 hidden lg:visible'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
    <div className='flex flex-wrap justify-center gap-10 lg:hidden'>
      {technologiesMobile.map((technology)=>(
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech,"");