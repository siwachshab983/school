import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-white shadow-md'>
            {/* <img src="" alt="" /> */}
            <a className='font-semibold text-2xl' href="#">Rapkhen</a>
            <ul className='flex gap-5'>
                {
                    ["Home", "About us", "Management", "News & Event", "Gallery", "Contact us"].map((link, index) => (
                        <li key={index}>
                            <NavLink className={'text-[20px] font-semibold'} to={`/${link.replace(/\s+/g, '').toLowerCase()}`}>{link}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Header