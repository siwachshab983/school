import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import { Who_We_Are_Data } from '../../utils/helper'


const OurMission = () => {
  return (
    <div className='max-w-[1074px] mx-auto px-3 mb-[50px]'>
      <div className='gap-[50px] flex flex-col -mx-3'>
        {Who_We_Are_Data.map((item, index) => (
          <div key={index} className=''>
            <div className='flex lg:gap-[50px] gap-[30px] lg:flex-row flex-col '>
              <div className='lg:w-1/2 w-full flex justify-center px-3 sm:px-0'>
                <div className='w-[501px] h-[425px] bg-[#FF9534] flex items-center justify-center'>
                  <div className='relative'>
                    <Heading className='!text-white sticky z-2 '>{item.title}</Heading>
                    <item.icon className='absolute -top-[5px] z-1 -left-[40px] ' />
                  </div>
                </div>
              </div>
              <div className='lg:w-1/2 w-full  flex items-center px-3 lg:px-0'>
                <Description className={'text-[20px] leading-[35px] font-normal'}>{item.description} </Description>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurMission