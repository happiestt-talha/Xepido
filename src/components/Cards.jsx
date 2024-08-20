import { Button, Card } from 'flowbite-react'
import React from 'react'
import RatingStar from './RatingStar'
import { Link } from 'react-router-dom'

const Cards = ({ product }) => {
    return (
        <>
            <Link to={`/product-detail/${product.id}`}>
                <Card
                    className="max-w-sm  bg-cover"
                    renderImage={() => (
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    )}
                >
                    <Link href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {product.title}
                        </h5>
                    </Link>
                    <div className="mb-5 mt-2.5 flex items-center">
                        <RatingStar />
                        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                            {product.rating.rate}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                        <Link
                            href="#"
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Add to cart
                        </Link>
                    </div>
                </Card>
            </Link>
        </>
    )
}

export default Cards