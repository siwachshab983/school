import React from 'react';
import { useLocation } from 'react-router-dom';
import Heading from './Heading';
import { NAVLINKS } from '../../utils/helper';
import { NavLink } from 'react-router-dom';
import { SmallArrow } from '../../utils/icon';

const BreadCrumbs = () => {
    const location = useLocation();
    const currentPath = location.pathname === '/' ? 'Home' : location.pathname.slice(1).replace(/-/g, ' ');
    const currentPage = NAVLINKS.find(
        (link) => link.toLowerCase() === currentPath.toLowerCase()
    ) || '';

    return (
        <div className="px-5 bg-[#FF9534]">
            <div className="max-w-[1052px] w-full py-[25px] flex justify-between items-center mx-auto">
                <Heading className="text-white">{currentPage}</Heading>
                <div className="flex gap-2 items-center text-white text-[15px]">
                    <NavLink to="/">Home</NavLink>
                    <SmallArrow />
                    <p className="capitalize">{currentPage}</p>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumbs;
