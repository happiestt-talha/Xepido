import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CustomerReview from "../components/CustomerReview";
import CartButton from "../cart/CartButton";
import Loaders from "../components/Loaders";
import ProductInfo from "../components/ProductInfo";
import ProductImages from "../components/ProductImages";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from "../store/cart/cartSlice";
import QuantityButton from "../components/QuantityButton";
import { IoIosHeartDislike } from "react-icons/io";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { addToWishList, removeFromWishList } from "../store/wishListSlice";

const ProductDetail = () => {
    const dispatch = useDispatch();
    const id = useLocation().pathname.split("/").slice(-1)[0];
    const { cartItems } = useSelector((state) => state.cart);
    const { currWishList } = useSelector((state) => state.wishList);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [productQuantity, setProductQuantity] = useState(1);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products/${id}`);
                const tempData = res.data;
                console.log("Temp Product :", tempData);
                const initialQuantity = cartItems.find((item) => item.id === tempData.id)?.quantity || 1;
                tempData.quantity = initialQuantity;
                setProduct(tempData);
                setProductQuantity(initialQuantity);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchProduct();
    }, [id, cartItems]);

    useEffect(() => {
        if (product) {
            const chkWishList = currWishList.some((item) => item.id === product.id);
            setIsInWishlist(chkWishList);
        }
    }, [product, currWishList]);

    const handleQuantityChange = (quantity) => {
        setProductQuantity(quantity);
        dispatch(updateQuantity({ id: product.id, quantity }));
        console.log("Quantity updated to:", quantity);
    };

    const handleWishlistToggle = () => {
        if (product) {
            dispatch(isInWishlist ? removeFromWishList(product.id) : addToWishList(product));
        }
    };

    return (
        <>
            {loading ? (
                <Loaders />
            ) : (
                <>
                    <section className="flex flex-col md:flex-row py-16">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="w-full md:w-1/2 relative">
                                    <ProductImages images={product.images} thumbnail={product.thumbnail} />
                                    <span
                                        className='absolute cursor-pointer top-[-15px] right-[-15px] text-rose-700 hover:text-red-600'
                                        onClick={handleWishlistToggle}
                                    >
                                        {isInWishlist ? <IoIosHeartDislike size={30} /> : <FaHeartCirclePlus size={30} />}
                                    </span>
                                </div>
                                <div className="overflow-hidden flex flex-col w-full md:w-1/2">
                                    <ProductInfo product={product} />
                                    <div className="flex items-center space-x-4 mt-6 w-full">
                                        <span className="flex flex-col justify-center items-center">
                                            <span className="text-2xl font-bold">{`$${product.price}`}</span>
                                            <QuantityButton
                                                initialQuantity={productQuantity}
                                                onQuantityChange={handleQuantityChange}
                                            />
                                        </span>
                                        <CartButton product={{ ...product, initialQuantity: productQuantity }} />
                                    </div>
                                </div>
                            </div>
                            <CustomerReview reviews={product.reviews} />
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default ProductDetail;
