import React from 'react';
import ellipseImg from '../../assets/images/png/ellipse-img.png';
import Heading from '../common/Heading';
import { PROFILES_DATA } from '../../utils/helper';

const OurTeam = () => {
  return (
    <div className="bg-[#F2F2F2] pt-12 sm:pt-14 md:pt-16 pb-20 px-4 sm:px-6 lg:px-[90px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative text-center mb-14 sm:mb-16 md:mb-20">
          <div className="relative inline-block">
            <Heading className="relative z-10">Meet Our Team</Heading>
            <img
              className="absolute left-[-15%] top-[-22%] md:w-[50px]"
              src={ellipseImg}
              alt="ellipse-img"
            />
          </div>
        </div>

        <div className="grid max-sm:grid-cols-1 max-[800px]:grid-cols-2 min-[800px]:grid-cols-3 gap-x-4 gap-y-[100px] justify-items-center">
          {PROFILES_DATA.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow px-5 pt-20 pb-6 text-center w-full max-w-[264px] relative"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-[100px] h-[100px] object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>
              <h2 className="text-[20px] sm:text-[22px] text-[#22343D] font-semibold">
                {person.name}
              </h2>
              <p className="text-[#FF725E] mt-1 text-[16px]">{person.role}</p>
              <div className="flex justify-center gap-4 mt-4">
                {person.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.icon}
                      alt="social-icon"
                      className="w-6 h-6 hover:scale-110 transition duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
