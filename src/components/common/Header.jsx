import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NAVLINKS } from '../../utils/helper';

const Header = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="px-4">
            <div className='flex justify-between relative overflow-x-clip items-center bg-white max-w-[1102px] mx-auto py-[35px]'>
                <NavLink className='font-semibold text-2xl' to="/">Rapkhen</NavLink>
                <ul className={`flex justify-center items-center gap-10 z-50 max-lg:fixed top-0  duration-300 max-lg:bg-white max-lg:w-full max-lg:min-h-screen max-lg:flex-col ${isOpen ? '-right-full' : 'right-0'}`}>
                    {
                        NAVLINKS.map((link, index) => (
                            <li key={index}>
                                <NavLink to={index === 0 ? '/' : `/${link.replace(/\s+/g, '-').toLowerCase()}`} className={({ isActive }) => `text-[20px] max-w-max ${isActive ? 'font-semibold text-[#FF9534]' : ''}`} > {link}</NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div onClick={toggleMenu} className="flex flex-col gap-[5px] w-[25px] z-[60] h-5 lg:hidden cursor-pointer">
                    <span className={`bg-[#FF9534] h-[3px] w-full rounded-full transform transition-all duration-300 ${!isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} ></span>
                    <span className={`bg-[#FF9534] h-[3px] w-full rounded-full transition-all duration-300 ${!isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
                    <span className={`bg-[#FF9534] h-[3px] w-full rounded-full transform transition-all duration-300 ${!isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
                </div>
            </div>
        </div>
    )
}

export default Header