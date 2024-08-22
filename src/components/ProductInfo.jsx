import React from "react";
import { motion } from "framer-motion";

const ProductInfo = ({ product }) => {
    return (
        <div className="bg-slate-300 dark:bg-gray-600 rounded-md p-8">
            <span>
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
                    className="text-xl font-semibold font-serif mb-4 text-yellow-400 "
                    style={{textShadow: '0 0 0.75rem #eb8d13'}}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {product.stock > 0 ? `${product.stock} left` : "Out of Stock"}
                </motion.p>
            </span>
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
                    <li>SKU: {product.sku}</li>
                    <li>Weight: {product.weight} g</li>
                    <li>Dimensions: {`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm`}</li>
                    <li className="text-red-600">Warranty: {product.warrantyInformation}</li>
                    <li>Shipping Info: {product.shippingInformation}</li>
                    <li>Availability: {product.availabilityStatus}</li>
                    <li>Return Policy: {product.returnPolicy}</li>
                </ul>
            </motion.div>
        </div>
    );
};

export default ProductInfo;
