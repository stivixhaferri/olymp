'use client'
import React , {useState , useEffect} from 'react'
import Card from '@/components/ui/Card'
import { FaSearch } from "react-icons/fa";
import Nav from '@/components/ui/Nav';
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const page = () => {
    return(
        <div className='pb-[15%]'>
            
            <div className='w-[90%] mx-auto my-4'>
                <div className='w-full focus:outline-none px-4 py-2 rounded-xl shadow-lg bg-white  flex items-center' >
                    <FaSearch />
                    <input type="text" placeholder='Search here...' className='w-full focus:outline-none px-4 py-3 rounded-xl  bg-white' />
                </div>
                <div className='flex gap-3 items-center my-3'>
                    <div className='w-[50%]'>
                        <input type="number" placeholder='Rooms' className='w-full focus:outline-none px-4 py-3 rounded-xl shadow-lg bg-white' />
                    </div>
                    <div className='w-[50%]'>
                        <input type="number" placeholder='Baths' className='w-full focus:outline-none px-4 py-3 rounded-xl shadow-lg bg-white' />
                    </div>
                </div>
                <div className='flex gap-3 items-center my-3'>
                    <div className='w-full'>
                        <input type="number" placeholder='Location' className='w-full focus:outline-none px-4 py-3 rounded-xl shadow-lg bg-white' />
                    </div>
                    
                </div>
                <div className='flex gap-3 items-center my-3'>
                    <div className='w-full'>
                        <select  color='black'  className='w-full focus:outline-none text-black px-4 py-3 rounded-xl  bg-white' >
                            <option value="">Type</option>
                            <option value="">House</option>
                            <option value="">Apartment</option>
                            <option value="">Property</option>
                            <option value="">Hotel</option>
                            <option value="">Bar</option>
                        </select>
                    </div>
                    
                </div>
                <div className='flex gap-3 items-center my-3'>
                    <div className='w-full'>
                        <label htmlFor="">Max Price: </label>
                        <input type="range" color='black' placeholder='Rooms' className='w-full focus:outline-none text-black px-4 py-3 rounded-xl  bg-white' />
                    </div>
                    
                </div>

                <div className='flex gap-3 items-center my-3'>
                    <div className='w-full'>
                        <label htmlFor="">Max Surface: </label>
                        <input type="range" placeholder='Rooms' className='w-full focus:outline-none px-4 py-3 rounded-xl  bg-white' />
                    </div>
                    
                </div>
                <div>
                    <button className='border-none rounded-lg bg-[#234F68] w-full px-4 py-3 text-white font-semibold shadow-lg'>Submit</button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-2 w-[90%] mx-auto my-5'>
        <Card  img={'https://images.pexels.com/photos/5178440/pexels-photo-5178440.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        <Card  img={'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        <Card  img={'https://images.pexels.com/photos/1464793/pexels-photo-1464793.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        <Card  img={'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        <Card  img={'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600'} />

      </div>
        </div>
    )
}


export default page