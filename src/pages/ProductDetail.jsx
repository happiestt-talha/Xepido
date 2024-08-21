import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import CustomerReview from "../components/CustomerReview";
import Cart from "../cart/Cart";
import CartButton from "../cart/CartButton";
import Loaders from "../components/Loaders";

const ProductDetail = () => {

    const id = useLocation().pathname.split("/").slice(-1)[0];  // Getting the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                console.log('id: ', id)
                const res = await axios.get(`https://dummyjson.com/products/${id}`);
                console.log('res: ', res.data)
                setProduct(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchProduct();
    }, [id]);


    return (
        <>  {
            loading
                ? <Loaders />
                : <section className="flex flex-col md:flex-row py-16">

                    <div className="container mx-auto px-6 w-3/4">
                        <div className="flex flex-col md:flex-row gap-12">
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

                                <div className="flex items-center space-x-4" >
                                    <span className="text-2xl font-bold">{`$${product.price}`}</span>
                                    <CartButton product={product} />
                                </div>

                            </div>

                        </div>

                        <CustomerReview reviews={product.reviews} />
                    </div>

                    <div className=" w-1/4 hidden md:inline  border-l-lime-300 border-l-2 rounded">
                        <Cart type="sm" />
                    </div>

                </section>
        }
        </>
    );
};

export default ProductDetail;
