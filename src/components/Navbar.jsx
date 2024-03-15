'use client'

import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi"
import { FaCartShopping } from "react-icons/fa6"
import { AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai"
import { BsFillSaveFill } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { FaUserFriends, FaWallet } from "react-icons/fa"
import { MdFavorite, MdHelp } from "react-icons/md"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    return (
        <div className='max-w-[1640px] mx-auto p-4 flex justify-between items-center'>
            <div className='flex items-center'>
                <HiMenu className='text-primary cursor-pointer text-4xl md:text-5xl hover:text-black' onClick={() => setNav(!nav)} />
                <h2 className='text-2xl md:text-3xl lg:text-4xl px-2'>Best <span className='font-bold text-primary'>Eats</span></h2>
                <div className='hidden lg:flex bg-gray-200 rounded-full'>
                    <h3 className=' bg-primary rounded-full text-white p-2'>Delivery</h3>
                    <h3 className='p-2'>Pickup</h3>
                </div>
            </div>
            <div className='flex bg-gray-200 items-center rounded-full px-2 w-[180px] sm:w-[340px] lg:w-[500px]'>
                <AiOutlineSearch size={30} className='text-primary hover:text-black cursor-pointer' />
                <input type="text" placeholder='Search' className='bg-transparent focus:outline-none p-2 w-full' />
            </div>
            <div className='flex items-center justify-center bg-primary hover:bg-black rounded-full gap-2 px-3 py-2 text-white cursor-pointer'>
                <FaCartShopping className='text-base md:text-lg' /> <span>Cart</span>
            </div>

            {nav && <div className='fixed w-full h-screen top-0 left-0 bg-black/80'></div>}


            <div className={nav ? 'fixed top-0 left-0 bg-white w-[300px] z-10 h-screen p-2 text-primary text-lg duration-200 ease-in-out' : 'fixed top-0 left-[-100%] bg-white w-[300px] z-10 h-screen p-2 text-primary text-lg duration-400'}>
                <AiOutlineClose size={30} className='absolute top-3 right-2 cursor-pointer hover:text-black' onClick={() => setNav(!nav)} />
                <h2 className='text-2xl text-black p-2'>Best <span className='font-bold text-primary'>Eats</span></h2>
                <ul className='flex flex-col gap-6 px-2 py-10'>
                    <li className='flex items-center gap-4 cursor-pointer hover:text-black'><TbTruckDelivery size={25} /> Orders</li>
                    <li className='flex items-center gap-4 cursor-pointer hover:text-black'><MdFavorite size={25} /> Favorites</li>
                    <li className='flex items-center gap-4 cursor-pointer hover:text-black'><FaWallet size={25} /> Wallet</li>
                    <li className='flex items-center gap-4 cursor-pointer hover:text-black'><MdHelp size={25} /> Help</li>
                    <li className='flex items-center gap-4 cursor-pointer hover:text-black'><AiFillTag size={25} /> Promotions</li>
                    <li className='flex items-center gap-4 cursor-pointer hover:text-black'><BsFillSaveFill size={25} /> Best Ones</li>
                    <li className='flex items-center gap-4 cursor-pointer hover:text-black'><FaUserFriends size={25} /> Invite Friends</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar