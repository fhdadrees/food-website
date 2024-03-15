import React from 'react'
import { categories } from '../data/data'
import Image from 'next/image'

const Category = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-10'>
            <h2 className='text-primary text-4xl font-bold text-center'>Top Rated Items</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 py-6 gap-6'>
                {categories.map((item, idx) => {
                    return <div key={idx} className='flex justify-between bg-gray-100 rounded-lg p-4 items-center'>
                        <h2 className='font-bold md:text-xl'>{item.name}</h2>
                        <Image
                            unoptimized="true"
                            src={item.image}
                            alt={item.name}
                            width={0}
                            height={0}
                            className='w-20'></Image>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Category