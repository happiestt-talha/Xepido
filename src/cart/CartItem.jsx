import React from 'react'

const CartItems = ({ item }) => {
    return (
        <>
            <div className='flex flex-col gap-3 p-9'>
                <div className='flex items-center gap-3 text-gray-100 py-4 px-2 bg-lime-900 border-x-8 border-lime-400 rounded'>
                    <img src={item.thumbnail} className='w-28' alt="item" />
                    <div className='flex flex-col'>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                    </div>
                    <div>
                        <p>{item.quantity}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems