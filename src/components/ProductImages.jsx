import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "flowbite-react";

const ProductImages = ({ images, thumbnail }) => {
    return (
        <div className="product-images-container">
            {/* Thumbnail */}
            <div className="thumbnail-container mb-6">
                <motion.img
                    src={thumbnail}
                    alt="Product Thumbnail"
                    className="rounded-lg drop-shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                />
            </div>

            <p className="text-xl font-black text-center mb-4 text-lime-500">Product Images</p>

            {/* Product Images */}
            <div className="product-images">
                {images.length === 0 ? (
                    <div className="text-gray-500">No images available</div>
                ) : images.length === 1 ? (
                    <motion.img
                        src={images[0]}
                        alt="Product Image"
                        className="rounded-lg drop-shadow-2xl mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                ) : (
                    <Carousel
                        slideInterval={1500}
                        className="w-full md:mx-auto h-screen bg-slate-200 dark:bg-gray-500 rounded-lg mb-4"
                    >
                        {images.map((image, index) => (
                            <motion.img
                                key={index}
                                src={image}
                                alt={`Product Image ${index + 1}`}
                                className="h-screen"
                                style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                            />
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
    );
};

export default ProductImages;
