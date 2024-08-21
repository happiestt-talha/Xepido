import React from 'react';

const QuantityButton = ({ initialQuantity, onQuantityChange }) => {
    const [quantity, setQuantity] = React.useState(initialQuantity);

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
    };

    return (
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
                className="bg-red-500 text-white px-3 py-1 font-bold hover:bg-red-600 transition-all"
                onClick={handleDecrement}
            >
                -
            </button>
            <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center px-2 py-1 border-l border-r border-gray-300 bg-white text-gray-900 focus:outline-none"
            />
            <button
                className="bg-green-500 text-white px-3 py-1 font-bold hover:bg-green-600 transition-all"
                onClick={handleIncrement}
            >
                +
            </button>
        </div>
    );
};

export default QuantityButton;
