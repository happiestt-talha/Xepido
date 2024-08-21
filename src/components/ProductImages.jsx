import React from "react";
import { motion } from "framer-motion";

const ProductImages = ({ images, thumbnail }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <img src={thumbnail} alt="Product Thumbnail" className="rounded-lg drop-shadow-2xl mb-4" />
            <div className="grid grid-cols-3 gap-4">
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Product: ${index}`} className="rounded-lg drop-shadow-2xl" />
                ))}
            </div>
        </motion.div>
    );
};

export default ProductImages;
