'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function Locations() {
  return (
    <>
      <Swiper
        slidesPerView={2.1}
        spaceBetween={10}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2.1,
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
        <SwiperSlide className='bg-opacity-0 rounded-4xl'>
            <div className='flex items-center rounded-full text-[#234F68]  bg-[#F5F4F8]'>
                <div className='w-[50%] p-3'>
                <Avatar>
                <AvatarImage src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600" />
                
                </Avatar>

                </div>
                <div className='w-[50%]  text-start justify-start p-3'>
                    Bali
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='bg-opacity-0 rounded-4xl w-full'>
            <div className='flex items-center rounded-full text-[#234F68] w-full  bg-[#F5F4F8]'>
                <div className='w-[50%] p-3'>
                <Avatar>
                <AvatarImage src="https://images.pexels.com/photos/412681/pexels-photo-412681.jpeg?auto=compress&cs=tinysrgb&w=600" />
                
                </Avatar>

                </div>
                <div className='w-[50%]  text-start justify-start'>
                    Hawaii
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='bg-opacity-0 rounded-4xl'>
            <div className='flex items-center rounded-full text-[#234F68]  bg-[#F5F4F8]'>
                <div className='w-[50%] p-3'>
                <Avatar>
                <AvatarImage src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600" />
                
                </Avatar>

                </div>
                <div className='w-[50%] text-start justify-start'>
                    Bali
                </div>
            </div>
        </SwiperSlide>
       
      
        
        <SwiperSlide className='bg-opacity-0 rounded-4xl'>
            <div className='flex items-center rounded-full text-[#234F68]  bg-[#F5F4F8]'>
                <div className='w-[50%] p-3'>
                <Avatar>
                <AvatarImage src="https://images.pexels.com/photos/4577368/pexels-photo-4577368.png?auto=compress&cs=tinysrgb&w=600" />
                
                </Avatar>

                </div>
                <div className='w-[50%] p-3'>
                    Paris
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
