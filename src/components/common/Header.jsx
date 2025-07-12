import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='flex justify-between relative overflow-x-clip items-center bg-white max-w-[1054px] mx-auto px-5 py-[35px]'>
            {/* <img src="" alt="" /> */}
            <a className='font-semibold text-2xl' href="#">Rapkhen</a>
            <ul className={`flex justify-center items-center gap-10 z-50 max-lg:absolute top-0  duration-300 max-lg:bg-white max-lg:w-full max-lg:min-h-screen max-lg:flex-col ${isOpen ? '-right-full' : 'right-0'}`}>
                {
                    ["Home", "About us", "Management", "News & Event", "Gallery", "Contact us"].map((link, index) => (
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
    )
}

export default Header