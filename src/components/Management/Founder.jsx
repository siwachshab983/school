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
    <div>
      <div className='max-w-[1052px] mx-auto'>
        <div className='flex gap-[50px]'>
          <div>
            <img src={managementImg} alt="managementImg" className='size-[500px]' />
          </div>
          <div className='flex flex-col'>
            <Heading className="uppercase">the Founder</Heading>
            <Description className="!font-medium !text-xl !text-black">Ms. LOREM IPSUM</Description>
            <Description className="!max-w-[501px] !pt-5 !text-xl !leading-[125%]">Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod temp incit ut labore dolore magna aliqua. computer science students Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore dol magna aliqua. olabisi oanbanjo unuversity Ut enim ad minim Lorem ipsum eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet.</Description>
            <div className='flex gap-6'>
              <a href=""><img src={facebook} alt="facebook" /></a>
              <a href=""><img src={whatspp} alt="whatspp" /></a>
              <a href=""><img src={insta} alt="insta" /></a>
              <a href=""><img src={twitter} alt="twitter" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Founder