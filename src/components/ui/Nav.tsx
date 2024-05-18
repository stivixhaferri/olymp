'use client'
import react , {useState , useEffect} from 'react'
import { FaSearch } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaBookmark } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Link from 'next/link'
  import { RiInstagramFill } from "react-icons/ri";
  import { MdEmail } from "react-icons/md";
  import { FaLocationArrow } from "react-icons/fa";
  import { FaPhone } from "react-icons/fa6";
  import { FaWhatsapp } from "react-icons/fa";




const Nav = () => {
    return(
        <div className='flex w-full items-center realtive  top-0 left-0 right-0 px-4'>
            <div className='w-[80%] p-3'>
                <div className='w-[95%] bg-white flex rounded-3xl shadow-xl px-4 py-2 items-center'>
                <MdLocationPin fontSize={24} />
                <input type="text" className='w-full px-4 py-2 focus:outline-none' />
                </div>
            </div>
            <div className='w-[20%] px-4 py-2 items-center justify-end flex'>
            <Sheet>
  <SheetTrigger>
  <CiMenuKebab color='black' fill='black' fontSize={24} />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='text-[#234F68]'>Olymp Real Estate</SheetTitle>
      <SheetDescription className='text-[#234F68] text-start pt-6 realtive'>
            <div className='flex items-center pl-1 py-2 font-semibold text-lg gap-1'>
                  <FaPhone />: 0682595950
                 
              </div> 
              <div className='flex items-center pl-1 py-2 font-semibold text-lg gap-1'>
                  <FaWhatsapp />: 0682595950
                 
              </div> 
            <div className='flex items-center py-3 gap-3'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/640px-Flag_of_Albania.svg.png" className='w-[30px] object-cover h-[30px] rounded-full ' alt="" />
              <img src="https://t4.ftcdn.net/jpg/01/13/25/85/360_F_113258524_ViTlYNmjCbpevjcgsDMD3GBXAhk3MECh.jpg" alt="" className='w-[30px] object-cover h-[30px] rounded-full ' />
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png" alt="" className='w-[30px] object-cover h-[30px] rounded-full ' />
              <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" alt="" className='w-[30px] object-cover h-[30px] rounded-full ' />
            </div>
            <div className='flex items-center py-3 gap-3'>
                <Link href={'/'}>
                <RiInstagramFill fontSize={24} />
                </Link>
                <Link href={'/'}>
                <MdEmail fontSize={24} />
                </Link>
                <Link href={'/'}>
                <FaLocationArrow fontSize={20} />
                </Link>
            </div>
            <Link href={'/'} className='w-full flex font-semibold py-1 text-lg'>Terms & Conditions</Link>
            <Link href={'/'} className='w-full flex font-semibold py-1 text-lg'>Privacy Policy</Link>

            <div className='absolute px-4 left-[2px] bottom-[70px]'>
              <p className='text-[10px]'>©All rights reserved, Olymp Real Estate 2024</p>
              <a href='https://www.instagram.com/stivi_xhaferri/' target='_blank' className='text-[8px] text-gray-300'>Developed by Stivi Xhaferri</a>
            </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

            
            </div>
            <div className="cirlce bg-[#234F68] bg-opacity-[0.5] h-[500px] absolute w-[500px] ml-[-60%] rounded-full z-[-1] left-0 top-0 mt-[-80%]"></div>
        </div>
    )
}


export default Nav