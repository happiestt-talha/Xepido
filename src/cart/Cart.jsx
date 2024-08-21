import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import img from '../assets/images/emotional.png'

const Cart = ({ type }) => {
    const { cartItems } = useSelector((state) => state.cart)

    if (cartItems.length === 0) {
        return <div className={`${type !== "sm" ? "text-center flex flex-col md:flex-row items-center gap-9": "text-center flex flex-col items-center gap-9"}`}>
            <img src={img} className={`${type !== "sm" ? "w-1/3" : "w-1/2"}`} style={{ filter: 'drop-shadow(0 0 0.75rem #17eb13)' }} alt="empty-cart" />
            <p className='text-5xl font-mono font-extrabold'>Your cart is empty</p>
        </div>
    }
    return (
        <>
            <div className={`${type !== "sm" ? "grid grid-cols-1 md:grid-cols-3 gap-8 p-3 relative" : "grid grid-cols-1 gap-10 p-2"}`}>
                {
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                }
            </div >
        </>
    )
}

export default Cart