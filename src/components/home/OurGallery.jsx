import React from 'react';
import galleryIcon from "../../assets/svg/gallery-icon.svg";
import { BtnArrow, GallerySvg } from '../../utils/icon';
import { GALLERY_IMAGES } from '../../utils/helper';
import Button from '../common/Button';
import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const OurGallery = () => {
  const imagesToDisplay = GALLERY_IMAGES.slice(0, 2);

  return (
    <div className="max-w-[1152px] mx-auto px-4 py-10 flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-[50px] md:gap-[30px] sm:gap-5 gap-3">
        <div className="relative overflow-hidden rounded-lg bg-white flex items-center justify-center flex-col py-10">
          <img src={galleryIcon} alt="Gallery Icon" />
        </div>
        {imagesToDisplay.map((imgSrc, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
          >
            <img
              src={imgSrc}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-70"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <GallerySvg />
            </div>
          </div>
        ))}
      </div>
      <NavLink to={'/gallery'}><Button className={'ml-auto mt-10 flex justify-center items-center gap-5'} >More Articles <BtnArrow/></Button></NavLink>
    </div>
  );
};

export default OurGallery;