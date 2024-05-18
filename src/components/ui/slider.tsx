'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={{
          '@0.00': {
            slidesPerView: 3,
            spaceBetween: 10,
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
        <SwiperSlide className='w-[200px] bg-[#234F68] text-white h-[200px] px-1 py-2 rounded-xl'>All</SwiperSlide>
        <SwiperSlide className='w-[200px] bg-[#F5F4F8] text-[#234F68]  h-[200px] px-1 py-2 rounded-xl'>House</SwiperSlide>
        <SwiperSlide className='w-full bg-[#F5F4F8] text-[#234F68] h-[200px] px-1 py-2 rounded-xl'>Property</SwiperSlide>
        <SwiperSlide className='w-[200px] bg-[#F5F4F8] text-[#234F68] h-[200px] px-1 py-2 rounded-xl'>Hotel</SwiperSlide>
        <SwiperSlide className='w-[200px] bg-[#F5F4F8] text-[#234F68] h-[200px] px-1 py-2 rounded-xl'>Bar</SwiperSlide>
        <SwiperSlide className='w-[200px] bg-[#F5F4F8] text-[#234F68] h-[200px] px-1 py-2 rounded-xl'>Penthouse</SwiperSlide>
        <SwiperSlide className='w-[200px] bg-[#F5F4F8] text-[#234F68] h-[200px] px-1 py-2 rounded-xl'>Mansion</SwiperSlide>
      </Swiper>
    </>
  );
}
