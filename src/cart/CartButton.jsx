import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const CartButton = ({ product }) => {
    const navigate = useNavigate();
    const { cartItems } = useSelector((state) => state.cart);

    const isInCart = cartItems.some((item) => item.id === product.id);


    const dispatch = useDispatch();
    const handleAddToCart = () => {
        console.log('product: ', product)
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = () => {
        navigate("/cart");
        // dispatch(removeFromCart(product.id));
    };

    // const handleOnClick = () => {
    //     setInCart(true);
    // };

    return (
        <Button
            // onClick={handleOnClick}
            gradientMonochrome="lime"
            outline
            size="lg"
            className="flex items-center gap-2 overflow-hidden"
        >
            <span
                className={`flex items-center gap-3 transition-transform duration-300 ${isInCart ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
                onClick={handleAddToCart}
            >
                <FaCartPlus size={30} />
                <span className="ml-2 hidden md:inline">Add to cart</span>
            </span>
            <span
                className={`flex items-center gap-3 transition-transform duration-300 absolute ${isInCart ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
                onClick={handleRemoveFromCart}
            >
                <BsCartCheckFill size={30} />
                <span className="ml-2 hidden md:inline">Go to cart</span>
            </span>
        </Button>
    );
};

export default CartButton;
