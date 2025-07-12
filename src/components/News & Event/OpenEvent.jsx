import React from 'react'
import childrenImg from '../../assets/images/png/children-img.png'
import { AdminIcon, BtnArrow, CommentIcon, TimeIcon } from '../../utils/icon'
import Heading from '../common/Heading'
import Description from '../common/Description'
import Button from '../common/Button'

const OpenEvent = () => {
  return (
    <>
      <div className="px-12.5 mt-12.5">
        <div className="max-w-[1052px] mx-auto">
          <div className="relative">
            <img src={childrenImg} alt="children-img" />
            <div className="bg-[#00000080] max-w-[652px] absolute bottom-0"><Heading className="uppercase text-white py-[15px] pl-2.5 pr-[41px] font-bold leading-[150%]" children="The School end of The session party" /></div>
          </div>
          <h5 className='text-[#FF9534] font-bold pt-5 leading-[100%] uppercase'>Top Event</h5>
          <div className="flex items-center gap-12.5 mt-2.5">
            <div className="flex gap-2.5 items-center">
              <AdminIcon />
              <p className='font-semibold text-xl leading-8 text-black'>Admin</p>
            </div>
            <div className="flex gap-2.5 items-center">
              <TimeIcon />
              <p className='font-semibold text-xl leading-8 text-black'>September 10, 2021</p>
            </div>
            <div className="flex gap-2.5 items-center">
              <CommentIcon />
              <p className='font-semibold text-xl leading-8 text-black'>No Comment</p>
            </div>
          </div>
          <Description className="!text-xl leading-[35px] text-black pt-5" children="Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod temp incit ut labore dolore magnaaliqua. computer science students Ut enim ad minimveniam. Lorem ipsum." />
          <Button className="flex items-center gap-5 text-xl leading-[21px] !py-[19px] mt-7 arrow-icon">Read more <BtnArrow /></Button>
        </div>
      </div>
    </>
  )
}

export default OpenEvent