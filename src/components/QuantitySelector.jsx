import { TextInput } from "flowbite-react";
import React from "react";

const QuantitySelector = ({ quantity, onQuantityChange }) => {
    const handleChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value));
        onQuantityChange(value);
    };

    return (
        <TextInput
            type="number"
            placeholder="Quantity"
            value={quantity}
            min="1"
            onChange={handleChange}
            className="w-full text-center border border-gray-300 rounded"
        />
    );
};

export default QuantitySelector;
