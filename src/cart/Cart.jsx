import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'

const Cart = ({ type }) => {
    const { cartItems } = useSelector((state) => state.cart)

    if (cartItems.length === 0) {
        <EmptyCart type={type} />
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