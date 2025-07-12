import React from 'react'
import JoinUs from './JoinUs'
import { NAVLINKS } from '../../utils/helper'
import { NavLink } from 'react-router-dom'
import { Compass, Facebook, Instagram, Mail, Phone, Telegram, Twitter, Whatsapp } from "../../utils/icon"

const Footer = () => {
    return (
        <>
            <JoinUs />
            <div className='grid gap-[50px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-[50px] px-5 max-w-[1072px] w-full mx-auto'>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-[30px] font-semibold'>logo</h3>
                    {/* <img src="" alt="" /> */}
                    <p className='text-[20px] leading-[32px]'>Rapkhen is an outstanding Nursery & Primary school targeting educational System, helping Kids to read and write and to establish strong identity.    </p>
                </div>
                <ul className='flex flex-col gap-5'>
                    <li className='font-semibold text-[25px] text-[#FF9534]'>Links</li>
                    {
                        NAVLINKS.map((link, index) => (
                            <li key={index}>
                                <NavLink to={index === 0 ? '/' : `/${link.replace(/\s+/g, '-').toLowerCase()}`} className={({ isActive }) => `text-[20px] max-w-max ${isActive ? 'font-semibold text-[#FF9534]' : ''}`} > {link}</NavLink>
                            </li>
                        ))
                    }
                </ul>
                <ul className='flex flex-col gap-5'>
                     <li className='font-semibold text-[25px] text-[#FF9534]'>Find Us</li>
                    <li>
                        <a className='flex gap-[3px] justify-center items-center' target='_blank' href="mailto:Loremipilum11@gmail.com"><Mail/> Loremipilum11@gmail.com</a>
                    </li>
                    <li className='flex gap-[3px]'>
                        <Phone/>
                        <div className="">
                            <a className='flex gap-[3px] justify-center items-center' target='_blank' href="mailto:Loremipilum11@gmail.com"> Loremipilum11@gmail.com</a>
                         <a className='flex gap-[3px] justify-center items-center' target='_blank' href="mailto:Loremipilum11@gmail.com"> Loremipilum11@gmail.com</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Footer