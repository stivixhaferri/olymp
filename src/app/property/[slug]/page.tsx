'use client'
import React , {useState , useEffect} from 'react'
import axios from 'axios'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { FaHeart, FaStar } from 'react-icons/fa';
import { MdLocationPin } from "react-icons/md";

  



const page = () => {
    return(
        <div className='w-full pb-[15%] overflow-x-hidden relative bg-white'>
            <div>
            <Carousel className='bg-white'>
            <CarouselContent>
                <CarouselItem>
                    <div className='w-full relative h-[70vh]  relative rounded-b-[20px] w-full mx-auto' style={{background: `url('https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600')`, backgroundSize: 'cover'}}>
                    <div className='favorite bg-[#8BC83F] absolute top-[25px] right-[25px] rounded-full  p-3'>
                    <FaHeart color='white' className='' />
                    </div>
                    <div className='flex absolute left-[25px] bottom-[25px] gap-3 items-center'>
                        <div className='flex items-center gap-1 bg-[#25485A] px-4 py-2 rounded-full'>
                            <FaStar  color='FFC42D' />
                            <p className='text-white'>4,9</p>
                        </div>
                        <div className='flex items-center gap-1 bg-[#25485A] px-4 py-2 rounded-full'>
                            
                            <p className='text-white font-semibold'>Apartment</p>
                        </div>
                    </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                <div className='w-full relative h-[70vh]  relative rounded-b-[20px] w-full mx-auto' style={{background: `url('https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600')`, backgroundSize: 'cover'}}>
                    <div className='favorite bg-[#8BC83F] absolute top-[25px] right-[25px] rounded-full  p-3'>
                    <FaHeart color='white' className='' />
                    </div>
                    <div className='flex absolute left-[25px] bottom-[25px] gap-3 items-center'>
                        <div className='flex items-center gap-1 bg-[#25485A] px-4 py-2 rounded-full'>
                            <FaStar  color='FFC42D' />
                            <p className='text-white'>4,9</p>
                        </div>
                        <div className='flex items-center gap-1 bg-[#25485A] px-4 py-2 rounded-full'>
                            
                            <p className='text-white font-semibold'>Apartment</p>
                        </div>
                    </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                <div className='w-full relative h-[70vh]  relative rounded-b-[20px] w-full mx-auto' style={{background: `url('https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600')`, backgroundSize: 'cover'}}>
                    <div className='favorite bg-[#8BC83F] absolute top-[25px] right-[25px] rounded-full  p-3'>
                    <FaHeart color='white' className='' />
                    </div>
                    <div className='flex absolute left-[25px] bottom-[25px] gap-3 items-center'>
                        <div className='flex items-center gap-1 bg-[#25485A] px-4 py-2 rounded-full'>
                            <FaStar  color='FFC42D' />
                            <p className='text-white'>4,9</p>
                        </div>
                        <div className='flex items-center gap-1 bg-[#25485A] px-4 py-2 rounded-full'>
                            
                            <p className='text-white font-semibold'>Apartment</p>
                        </div>
                    </div>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>

            </div>
            <div className='py-4 bg-white px-[10%]'>
                    <div className='flex'>
                        <div className='w-[50%] flex items-center jutify-center'>
                            <h2 className='text-2xl font-semibold text-[#25485A]'>Wings Tower</h2>
                        </div>
                        <div className='w-[50%] flex items-center jutify-end text-end'>
                            <h2 className='text-2xl font-semibold text-[#25485A] w-full flex justify-end text-end'>$220</h2>
                        </div>
                    </div>
                    <div className='flex py-3'>
                        <div className='w-[50%] flex items-center jutify-center'>
                            <MdLocationPin fontSize={16} />
                            <p className='text-sm font-semibold text-[#25485A]'>Location</p>
                        </div>
                        <div className='w-[50%] flex items-center jutify-end text-end'>
                            <h2 className='text-sm text-gray-500 w-full flex justify-end text-end'>per month</h2>
                        </div>
                    </div>
            </div>
           
        </div>
    )
}


export default page