'use client'

import React, { useState } from 'react'
import { data } from '../data/data.jsx'
import Image from 'next/image.js'

const Foods = () => {
    const [food, setFood] = useState(data)
    const [btn, setBtn] = useState({

        activeBtn: 0,

        btnList: [
            {
                id: 1,
                name: 'All',
                cta: 'all',
            },
            {
                id: 2,
                name: 'Burgers',
                cta: 'burger',
            },
            {
                id: 3,
                name: 'Salads',
                cta: 'salad',
            },
            {
                id: 4,
                name: 'Pizza',
                cta: 'pizza',
            },
            {
                id: 5,
                name: 'Chicken',
                cta: 'chicken',
            }
        ]
    })

    const [pBtn, setPBtn] = useState({
        activePBtn: null,
        pBtnList: [
            {
                price: '$'
            },
            {
                price: '$$'
            },
            {
                price: '$$$'
            },
            {
                price: '$$$$'
            },
            {
                price: '$$$$$'
            },
        ]
    }

    )

    const filterType = (category) => {
        setFood(
            data.filter((item) => {
                if (item.category.val === category) {
                    item.category.active = !item.category.active
                    return item.category
                } else if (category === 'all') {
                    item.category.active = !item.category.active
                    return item
                }

            })
        )
    }
    const filterPrice = (price) => {
        setFood(
            data.filter((item) => {
                return item.price === price
            })
        )
    }

    const setActive = (idx) => {
        pBtn.activePBtn = null
        setBtn({ ...btn, activeBtn: idx })
        console.log(btn)
    }


    const setActiveP = (idx) => {
        btn.activeBtn = null;
        setPBtn({ ...pBtn, activePBtn: idx })
        console.log(pBtn)
    }

    const apply = (idx) => {
        if (idx === btn.activeBtn) {
            
            return 'bg-primary text-white'
        } else {
            return 'bg-white'
        }
    }

    const applyP = (idx) => {
        if (idx === pBtn.activePBtn) {
            
            return 'bg-primary text-white'
        } else {
            return 'bg-white'
        }
    }

    return (
        <div className='max-w-[1640px] mx-auto px-4 py-10'>
            <div className=' pt-4'>
                <h3 className='text-primary text-4xl text-center mb-4 font-bold'>Top Rated Menu Items</h3>
                <div className='flex flex-col lg:flex-row gap-3 justify-between'>
                    <div>
                        <h4 className='text-lg mb-2 font-bold'>Filter By Type</h4>
                        <div className='flex gap-2'>
                            {btn.btnList.map((item, idx) => {
                                return <button key={idx} onClick={() => { filterType(item.cta), setActive(idx) }} className={`border-primary border px-2 rounded-lg hover:bg-primary hover:text-white w-20 ${apply(idx)}`}>{item.name}</button>
                            })}
                        </div>
                    </div>
                    <div>
                        <h4 className='text-lg mb-2 font-bold'>Filter By Price</h4>
                        <div className='flex gap-2'>
                            {pBtn.pBtnList.map((item, idx) => {
                                return <button key={idx} onClick={() => { filterPrice(item.price), setActiveP(idx) }} className={`border-primary border px-2 rounded-lg hover:bg-primary hover:text-white w-20 ${applyP(idx)}`}>{item.price}</button>
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 pt-4 gap-2'>
                {food.map((item, idx) => {
                    return <div key={idx} className='border shadow-lg rounded-xl hover:scale-105 duration-300'>
                        <Image
                            unoptimized="true"
                            src={item.image}
                            alt={item.name}
                            width={0}
                            height={0}
                            className='w-full h-[200px] object-cover rounded-xl' />
                        <div className='flex justify-between px-2 py-4 font-bold'>
                            <p>{item.name}</p>
                            <p className='bg-primary text-white rounded-xl px-1'>{item.price}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Foods