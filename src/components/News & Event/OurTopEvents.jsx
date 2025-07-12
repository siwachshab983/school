import React, { useState } from 'react';
import { TOPNEWSEVENTS } from '../../utils/helper';
import Heading from '../common/Heading';
import Button from '../common/Button';
import ellipseImg from '../../assets/images/png/ellipse-img.png';
import { NextIcon, PrevIcon } from '../../utils/icon';

const OurTopEvents = () => {
  const [activePage, setActivePage] = useState(1);

  const itemsPerPageFirst = 9;
  const itemsPerPageOther = 3;

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
    setActivePage(pageNumber);
  };

  const pageButtons = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="px-7.5 bg-[#F2F2F2] mt-7.5 py-12.5">
      <div className="max-w-[1092px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-[30px]">
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

          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="max-w-[500px] md:max-w-[430px] lg:max-w-[344px] mx-auto"
            >
              <div className="bg-white shadow-[0px_0px_20px_2px_#00000033] rounded-[5px]">
                <img
                  className={`rounded-[5px] w-full ${[1, 4, 7].includes(index) ? 'mb-[42px]' : 'mb-8.5'
                    }`}
                  src={item.img}
                  alt={item.title}
                />
                <div className="px-4 sm:px-7.5 pb-2.5">
                  <p className="text-xl leading-[32px] text-black pb-2.5">
                    {item.title}
                  </p>
                  <div className="flex justify-between items-center mb-5">
                    <p className="font-medium text-xl leading-[32px] text-black">
                      {item.post}
                    </p>
                    <div className="flex items-center gap-2.5">
                      <item.commentIcon />
                      <p className="font-medium text-xl leading-[100%] text-black">
                        {item.commentNumber}
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <item.eyeIcon />
                      <p className="font-medium text-xl leading-[100%] text-black">
                        {item.eyeNumber}
                      </p>
                    </div>
                  </div>
                  <p className="text-xl leading-[32px] text-black">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-12.5">
          <div className="flex gap-3.5 items-center">
            {pageButtons.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`!py-[19px] !px-[29px] !leading-[21px] !text-xl ${activePage === page
                  ? 'bg-[#FF9534] text-white hover:text-white hover:!bg-[#FF9534]'
                  : '!bg-transparent border !border-[#FF9534] !text-[#FF9534]'
                  }`}
              >
                {page}
              </Button>
            ))}
          </div>

          <div className="flex gap-3.5">
            <Button
              onClick={() => handlePageClick(Math.max(1, activePage - 1))}
              className="!py-[19px] flex items-center !px-[29px] !leading-[21px] !text-xl hover:!bg-transparent gap-2.5"
            >
              <PrevIcon /> Prev
            </Button>
            <Button
              onClick={() =>
                handlePageClick(Math.min(totalPages, activePage + 1))
              }
              className="!py-[19px] flex items-center !px-[29px] !leading-[21px] !text-xl hover:!bg-transparent gap-2.5"
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