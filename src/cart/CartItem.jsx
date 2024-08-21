import React from 'react'
import { BsCartXFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../store/cart/cartSlice'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CartItems = ({ item }) => {
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(removeFromCart(item.id))
    }
    return (
        <>
            <div className='flex flex-col gap-3 relative'>
                <Link to={`/product-detail/${item.id}`}  >
                    <div className='flex items-center gap-3 text-gray-100  px-2 bg-lime-900 border-x-8 border-lime-400 rounded'>
                        <img src={item.thumbnail} className='w-28' alt="item" />
                        <div className='flex flex-col'>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>
                </Link>

                <motion.span onClick={handleRemove} className='absolute top-0 right-1 cursor-pointer bg-transparent text-red-500 hover:text-red-600 font-bold'
                initial={{ opacity: 1,x: 0 }}
                whileTap={{ opacity: 0,x: 100 }}
                
                transition={{ duration: 0.3,delay: 0.3 }}
                >
                    <BsCartXFill size={35} />
                </motion.span>

            </div>

        </>
    )
}

export default CartItems