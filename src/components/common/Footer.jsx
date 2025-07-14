import React from 'react'
import JoinUs from './JoinUs'
import { FOOTER_SOCIAL_LINKS, NAVLINKS } from '../../utils/helper'
import { NavLink } from 'react-router-dom'
import { Compass, Facebook, Instagram, Mail, Phone, Telegram, Twitter, Whatsapp } from "../../utils/icon"

const Footer = () => {
    return (
        <>
            <JoinUs />
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] py-[50px] px-5 max-w-[1072px] w-full mx-auto'>
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
                    <li className='text-[20px] leading-[33px] flex gap-[6px] '>
                        <Compass />
                        7HXF+4HF, Kalirawan, Haryana 125052
                    </li>
                    <li>
                        <a className='md:hidden flex gap-[3px] text-[20px] leading-[33px] items-center' target='_blank' href="mailto:Loremipilum11@gmail.com"><Mail /> Loremipilum11@gmail.com</a>
                    </li>
                    <li className='flex gap-[3px]'>
                        <Phone />
                        <div className="">
                            <a className='flex gap-[3px] justify-center text-[20px] leading-[33px] items-center' target='_blank' href="tel:+234 805 029 1265"> +234 805 029 1265</a>
                            <a className='flex gap-[3px] justify-center text-[20px] leading-[33px] items-center' target='_blank' href="tel:+234 907 228 0656"> +234 907 228 0656</a>
                        </div>
                    </li>
                </ul>
                <ul className='flex flex-col gap-5'>
                    <li className='font-semibold text-[25px] text-[#FF9534]'>Social Contact</li>
                    {
                        FOOTER_SOCIAL_LINKS.map((link, index) => (
                            <li key={index} className='flex gap-3 items-center'>
                                <a href={link.link} target='_blank' className='flex gap-5 items-center text-[20px] leading-[33px]'>
                                    {link.icon === "<Facebook />" && <Facebook />}
                                    {link.icon === "<Instagram />" && <Instagram />}
                                    {link.icon === "<Twitter />" && <Twitter />}
                                    {link.icon === "<Whatsapp />" && <Whatsapp />}
                                    {link.icon === "<Telegram />" && <Telegram />}
                                    {link.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Footer