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
import QuantityButton from "../components/QuantityButton";

const ProductDetail = () => {
    const id = useLocation().pathname.split("/").slice(-1)[0];
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [productQuantity, setProductQuantity] = useState(1);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products/${id}`);
                const tempData = res.data;
                tempData.quantity = 1;
                setProduct(tempData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchProduct();
    }, [id]);


    const handleQuantityChange = (quantity) => {
        setProductQuantity(quantity);
        dispatch(updateQuantity({ id: product.id, quantity }));
        console.log("Quantity updated to:", quantity);
    };

    return (
        <>
            {loading ? (
                <Loaders />
            ) : (
                <>
                    <section className="flex flex-col md:flex-row py-16">
                        <div className="container mx-auto px-6 ">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="w-full md:w-1/2">
                                    <ProductImages images={product.images} thumbnail={product.thumbnail} />
                                </div>
                                <div className="overflow-hidden flex flex-col w-full md:w-1/2">
                                    <ProductInfo product={product} />
                                    <div className="flex items-center space-x-4 mt-6 w-full">
                                        <span className="flex flex-col justify-center items-center">
                                            <span className="text-2xl font-bold">{`$${product.price}`}</span>
                                            {/* <QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} /> */}
                                            <QuantityButton id={product.id} onQuantityChange={handleQuantityChange}/>
                                        </span>
                                        <CartButton product={{ ...product, quantity: productQuantity }} />
                                    </div>
                                </div>
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
