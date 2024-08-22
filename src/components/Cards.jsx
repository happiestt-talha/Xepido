import { Button, Card } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'
import { FaHeartCirclePlus } from "react-icons/fa6";
import { IoIosHeartDislike } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import { addToWishList, removeFromWishList } from '../store/wishListSlice'
const Cards = ({ product }) => {
    const dispatch = useDispatch()
    const { currWishList } = useSelector((state) => state.wishList)
    const isInWishlist = currWishList.some((item) => item.id === product.id)
    return (
        <>
            <Link to={`/product-detail/${product.id}`}>
                <motion.div
                    className="max-w-sm mx-auto relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <Card imgSrc={product.thumbnail}>
                        <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                        <p className="text-lg mb-4">{`$${product.price}`}</p>
                        <p className="text-sm mb-4">Rating: {product.rating}</p>
                        <Button gradientMonochrome="lime" outline size="lg">
                            <span className="flex items-center gap-3">
                                Check Out
                                <BsArrowRight size={20} />
                            </span>
                        </Button>
                    </Card>
                    <span className='absolute top-[-15px] right-[-15px] text-rose-700 hover:text-red-600' onClick={() => dispatch(isInWishlist ? removeFromWishList(product.id) : addToWishList(product))} >
                        {
                            isInWishlist ? <IoIosHeartDislike size={30} /> : <FaHeartCirclePlus size={30} />
                        }
                    </span>
                </motion.div>
            </Link>
        </>
    )
}

export default Cards