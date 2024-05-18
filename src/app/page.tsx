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


const page = () => {
  return(
    <>
     <div className='mb-[25%] lg:hidden'>
      <Nav/>
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


    <div className='hidden border-t-[#234F68] border-t-[20px] lg:flex fixed top-0 left-0 right-0 border-b-[1px] border-b-black  w-full bg-white items-center'>
      <div className='w-[20%] p-4'>
        <h1 className='text-[#234F68] text-3xl font-bold w-full text-center'>OLYMP</h1>
      </div>
      <div className='w-[60%] p-4 flex items-center justify-center gap-6 font-semibold text-xl'>
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>Properties</Link>
        <Link href={'/'}>Favorites</Link>
        <Link href={'/'}>Lets Chat</Link>
      </div>
      <div className='w-[20%] gap-5 p-4 flex justify-end pr-[5%]'>
        <a href="">
          <FaInstagram fontSize={22} />
        </a>
        <a href="">
          <MdEmail fontSize={22} />
        </a>
        
        
      </div>
    </div>
  
    <div className='hidden lg:flex py-5 w-full mt-[5%] flex items-center'>
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
    <div className='my-5 hidden  lg:flex pt-[7%]'>
      <div className='w-[60%]'>
        <div>
          <h1 className='w-[55%] ml-[5%] text-2xl font-semibold'>
          REAL ESTATE, A DYNAMIC AND MULTIFACETED INDUSTRY, ENCOMPASSES A VAST ARRAY OF PROPERTIES, FROM RESIDENTIAL HOMES TO COMMERCIAL BUILDINGS AND EXPANSIVE PLOTS OF LAND. 
          </h1>
        </div>
        <div className='w-[90%] relative mx-auto px-4 flex items-center py-[5%] justify-end gap-5'>
        
        <div className='absolute mb-[-15%] glass left-[20px] w-[250px] bottom-0 p-5 rounded-xl'>
            <h2 className='font-semibold text-2xl'>Contact Now</h2>
            <br />
            <a href="" className='border-black transition all 0.7s ease-in-out hover:bg-black hover:text-white rounded-3xl border-[1px] px-4 py-2  my-[5%]'>
              Click here
            </a>
            <img src="/av.png" className='w-[100px] object-contain mt-[20%]' alt="" />
        </div>
        
        <Link href={'/'} className='px-5 w-[200px] transition all 0.7s ease-in-out hover:bg-black hover:text-white text-lg text-center font-semibold shadow-lg py-3 bg-white text-black  rounded-full border-[1px] border-black'>Reserve</Link>
          <Link href={'/'} className='px-5 w-[200px] text-lg text-center font-semibold shadow-lg py-3 bg-black text-white rounded-full border-[1px] border-black'>Search</Link>
        </div>
        <img className='w-[90%] mx-auto h-[250px] rounded-3xl' src="https://images.pexels.com/photos/2374987/pexels-photo-2374987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className='w-[40%] mt-[-2%] px-4'>
        <h1 className='text-[80px] text-[#2B3261] font-semibold'>
          Find 
          <br/>
          Your Dream  <span className='text-[#28536B]'>home</span>,
          <br/>
        </h1>
        <h2 className='text-[55px] text-[#2B3261] font-semibold'>Own Your Dream life.</h2>
      </div>
    </div>
    </>
   
  )


}

export default page