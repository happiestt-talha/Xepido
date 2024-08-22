import React from 'react';
import { useSelector } from 'react-redux';
import Cards from '../components/Cards';

const Wishlist = () => {
    const { currWishList } = useSelector((state) => state.wishList);

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
                    WishList ({currWishList.length})
                </h2>
                {currWishList.length === 0 ? (
                    <p className="text-center text-gray-600">No Items Here.</p>
                ) : (
                    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {currWishList.map((order, index) => (
                            <Cards key={index} product={order} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
