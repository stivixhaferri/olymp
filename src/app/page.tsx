'use client'
import React , {useState , useEffect} from 'react'
import axios from 'axios'
import { FaSearch } from "react-icons/fa";
import Slider from '@/components/ui/slider'
import Best from '@/components/ui/Best';
import Locations from '@/components/ui/Locations';
import Card from '@/components/ui/Card';
import Nav from '@/components/ui/Nav';
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdArrowOutward } from "react-icons/md";

const page = () => {
  return(
    <>
     <div className='mb-[25%] lg:hidden'>
      
      <div className="hero w-full px-4 py-1">
        <h1 className='font-semibold text-2xl text-[#252B5C]'>Find your dream <span className='text-[#234F68]'>home</span> ,
           own your <span className='text-[#234F68]'>dream</span> life.</h1>
      </div>
      <div className="searchbar w-[90%] my-5 p-3 mx-auto bg-white shadow-lg rounded-xl flex items-center">
        <FaSearch fontSize={24} />
        <input type="text" className='w-full focus:outline-none ml-2 px-4 py-2 text-lg' placeholder='Search House , Apartment...' />
      </div>
      <div className='w-[90%] mx-auto'>
        <Slider/>
      </div>
      <div className='w-[90%] my-4 mx-auto'>
        <div className='w-full flex py-2 items-center'>
          <div className='w-[50%] text-start flex items-center text-[#252B5C] font-semibold'>
            Top Properties
          </div>
          <div className='w-[50%] flex items-center text-end justify-end text-[#234F68] '>
            See all
          </div>
        </div>
        <Best/>
      </div>
      <div className='w-[90%] my-2 mx-auto'>
        <Locations/>
      </div>
      <div className='grid grid-cols-2 gap-2 w-[90%] mx-auto my-5'>
        <Card  img={'https://images.pexels.com/photos/5178440/pexels-photo-5178440.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        <Card  img={'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        <Card  img={'https://images.pexels.com/photos/1464793/pexels-photo-1464793.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        <Card  img={'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        <Card  img={'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600'} />

      </div>
    </div>


    
  
    <div className='hidden lg:flex py-5 w-full  flex items-center'>
      <div className='flex items-center pl-[10%] w-[33%]'>
      <div className='w-[60px] h-[60px] overflow-hidden rounded-full bg-black transition-all duration-1000 ease-in-out hover:ml-[5%] cursor-pointer'>
        <div className='bg-black'>CN</div>
      </div>

      </div>
      <div className='flex items-center gap-3  justify-center w-[33%]'>
        <div className='w-[35px] h-[35px] bg-[#76BFC4] rounded-full'></div>
        <div>
          <p className='font-semibold'>What are <br/> you waiting</p>
        </div>
      </div>
      <div className='flex items-center w-[33%] pr-[5%]  justify-end'>
        <h1 className='font-semibold text-2xl '>
          EXPLORE <br/> BUILDINGS <br/> NOW
        </h1>
      </div>
    </div>
    <div className='w-full h-[1px] px-4 hidden lg:flex bg-black  '></div>
    <div className='mt-5 hidden  lg:flex pt-[7%]'>
      <div className='w-[60%]'>
        <div>
          <h1 className='w-[55%] ml-[5%] text-2xl font-semibold'>
          REAL ESTATE, A DYNAMIC AND MULTIFACETED INDUSTRY, ENCOMPASSES A VAST ARRAY OF PROPERTIES, FROM RESIDENTIAL HOMES TO COMMERCIAL BUILDINGS AND EXPANSIVE PLOTS OF LAND. 
          </h1>
        </div>
        <div className='w-[90%] relative mx-auto px-4 flex items-center py-[5%] justify-end gap-5'>
        
        <div className='absolute  mb-[-15%] glass left-[20px] w-[250px] bottom-0 p-5 rounded-xl'>
            <h2 className='font-semibold text-2xl'>Contact Now</h2>
            <br />
            <a href="" className='border-black transition all 0.7s ease-in-out hover:bg-black hover:text-white rounded-3xl border-[1px] px-4 py-2  my-[5%]'>
              Click here
            </a>
            <img src="/av.png" className='w-[100px] pb-[15%] object-contain mt-[20%]' alt="" />
            
        </div>
        
        <Link href={'/'} className='px-5 w-[200px] transition all 0.7s ease-in-out hover:bg-black hover:text-white text-lg text-center font-semibold shadow-lg py-3 bg-white text-black  rounded-full border-[1px] border-black'>Reserve</Link>
          <Link href={'/'} className='px-5 w-[200px] text-lg text-center font-semibold shadow-lg py-3 bg-black text-white rounded-full border-[1px] border-black'>Search</Link>
        </div>
        <img className='w-[90%] mx-auto h-[250px] rounded-3xl' src="https://images.pexels.com/photos/2374987/pexels-photo-2374987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='flex py-2 text-lg gap-3  w-[90%] mx-auto'>
              <div className='text-black cursor-pointer transition all 0.4s ease-in-out hover:translate-x-[2px] gap-1 flex items-center'>
                House
                <MdArrowOutward />
              </div>
              <div className='ttext-black cursor-pointer transition all 0.4s ease-in-out hover:translate-x-[2px] gap-1 flex items-center'>
                Apartment
                <MdArrowOutward />
              </div>
              <div className='text-black cursor-pointer transition all 0.4s ease-in-out hover:translate-x-[2px] gap-1 flex items-center'>
                Property
                <MdArrowOutward />
              </div>
              <div className='text-black cursor-pointer transition all 0.4s ease-in-out hover:translate-x-[2px] gap-1 flex items-center'>
                Bar
                <MdArrowOutward />
              </div>
              <div className='text-black cursor-pointer transition all 0.4s ease-in-out hover:translate-x-[2px] gap-1 flex items-center'>
                Hotel
                <MdArrowOutward />
              </div>
              <div className='text-black cursor-pointer transition all 0.4s ease-in-out hover:translate-x-[2px] gap-1 flex items-center'>
                Penthouse
                <MdArrowOutward />
              </div>
              <div className='text-black cursor-pointer transition all 0.4s ease-in-out hover:translate-x-[2px] gap-1 flex items-center'>
                Mansion
                <MdArrowOutward />
              </div>
            </div>
      </div>
      <div className='w-[40%] mt-[-2%] px-4 relative'>
        <div className='floating absolute top-[20px] right-[130px] text-xl font-semibold text-white bg-black px-4 py-2 rounded-3xl'>500+ Proeprties</div>
        <img src="/building.png" className='absolute bottom-0 right-0 opacity-[0.4] z-[-1] ' alt="" />
        <h1 className='text-[80px] text-[#2B3261] font-semibold'>
          Find 
          <br/>
          Your Dream  <span className='text-[#28536B]'>home</span>,
          <br/>
        </h1>
        <h2 className='text-[55px] text-[#2B3261] font-semibold'>Own Your Dream life.</h2>
      </div>
    </div>


    <div className='w-full gap-3 px-[5%] my-[5%] hidden lg:flex'>
      <div className='w-[30%] '>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23977.16372092336!2d19.493925!3d41.305699!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134fd9593b237161%3A0x495bfc8f12fd9bea!2sOlymp%20Real%20Estate%20Albania!5e0!3m2!1sen!2sus!4v1716057426437!5m2!1sen!2sus"  loading="lazy" className='w-full h-full rounded-3xl' ></iframe>
      </div>
      <div className='w-[70%]'>
        <div className='flex items-center'>
            <div className='w-[50%] flex justify-start'>
              <h1 className='font-semibold text-lg'>Top Rated Properties</h1>
            </div>
            <div className='flex w-[50%] items-center gap-1 text-md font-semibold justify-end  text-end '>
              <Link href={'/'}>See All</Link>
              <MdArrowOutward />
            </div>
          </div> 
          <div className='grid gap-3 grid-cols-3'>
        <Card  img={'https://images.pexels.com/photos/5178440/pexels-photo-5178440.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        <Card  img={'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        <Card  img={'https://images.pexels.com/photos/1464793/pexels-photo-1464793.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        <Card  img={'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        <Card  img={'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        <Card  img={'https://images.pexels.com/photos/1464793/pexels-photo-1464793.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        
      </div>    
      </div>
      
    </div>

    <div className='hidden lg:flex  mt-5 w-full px-[5%] ' style={{background: `url('about.jpg')`, backgroundAttachment: "fixed", backgroundSize: "cover"}}>
      <div className='w-[70%] py-[5%]'>
        <span className='text-lg text-white pb-2 pt-5'>Trust Olymp Real Estate</span>
        <h1 className='text-[100px] text-white font-semibold'>
          Elevate Your 
          <br/>
          Living Experience
        </h1>
        <p className='text-white py-5 w-[50%] font-semibold text-xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident quibusdam explicabo eius facilis rerum modi nulla consequatur labore ipsa illo mollitia eaque enim sed natus optio, praesentium quasi incidunt.
        </p>
        <div className='flex items-center pt-5 text-white gap-6'>
          <div>
            <span className='text-white'>Realtor</span>
            <p className='font-semibold text-lg transition all 0.5s ease-in-out hover:translate-x-[5px] cursor-pointer'>Rasim Lleshi</p>
          </div>
          <div>
            <span>Realtor</span>
            <p className='font-semibold text-lg transition all 0.5s ease-in-out hover:translate-x-[5px] cursor-pointer'>Erjon Kunci</p>
          </div>
        </div>
      </div>
      <div className='w-[30%]'></div>
    </div>

    <div className='w-full  hidden lg:block bg-[#F9F1EF] overflow-hidden h-[70vh] relative' >
      <img src="chat2.png" className='w-[30%] mx-auto absoltue top-0 mt-[10vh] left-0 right-0 bottom-0 ' alt="" />
      <a href="" className='w-[20%] mb-[2%] mx-auto absolute bottom-0 left-0 right-0  bg-black text-white  px-4 py-2 rounded-lg text-xl text-center font-semibold'>
        LETS CHAT NOW
      </a>
    </div>
    </>
   
  )


}

export default page