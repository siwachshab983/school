import React from 'react';
import managementImg from '../../assets/images/png/management-img.png'
import Heading from '../common/Heading';
import Description from '../common/Description';
import facebook from '../../assets/images/svg/facebook.svg';
import whatspp from '../../assets/images/svg/whatspp.svg';
import insta from '../../assets/images/svg/insta.svg';
import twitter from '../../assets/images/svg/twitter.svg';

const Founder = () => {
  return (
    <div className='xl:px-[50px] px-4 pt-[30px] pb-[50px]'>
      <div className='max-w-[1052px] mx-auto'>
        <div className='flex xl:gap-[50px] min-[840px]:gap-4 max-[840px]:gap-3 lg:gap-10 max-md:flex-wrap'>
          <div>
            <img src={managementImg} alt="managementImg" className='xl:size-[500px] min-[890px]:w-[450px] min-md:w-[400px] max-[890px]:w-[400px] min-[1018px]:h-[500px] max-[1018px]:h-[480px] max-[951px]:h-[465px] max-[780px]:h-[448px] object-cover' />
          </div>
          <div className='flex flex-col'>
            <Heading className="uppercase">the Founder</Heading>
            <Description className="!font-medium !text-xl !text-black">Ms. LOREM IPSUM</Description>
            <Description className="md:!max-w-[501px] min-[829px]:!pt-5 max-[829px]:!pt-3 max-[1018px]:!text-[19px] max-[951px]:!text-lg max-[780px]:!text-[17px] min-[1018px]:!text-xl !leading-[175%]">Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod temp incit ut labore dolore magna aliqua. computer science students Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore dol magna aliqua. olabisi oanbanjo unuversity Ut enim ad minim Lorem ipsum eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet.</Description>
            <div className='flex gap-6 min-[829px]:pt-[31px] max-[829px]:pt-3'>
              <a href="https://www.facebook.com/" target='blank'><img src={facebook} alt="facebook" /></a>
              <a href="https://www.whatsapp.com/" target='blank'><img src={whatspp} alt="whatspp" /></a>
              <a href="https://www.instagram.com/" target='blank'><img src={insta} alt="insta" /></a>
              <a href="https://www.twitter.com/" target='blank'><img src={twitter} alt="twitter" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Founder