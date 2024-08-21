import React from 'react'
import img from '../assets/images/emotional.png'

const EmptyCart = ({ type }) => {
    return (
        <>
            <div className={`${type !== "sm" ? "text-center flex flex-col md:flex-row items-center gap-9" : "text-center flex flex-col items-center gap-9"}`}>
                <img src={img} className={`${type !== "sm" ? "w-1/3" : "w-1/2"}`} style={{ filter: 'drop-shadow(0 0 0.75rem #17eb13)' }} alt="empty-cart" />
                <p className='text-5xl font-mono font-extrabold'>Your cart is empty</p>
            </div>
        </>
    )
}

export default EmptyCart