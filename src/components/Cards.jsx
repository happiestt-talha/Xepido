import { Button, Card } from 'flowbite-react'
import React from 'react'
import RatingStar from './RatingStar'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Cards = ({ product }) => {
    return (
        <>
            <Link to={`/product-detail/${product.id}`}>
                <motion.div
                    className="max-w-sm mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <Card imgSrc={product.thumbnail}>
                        <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                        <p className="text-lg mb-4">{`$${product.price}`}</p>
                        <p className="text-sm mb-4">Rating: {product.rating}</p>
                        <Link to={`/product-detail/${product.id}`}>
                            <Button gradientMonochrome="lime" outline size="lg">
                                View Details
                            </Button>
                        </Link>
                    </Card>
                </motion.div>
            </Link>
        </>
    )
}

export default Cards