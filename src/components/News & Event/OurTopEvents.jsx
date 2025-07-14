import React, { useState } from 'react';
import { TOPNEWSEVENTS } from '../../utils/helper';
import Heading from '../common/Heading';
import Button from '../common/Button';
import ellipseImg from '../../assets/images/png/ellipse-img.png';
import { CommentIcon, EyeIcon, NextIcon, PrevIcon } from '../../utils/icon';

function getPaginationPages(current, total) {
  const pages = [];

  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (current <= 3) {
      pages.push(2);
      pages.push(3);
      pages.push('...');
    } else if (current >= total - 2) {
      pages.push('...');
      pages.push(total - 2);
      pages.push(total - 1);
    } else {
      pages.push('...');
      pages.push(current - 1);
      pages.push(current);
      pages.push(current + 1);
      pages.push('...');
    }

    pages.push(total);
  }

  return pages.filter((page, index) => pages.indexOf(page) === index);
}

const OurTopEvents = () => {
  const [activePage, setActivePage] = useState(1);

  const itemsPerPageFirst = 8;
  const itemsPerPageOther = 9;

  const totalItems = TOPNEWSEVENTS.length;

  const totalPages =
    totalItems <= itemsPerPageFirst
      ? 1
      : 1 + Math.ceil((totalItems - itemsPerPageFirst) / itemsPerPageOther);

  const getVisibleItems = () => {
    if (activePage === 1) {
      return TOPNEWSEVENTS.slice(0, itemsPerPageFirst);
    }
    const startIndex = itemsPerPageFirst + (activePage - 2) * itemsPerPageOther;
    return TOPNEWSEVENTS.slice(startIndex, startIndex + itemsPerPageOther);
  };

  const visibleItems = getVisibleItems();

  const handlePageClick = (pageNumber) => {
    if (pageNumber !== '...') {
      setActivePage(pageNumber);
    }
  };

  const isLastPage = activePage === totalPages;

  return (
    <div className="px-4 md:px-7.5 bg-[#F2F2F2] mt-7.5 py-12.5">
      <div className="max-w-[1092px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-[30px]">
          {activePage === 1 && (
            <div className="flex items-center justify-center">
              <div className="relative">
                <Heading className="z-1 relative">TOP NEWS & EVENT</Heading>
                <img
                  className="absolute -left-7 -top-4"
                  src={ellipseImg}
                  alt="ellipse-img"
                />
              </div>
            </div>
          )}
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="max-w-[500px] md:max-w-[430px] lg:max-w-[344px] mx-auto"
            >
              <div className="bg-white shadow-[0px_0px_20px_2px_#00000033] rounded-[5px]">
                <img
                  className="rounded-[5px] w-full object-cover object-top max-h-[232px] min-h-[232px] mb-8.5 "
                  src={item}
                  alt="img"
                />
                <div className="px-4 sm:px-7.5 pb-2.5">
                  <p className="text-xl leading-[32px] text-black pb-2.5">
                    Lorem ipsum dolor sit met, consectetur cing elit, sed do abbey...
                  </p>
                  <div className="flex justify-between items-center mb-5">
                    <p className="font-medium text-xl leading-[32px] text-black">
                      Headmaster
                    </p>
                    <div className="flex items-center gap-2.5">
                      <CommentIcon />
                      <p className="font-medium text-xl leading-[100%] text-black">
                        10
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <EyeIcon />
                      <p className="font-medium text-xl leading-[100%] text-black">
                        29
                      </p>
                    </div>
                  </div>
                  <p className="text-xl leading-[32px] text-black">September 4, 2025</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex max-md:flex-col max-md:gap-4 justify-between items-center mt-12.5">
          <div className="flex gap-3.5 items-center">
            {getPaginationPages(activePage, totalPages).map((page, idx) =>
              page === '...' ? (
                <span
                  key={idx}
                  className="!py-2.5 !px-5 sm:!py-[19px] sm:!px-[29px] !leading-[21px] !text-xl text-[#FF9534] cursor-default select-none"
                >
                  ...
                </span>
              ) : (
                <Button
                  key={idx}
                  onClick={() => handlePageClick(page)}
                  className={`!py-2.5 !px-5 sm:!py-[19px] sm:!px-[29px] !leading-[21px] !text-xl ${activePage === page
                    ? 'bg-[#FF9534] text-white hover:text-white hover:!bg-[#FF9534]'
                    : '!bg-transparent border !border-[#FF9534] !text-[#FF9534]'
                    }`}
                >
                  {page}
                </Button>
              )
            )}
          </div>
          <div className="flex gap-3.5">
            <Button
              onClick={() => handlePageClick(Math.max(1, activePage - 1))}
              disabled={activePage === 1}
              className={`!py-2.5 !px-5 sm:!py-[19px] sm:!px-[29px] flex items-center !leading-[21px] !text-xl gap-2.5 ${activePage === 1
                ? 'bg-[#FF9534] text-white cursor-not-allowed hover:!bg-transparent'
                : 'text-[#FF9534] border !border-[#FF9534] hover:!bg-transparent'
                }`}
            >
              <PrevIcon /> Prev
            </Button>
            <Button
              onClick={() => handlePageClick(Math.min(totalPages, activePage + 1))}
              disabled={isLastPage}
              className={`!py-2.5 !px-5 sm:!py-[19px] sm:!px-[29px] flex items-center !leading-[21px] !text-xl gap-2.5 ${isLastPage
                ? 'bg-[#FF9534] text-white cursor-not-allowed hover:!bg-transparent'
                : 'text-[#FF9534] border !border-[#FF9534] hover:!bg-transparent'
                }`}
            >
              Next <NextIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTopEvents;
