import Image from 'next/image'
import React from 'react'

const Headline = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6'>
            <div className='relative rounded-xl'>
                <div className='absolute text-white w-full h-full bg-black/30 rounded-xl'>
                    <h3 className='text-xl lg:text-2xl font-bold px-2 pt-4'>Sun's Out, BOGO's Out</h3>
                    <p className='px-2'>Through 8/26</p>
                    <button className=' absolute bottom-4 px-4 py-1 mx-2 border-primary border rounded-lg hover:bg-primary hover:text-white bg-white text-black'>Order Now</button>
                </div>
                <Image
                    unoptimized="true"
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Landscape picture"
                    width={0}
                    height={0}
                    className='w-full max-h-[200px] h-full object-cover rounded-xl' />
            </div>

            <div className='relative rounded-xl'>
                <div className='absolute text-white w-full h-full bg-black/30 rounded-xl'>
                    <h3 className='text-xl lg:text-2xl font-bold px-2 pt-4'>New Restaurants</h3>
                    <p className='px-2'>Added Daily</p>
                    <button className=' absolute bottom-4 px-4 py-1 mx-2 border-primary border rounded-lg hover:bg-primary hover:text-white bg-white text-black'>Order Now</button>
                </div>
                <Image
                    unoptimized="true"
                    src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Landscape picture"
                    width={0}
                    height={0}
                    className='w-full max-h-[200px] h-full object-cover rounded-xl' />
            </div>

            <div className='relative rounded-xl'>
                <div className='absolute text-white w-full h-full bg-black/30 rounded-xl'>
                    <h3 className='text-xl lg:text-2xl font-bold px-2 pt-4'>We Deliver Desserts Too</h3>
                    <p className='px-2'>Tasty Treats</p>
                    <button className=' absolute bottom-4 px-4 py-1 mx-2 border-primary border  rounded-lg hover:bg-primary hover:text-white bg-white text-black'>Order Now</button>
                </div>
                <Image
                    unoptimized="true"
                    src="https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Landscape picture"
                    width={0}
                    height={0}
                    className='w-full max-h-[200px] h-full object-cover rounded-xl' />
            </div>
        </div>
    )
}

export default Headline