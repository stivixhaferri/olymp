import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { MdLocationPin } from "react-icons/md";

interface CardProps {
  img: string;
}

const Card: React.FC<CardProps> = ({ img }) => {
  return (
    <div className='p-3 rounded-3xl my-2 shadow-lg bg-[#F5F4F8]'>
      <div className='relative'>
        <div className='favorite bg-[#8BC83F] absolute top-[10px] right-[10px] rounded-full  p-3'>
          <FaHeart color='white' className='' />
        </div>
        <div className='absolute right-[10px]  bottom-[10px] px-4 py-2 bg-[#234F68] text-white font-semibold rounded-xl'>
          Apartment
        </div>
        <img src={img} className='rounded-3xl  lg:h-[400px] lg:w-full' alt='' />
      </div>
      <div>
        <div className='py-1 lg:py-[5%] lg:text-2xl text-[#234F68] font-semibold px-4 text-sm'>
            Mill Sper House
        </div>
      </div>
      <div className='flex items-center px-4 lg:text-xl'>
                <div className='flex lg:gap-2 w-full items-center lg:text-xl text-xs w-[50%]  gap-2'>
                <FaStar  color='FFC42D' />
                <p className='text-[#252B5C]  font-semibold'>4,9</p>
                </div>
        <div className='w-[50%] lg:gap-2 flex text-[#252B5C] items-center lg:text-xl text-xs justify-start'>
                <MdLocationPin fontSize={18} />
                <p className='text-[#252B5C] font-semibold'>Plazh</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
