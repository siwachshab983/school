import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../../utils/helper';
import galleryIcon from "../../assets/svg/gallery-icon.svg";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const getImagesForPage = () => {
    if (currentPage === 1) return GALLERY_IMAGES.slice(0, 14);
    if (currentPage === 2) return GALLERY_IMAGES.slice(0, 9);
    if (currentPage === 3) return GALLERY_IMAGES.slice(0, 12);
    return [];
  };

  const imagesToDisplay = getImagesForPage();

  return (
    <div className="max-w-[1152px] mx-auto px-4 py-10">
      <div className='bg-[#FF9534] py-[25px] px-[50px]'>
        <div className='flex justify-between'>
          <h1 className='text-white text-[30px] leading-[13px] font-medium'>Gallery</h1>
          <div className='flex items-center gap-[7px]'>
            <a href="#" className='text-white text-[16px]'>Home</a>
            <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 3.76266L4.375 1M7 3.76266L4.375 6M7 3.76266L1 3.76422" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <a href="#" className='text-white text-[16px]'>Gallery</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] my-[50px]">
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
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 39C31.6127 39 39 31.6127 39 22.5C39 13.3873 31.6127 6 22.5 6C13.3873 6 6 13.3873 6 22.5C6 31.6127 13.3873 39 22.5 39Z"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M46 45L36 35"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 22.1905H22.5M29 22.1905H22.5M22.5 22.1905V29V16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-between'>
        {/* Page Number Buttons */}
        <div className='flex gap-5'>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`py-5 px-[30px] border border-[#FF9534] rounded-lg text-[16px] font-medium 
                ${currentPage === page
                  ? 'bg-[#FF9534] text-white'
                  : 'text-[#FF9534] hover:bg-[#FF9534] hover:text-white transition-all duration-300'
                }`}
            >
              {page}
            </button>
          ))}
        </div>

        <div className='flex gap-5'>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`py-5 px-[30px] border rounded-lg text-[16px] font-medium 
              ${currentPage === 1
                ? 'bg-[#FF9534] text-white cursor-not-allowed'
                : 'text-[#FF9534] border-[#FF9534] bg-white transition-all duration-300'
              }`}
          >
            Prev
          </button>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 3))}
            disabled={currentPage === 3}
            className={`py-5 px-[30px] border rounded-lg text-[16px] font-medium 
              ${currentPage === 3
                ? 'bg-[#FF9534] text-white cursor-not-allowed'
                : 'text-[#FF9534] border-[#FF9534] bg-white transition-all duration-300'
              }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
