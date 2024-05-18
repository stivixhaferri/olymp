'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
import { FaStar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';
import { FaHeart } from "react-icons/fa";


// import required modules
import { Pagination } from 'swiper/modules';

export default function Best() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 3,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
            <div className='w-full gap-1 flex flex-row bg-[#F5F4F8] rounded-xl shadown-lg rounded-2xl p-4 '>
            <div className='w-[50%] relative'>
                <div className="favorite bg-[#8BC83F] absolute top-[10px] left-[10px] rounded-full  p-3">
                    <FaHeart color='white' className='' />
                </div>
                <div className='absolute left-[10px] bottom-[10px] px-4 py-2 bg-[#234F68] text-white font-semibold rounded-xl'>
                    Apartment
                </div>
                <img src="https://images.pexels.com/photos/18904413/pexels-photo-18904413/free-photo-of-plants-on-balconies-in-a-modern-building.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-3xl  h-[300px] ' alt="" />
            </div>
            <div className='w-[50%] text-start'>
                <h1 className='text-[#252B5C] text-start font-semibold pt-5'>Sky Deadelinions Apartment</h1>
                <div className='flex items-center text-sm  pt-3 gap-2'>
                <FaStar  color='FFC42D' />
                <p className='text-[#252B5C] py-2 font-semibold'>4,9</p>
                </div>

                <div className='flex items-center text-sm  gap-2'>
                <MdLocationPin fontSize={18} />
                <p className='text-[#252B5C] font-semibold'>Plazh</p>
                </div>

                <div>
                    <h2 className='text-[#252B5C] text-2xl pl-1 pt-[25%] font-semibold'>$290/month</h2>
                </div>
            </div>

            </div>
            
           
        </SwiperSlide>
        <SwiperSlide >
            <div className='w-full gap-1 flex flex-row bg-[#F5F4F8] rounded-xl shadown-lg rounded-2xl p-4 '>
            <div className='w-[50%] relative'>
                <div className="favorite bg-[#8BC83F] absolute top-[10px] left-[10px] rounded-full  p-3">
                    <FaHeart color='white' className='' />
                </div>
                <div className='absolute left-[10px] bottom-[10px] px-4 py-2 bg-[#234F68] text-white font-semibold rounded-xl'>
                    Apartment
                </div>
                <img src="https://images.pexels.com/photos/18904413/pexels-photo-18904413/free-photo-of-plants-on-balconies-in-a-modern-building.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-3xl  h-[300px] ' alt="" />
            </div>
            <div className='w-[50%] text-start'>
                <h1 className='text-[#252B5C] text-start font-semibold pt-5'>Sky Deadelinions Apartment</h1>
                <div className='flex items-center text-sm  pt-3 gap-2'>
                <FaStar  color='FFC42D' />
                <p className='text-[#252B5C] py-2 font-semibold'>4,9</p>
                </div>

                <div className='flex items-center text-sm  gap-2'>
                <MdLocationPin fontSize={18} />
                <p className='text-[#252B5C] font-semibold'>Plazh</p>
                </div>

                <div>
                    <h2 className='text-[#252B5C] text-2xl pl-1 pt-[25%] font-semibold'>$290/month</h2>
                </div>
            </div>

            </div>
            
           
        </SwiperSlide>
        <SwiperSlide >
            <div className='w-full gap-1 flex flex-row bg-[#F5F4F8] rounded-xl shadown-lg rounded-2xl p-4 '>
            <div className='w-[50%] relative'>
                <div className="favorite bg-[#8BC83F] absolute top-[10px] left-[10px] rounded-full  p-3">
                    <FaHeart color='white' className='' />
                </div>
                <div className='absolute left-[10px] bottom-[10px] px-4 py-2 bg-[#234F68] text-white font-semibold rounded-xl'>
                    Apartment
                </div>
                <img src="https://images.pexels.com/photos/18904413/pexels-photo-18904413/free-photo-of-plants-on-balconies-in-a-modern-building.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-3xl  h-[300px] ' alt="" />
            </div>
            <div className='w-[50%] text-start'>
                <h1 className='text-[#252B5C] text-start font-semibold pt-5'>Sky Deadelinions Apartment</h1>
                <div className='flex items-center text-sm  pt-3 gap-2'>
                <FaStar  color='FFC42D' />
                <p className='text-[#252B5C] py-2 font-semibold'>4,9</p>
                </div>

                <div className='flex items-center text-sm  gap-2'>
                <MdLocationPin fontSize={18} />
                <p className='text-[#252B5C] font-semibold'>Plazh</p>
                </div>

                <div>
                    <h2 className='text-[#252B5C] text-2xl pl-1 pt-[25%] font-semibold'>$290/month</h2>
                </div>
            </div>

            </div>
            
           
        </SwiperSlide>
      </Swiper>
    </>
  );
}
