import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import img from '../assets/images/emotional.png'

const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart)

    // if (cartItems.length === 0) {
    //     return <div className='text-center flex flex-col md:flex-row items-center gap-9'>
    //         <img src={img} className='w-1/3 ' style={{ filter: 'drop-shadow(0 0 0.75rem #17eb13)' }} alt="empty-cart" />
    //         <p className='text-5xl font-mono font-extrabold'>Your cart is empty</p>
    //     </div>
    // }
    return (
        <>
            {
                cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))
            }
        </>
    )
}

export default Cart