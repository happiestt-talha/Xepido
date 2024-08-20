import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetail = () => {
    const id = useLocation().pathname.split("/").at(-1)
    const [product, setProduct] = useState({})

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(res.data)
        }

        getData()
    }, [id])


    return (
        <>
            <div className='flex min-h-screen'>

                <div className='w-full  md:w-2/3 p-5'>

                    <div className='flex flex-col gap-3 p-2 bg-slate-300 dark:bg-gray-500  rounded border-2 border-teal-600'>
                        <h1 className='text-3xl font-bold mb-3'>{product.title}</h1>
                        <motion.img
                            initial={{ opacity: 0, x: -350 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className=' mx-auto h-96  rounded ' src={product.image} alt={product.title} />
                        <div className='flex justify-between items-center'>
                            <span className='text-lg bg-teal-900 text-white px-2 max-w-fit rounded text-center '>{product.category}</span>
                            <span className='text-lg bg-rose-600 text-white px-2 max-w-fit rounded text-center '>${product.price}</span>
                        </div>

                        <p className='text-lg font-semibold '>{product.description}</p>

                    </div>

                </div>

                <div className='w-1/3 hidden md:inline bg-purple-400'>
                    Cart
                </div>

            </div>
        </>
    )
}

export default ProductDetail