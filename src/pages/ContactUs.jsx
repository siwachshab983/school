import React from 'react'
import Header from '../components/common/Header'
import BreadCrumbs from '../components/common/BreadCrumbs'
import Footer from '../components/common/Footer'
import Heading from '../components/common/Heading'
import { Circle, CircleContact } from '../utils/icon'
import Description from '../components/common/Description'
import { Contact_Us_Data } from '../utils/helper'
import Button from '../components/common/Button'

const ContactUs = () => {
    return (
        <>
            <Header />
            <BreadCrumbs />
            <div className='max-w-[1048px] mx-auto px-3' >
                <div className='relative ml-[43px] '>
                    <Heading className={'sticky z-2'} >Contact us</Heading>
                    <CircleContact className={'absolute -top-[5px] z-1 -left-[40px]'} />
                </div>
                <div className='max-w-[1048px] mt-[30px] shadow rounded-tl-[10px] rounded-bl-[10px] py-[30px] p-3 sm:pl-[30px]  sm:pr-[27px]'>
                    <div className='flex lg:flex-row flex-col gap-[60px] '>
                        <div className='lg:w-1/2 w-full'>
                            <Heading className={'!font-bold text-black uppercase max-sm:!text-[29px] '}>Contact Details</Heading>
                            <Description className={'lg:max-w-[421px] max-sm:!text-[15px]  my-[30px]'}>You can always reach us via following contact details. We will give our best to reach you as possible.</Description>
                            <div className='flex flex-col gap-[46px]'>
                                {Contact_Us_Data.map((item, index) => (
                                    <div key={index} className={`flex gap-[10px] sm:gap-[20px] ${index !== Contact_Us_Data.length - 1 ? 'items-center' : ''} `}>
                                        <item.icon className={'w-[25px] h-[25px]'} />
                                        <Description className={'font-medium !text-[14px] max-[390px]:text-base sm:text-[20px]'}>{item.info} </Description>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <div className='max-w-[481px] bg-[#FF9534] p-3 sm:p-[30px] rounded-[10px]'>
                                <div className='mb-4'>
                                    <Description className={'text-white sm:!text-xl mb-3'}>Your Name </Description>
                                    <input type="text" placeholder='John doe' className='bg-white rounded-[10px] max-w-[421px] w-full px-[10px] py-4 placeholder:font-normal text-[14px] text-[#808080]' />
                                </div>
                                <div className='mb-4'>
                                    <Description className={'text-white sm:!text-xl mb-3'}>Your Email </Description>
                                    <input type="text" placeholder='Info@gmail.com' className='bg-[#EDEDED] rounded-[10px] max-w-[421px] w-full px-[10px] py-4 placeholder:font-normal text-[14px] text-[#808080]' />
                                </div>
                                <div className='mb-4'>
                                    <Description className={'text-white sm:!text-xl mb-3'}>Your Email </Description>
                                    <textarea className='rounded-[10px] min-h-[76px] p-3 bg-white max-w-[421px] w-full text-[#C0C0C0] resize-none'>Type your message here...</textarea>
                                </div>
                                <div className='flex items-end justify-end'><Button className={'border border-white rounded-[5px] max-sm:!p-2'}>Send message</Button></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs