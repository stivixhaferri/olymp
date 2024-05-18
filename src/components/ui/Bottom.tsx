'use client'
import React from 'react'
import Link from 'next/link'
import { GoHomeFill } from "react-icons/go";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const Bottom = () => {
    return(
        <div className='fixed lg:hidden  rounded-t-3xl py-2 shadow-xl bottom-0 left-0 z-[100011] flex items-center right-0 w-full bg-white'>
            <div className='w-[25%] justify-center flex p-3 text-center'>
                <Link href={'/'}>
                <GoHomeFill fontSize={26} color='#234F68' />
                </Link>
            </div>
            <div className='w-[25%] justify-center flex p-3 text-center'>
                <Link href={'/search'}>
                <FaSearch fontSize={26} color='#234F68' />
                </Link>
            </div>
            <div className='w-[25%] justify-center flex p-3 text-center'>
                <Link href={'/favorites'}>
                <FaHeart fontSize={26} color='#234F68' />
                </Link>
            </div>
            <div className='w-[25%] justify-center flex p-3 text-center'>
                <Link href={'/'}>
                <IoChatboxEllipses fontSize={26} color='#234F68' />
                </Link>
            </div>
        </div>
    )
}


export default Bottom