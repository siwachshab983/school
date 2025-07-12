import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from '../common/Button'
import { BtnArrow } from '../../utils/icon';
import { Autoplay, Pagination } from 'swiper/modules';


const HomeTopSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Autoplay, Pagination]}
        loop={true}
        pagination={{ clickable: true }}
        className="mySwiper max-w-[1072px] w-full mx-auto !pb-10"
      >
        <SwiperSlide className='bg-[url(./assets/images/png/home-top-slider-img-1.jpg)] bg-center bg-no-repeat bg-cover min-h-[498px] w-full after:absolute after:top-0 after:right-0 after:bg-black after:opacity-50 relative after:w-full after:h-full after:content-[""] !flex justify-center items-center flex-col'>
          <div className="max-w-[850px] w-full">
            <h2 className='text-white text-[41px] relative z-20 max-w-[850px] font-medium'>A wonderful <span className='text-[#FF9534] uppercase'>first</span> out of home learning <span className='text-[#FF9534] uppercase'>Experience</span> For you Child.</h2>
            <Button className="flex items-center gap-5 text-xl leading-[21px] !py-[19px] mt-4 sm:mt-7 relative z-20 ">Read more <BtnArrow /></Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-[url(./assets/images/png/home-top-slider-img-2.jpg)] bg-center bg-no-repeat bg-cover min-h-[498px] w-full after:absolute after:top-0 after:right-0 after:bg-black after:opacity-50 relative after:w-full after:h-full after:content-[""] !flex justify-center items-center flex-col'>
          <div className="max-w-[850px] w-full">
            <h2 className='text-white text-[41px] relative z-20 max-w-[850px] font-medium'>A wonderful <span className='text-[#FF9534] uppercase'>first</span> out of home learning <span className='text-[#FF9534] uppercase'>Experience</span> For you Child.</h2>
            <Button className="flex items-center gap-5 text-xl leading-[21px] !py-[19px] mt-4 sm:mt-7 relative z-20 ">Read more <BtnArrow /></Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default HomeTopSlider