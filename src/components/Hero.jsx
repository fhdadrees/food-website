'use client'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-[1640px] m-auto p-4'>
            <div className='max-h-[600px] relative bg-black/20'>
                <div className='absolute text-white w-full h-full max-h-[600px] flex items-center capitalize font-bold'>
                    <h1 className='px-4 text-3xl md:text-5xl lg:text-6xl'>It's the <span className='text-primary'>food you love</span>, <br />delivered</h1>
                </div>
                <Image
                    unoptimized="true"
                    src="https://images.unsplash.com/photo-1616645500344-209060c84970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Landscape picture"
                    width={0}
                    height={0}
                    className='w-full max-h-[600px] object-cover'
                />
            </div>
        </div>
    )
}

export default Hero