import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "flowbite-react";
import axios from "axios";
import CustomerReview from "../components/CustomerReview";

const ProductDetail = () => {
    const id = useLocation().pathname.split("/").slice(-1)[0];  // Getting the product ID from the URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                console.log('id: ', id)
                const res = await axios.get(`https://dummyjson.com/products/${id}`);
                console.log('res: ', res.data)
                setProduct(res.data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <motion.img
                        src={product.thumbnail}
                        alt={product.title}
                        className="rounded-lg drop-shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    />

                    {/* Product Details */}
                    <div className="overflow-hidden">
                        <motion.h1
                            className="text-4xl font-bold mb-6 drop-shadow-2xl"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            {product.title}
                        </motion.h1>
                        <motion.p
                            className="text-lg mb-4"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            {product.description}
                        </motion.p>
                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Category: {product.category}</li>
                                <li>Brand: {product.brand}</li>
                                <li>Stock: {product.stock}</li>
                                <li>Rating: {product.rating} (based on {product.reviews?.length || 0} reviews)</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="flex items-center space-x-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-2xl font-bold">{`$${product.price}`}</span>
                            <Button gradientMonochrome="lime" outline size="lg">
                                Buy Now
                            </Button>
                        </motion.div>
                    </div>
                </div>

                <CustomerReview reviews={product.reviews} />
            </div>
        </section>
    );
};

export default ProductDetail;
