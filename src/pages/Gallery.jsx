import React, { useState } from 'react'
import Header from '../components/common/Header'
import BreadCrumbs from '../components/common/BreadCrumbs'
import Footer from '../components/common/Footer'
import { GALLERY_IMAGES } from '../utils/helper'
import galleryIcon from "../assets/svg/gallery-icon.svg";
import { GallerySvg } from '../utils/icon'

function getPaginationPages(current, total) {
    const pages = [];

    if (total <= 5) {
        for (let i = 1; i <= total; i++) {
            pages.push(i);
        }
    } else {
        if (current <= 3) {
            pages.push(1, 2, 3, 4, '...', total);
        } else if (current >= total - 2) {
            pages.push(1, '...', total - 3, total - 2, total - 1, total);
        } else {
            pages.push(1, '...', current - 1, current, current + 1, '...', total);
        }
    }
    return pages;
}

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = currentPage === 1 ? 11 : 12;

    const galleryIconCount = 1;
    const totalImages = GALLERY_IMAGES.length - galleryIconCount;
    const totalPages = Math.max(1, Math.ceil(totalImages / imagesPerPage) + 1);
    const getImagesForPage = () => {
        if (currentPage === 1) {
            return GALLERY_IMAGES.slice(0, imagesPerPage + galleryIconCount);
        } else {
            const start = galleryIconCount + (currentPage - 2) * imagesPerPage;
            const end = start + imagesPerPage;
            return GALLERY_IMAGES.slice(start, end);
        }
    };
    const imagesToDisplay = getImagesForPage();
    const paginationPages = getPaginationPages(currentPage, totalPages);
    const isLastPage = currentPage === totalPages;
    return (
        <>
            <Header />
            <BreadCrumbs />
            <div className="max-w-[1152px] mx-auto px-4 py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-[50px] md:gap-[30px] sm:gap-5 gap-3 mb-[50px]">
                    {currentPage === 1 && (
                        <div className="relative overflow-hidden rounded-lg bg-white flex items-center justify-center flex-col py-10">
                            <img src={galleryIcon} alt="Gallery Icon" />
                        </div>
                    )}
                    {imagesToDisplay.map((imgSrc, index) => {
                        if (currentPage === 1 && index === 0) return null;

                        return (
                            <div
                                key={currentPage === 1 ? index : index + (currentPage - 1) * imagesPerPage}
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
                        );
                    })}
                </div>
                <div className="flex sm:flex-row flex-col gap-y-10 justify-between items-center">
                    <div className="flex gap-2">
                        {paginationPages.map((page, idx) =>
                            page === '...' ? (
                                <span
                                    key={idx}
                                    className="sm:py-5 sm:px-3 p-2 text-[#FF9534] select-none cursor-pointer"
                                >
                                    ...
                                </span>
                            ) : (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentPage(page)}
                                    className={`sm:py-5 sm:px-[30px] px-4 py-3 border border-[#FF9534] rounded-lg text-[16px] font-medium ${currentPage === page
                                        ? 'bg-[#FF9534] text-white'
                                        : 'text-[#FF9534] hover:bg-[#FF9534] hover:text-white transition-all duration-300'
                                        }`}
                                >
                                    {page}
                                </button>
                            )
                        )}
                    </div>

                    <div className="flex gap-5">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`py-5 px-[30px] border rounded-lg text-[16px] font-medium ${currentPage === 1
                                ? 'bg-[#FF9534] text-white cursor-not-allowed'
                                : 'text-[#FF9534] border-[#FF9534] bg-white transition-all duration-300'
                                }`}
                        >
                            Prev
                        </button>

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={isLastPage}
                            className={`py-5 px-[30px] border rounded-lg text-[16px] font-medium ${isLastPage
                                ? 'bg-[#FF9534] text-white cursor-not-allowed'
                                : 'text-[#FF9534] border-[#FF9534] bg-white transition-all duration-300'
                                }`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Gallery;
