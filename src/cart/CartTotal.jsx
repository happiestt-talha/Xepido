import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cart/cartSlice';
import EmptyCart from './EmptyCart';
import { GiTrashCan } from 'react-icons/gi';
import QuantityButton from '../components/QuantityButton';

const CartTotal = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleQuantityChange = (id, newQuantity) => {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
        console.log("Quantity updated to:", newQuantity);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="p-6 bg-gradient-to-r from-lime-300 to-green-400 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
            {cartItems.length > 0 ? (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center gap-2 mb-4 p-4 rounded-lg shadow-lg border-4 border-lime-700" style={{ backdropFilter: 'blur(50px)' }}>
                            <div className="flex items-center">
                                <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="flex items-center relative">
                                <QuantityButton
                                    initialQuantity={item.quantity}
                                    onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
                                />
                                <p className="ml-4 text-lg font-semibold text-gray-900">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                            <span className="absolute top-0 right-1 cursor-pointer text-red-500 hover:text-red-600">
                                <button
                                    className="text-red-500 hover:text-red-600 font-bold"
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                    <GiTrashCan size={30} />
                                </button>
                            </span>
                        </div>
                    ))}
                    <div className="mt-8 p-4 rounded-lg shadow-lg text-gray-900">
                        <h3 className="text-2xl font-bold">Total: ${calculateTotalPrice()}</h3>
                    </div>
                </div>
            ) : (
                <EmptyCart />
            )}
        </div>
    );
};

export default CartTotal;
