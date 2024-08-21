import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CustomerReview from "../components/CustomerReview";
import CartButton from "../cart/CartButton";
import Loaders from "../components/Loaders";
import ProductInfo from "../components/ProductInfo";
import ProductImages from "../components/ProductImages";
import { TextInput } from "flowbite-react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../store/cart/cartSlice";

const ProductDetail = () => {
    const id = useLocation().pathname.split("/").slice(-1)[0];
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchProduct();
    }, [id]);


    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
        dispatch(updateQuantity({ id, quantity }));
    };

    return (
        <>
            {loading ? (
                <Loaders />
            ) : (
                <>
                    <section className="flex flex-col md:flex-row py-16">
                        <div className="container mx-auto px-6 ">
                            <div className="flex flex-col md:flex-row gap-12">
                                <img src={product.thumbnail} alt="" />
                                {/* <ProductImages images={product.images} thumbnail={product.thumbnail} /> */}
                                <div className="overflow-hidden">
                                    <ProductInfo product={product} />
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 mt-6">
                                <span className="flex flex-col justify-center">
                                    <span className="text-2xl font-bold">{`$${product.price}`}</span>
                                    {/* <QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} /> */}
                                    <TextInput
                                        type="number"
                                        placeholder="Quantity"
                                        value={quantity}
                                        min="1"
                                        onChange={handleQuantityChange}
                                        className="w-full text-center border border-gray-300 rounded"
                                    />
                                </span>
                                <CartButton product={{ ...product, quantity }} />
                            </div>

                            <CustomerReview reviews={product.reviews} />
                        </div>
                        {/* <div className="w-1/4 hidden md:inline border-l-lime-300 border-l-2 rounded">
                        <Cart type="sm" />
                    </div> */}
                    </section>
                </>
            )}
        </>
    );
};

export default ProductDetail;
