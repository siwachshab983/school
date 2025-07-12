import React from 'react'
import { JoinUsSendButton } from '../../utils/icon'

const JoinUs = () => {
  return (
    <div className='bg-[url(./assets/images/png/join-us-img.png)] min-h-[390px] flex-col gap-25 w-full bg-cover bg-center bg-no-repeat after:opacity-50 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:z-10 flex items-center justify-center text-white z-20 p-5'>
      <h2 className={'text-white max-w-[750px] leading-[50px] text-[30px] font-semibold text-center relative z-20'}>
        Better <span className='text-[#FF9534]'>education</span> for a better world
        An <span className='text-[#FF9534]'>investment</span> in <span className='text-[#FF9534]'>knowledge</span> pays the best <span className='text-[#FF9534]'>interest</span>.
      </h2>
      <div className=" max-w-[900px] w-full relative z-20 overflow-hidden rounded-[40px]">
        <input type="text" className='text-[20px] text-white bg-[#00000066] rounded-[40px] border-[2px] border-white p-5 w-full ' placeholder='Enter e-mail to recieve news letter' />
        <button className='absolute flex justify-center items-center right-0 top-0 bottom-0 bg-[#FF9534] px-[15px] py-5 transition-all duration-300'><JoinUsSendButton/></button>
      </div>
    </div>
  )
}

export default JoinUs