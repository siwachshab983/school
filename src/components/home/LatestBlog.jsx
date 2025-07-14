import React, { useState, useEffect } from "react";
import Heading from '../common/Heading'
import Button from '../common/Button';
import ellipseImg from '../../assets/images/png/ellipse-img.png';
import { TOPNEWSEVENTS } from '../../utils/helper';
import { BtnArrow, CommentIcon, EyeIcon } from '../../utils/icon';
import { NavLink } from "react-router-dom";

const LatestBlog = () => {
  const [cardCount, setCardCount] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardCount(2);
      } else if (width >= 768) {
        setCardCount(3)
      } else {
        setCardCount(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="px-4 md:px-7.5 pb-12.5 pt-10 sm:pt-20 md:pt-[124px]">
        <div className="max-w-[1152px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6.5 md:gap-12.5">
            <div className="flex items-center justify-center">
              <div className="relative">
                <Heading className=" max-sm:!text-[26px] z-1 relative">Latest Blog</Heading>
                <img className="absolute -left-8.5 -top-3" src={ellipseImg} alt="ellipse-img" />
              </div>
            </div>
            {TOPNEWSEVENTS.slice(0, cardCount).map((item, index) => (
              <div
                key={index}
                className="max-w-[500px] md:max-w-[430px] lg:max-w-[344px] mx-auto"
              >
                <div className="bg-white shadow-[0px_0px_20px_2px_#00000033] rounded-[5px]">
                  <img
                    className="rounded-[5px] w-full object-cover object-top max-h-[232px] min-h-[232px] mb-8.5"
                    src={item}
                    alt="img"
                  />
                  <div className="px-4 sm:px-7.5 pb-2.5">
                    <p className="text-lg sm:text-xl leading-6 sm:leading-8 text-black pb-2.5">
                      Lorem ipsum dolor sit met, consectetur cing elit, sed do abbey...
                    </p>
                    <div className="flex justify-between items-center mb-5">
                      <p className="font-medium text-lg sm:text-xl leading-6 sm:leading-8 text-black">
                        Headmaster
                      </p>
                      <div className="flex items-center gap-2.5">
                        <CommentIcon />
                        <p className="font-medium text-lg sm:text-xl leading-[100%] text-black">
                          10
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <EyeIcon />
                        <p className="font-medium text-lg sm:text-xl leading-[100%] text-black">
                          29
                        </p>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl leading-6 sm:leading-8 text-black">
                      September 4, 2025
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <NavLink to="/news-&-event">
            <Button className={'max-md:mx-auto ml-auto mt-6 sm:mt-12.5 flex justify-center items-center gap-5'} >More Articles <BtnArrow /></Button></NavLink>
        </div>
      </div>
    </>
  )
}

export default LatestBlog