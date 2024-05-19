import React from 'react'
import Link from 'next/link'


const Footer = () => {
    return(
        <footer className="bg-black text-white hidden lg:flex items-center py-5 px-[5%] shadow m-4 dark:bg-gray-800">
            <div className='w-[50%] items-center flex text-white'>
            © Copyright Olymp Real Estate 2024 
            </div>
            <div className='w-[50%] text-white text-gray-500 text-opacity-[0.5] jsutify-end text-end items-center'>
                Developed by Stivi Xhaferri
            </div>
</footer>

    )
}


export default Footer