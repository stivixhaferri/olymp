'use client'
import React , {useState , useEffect} from 'react'
import Card from '@/components/ui/Card'
import { FaSearch } from "react-icons/fa";
import Nav from '@/components/ui/Nav';

const page = () => {
    return(
        <div className='pb-[15%]'>
            
            <div className='w-[90%] mx-auto my-4'>
                <div className='w-full focus:outline-none px-4 py-2 rounded-xl shadow-lg bg-white flex items-center gap-1'>
                <FaSearch />
                    <input type="text" placeholder='Search here...' className='w-full focus:outline-none px-4 py-2 rounded-xl  bg-white' />
                </div>
                
                <div className='my-5'>
                    <button className='border-none rounded-lg bg-[#234F68] w-full px-4 py-2 text-white font-semibold shadow-lg'>Submit</button>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 w-[90%] mx-auto my-5'>
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