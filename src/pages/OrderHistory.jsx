import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'flowbite-react';

const OrderHistory = () => {
    const {history} = useSelector((state) => state.orderHistory);

    return (
        <div className="min-h-screen bg-slate-400 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
                    Order History
                </h2>
                {history.length === 0 ? (
                    <p className="text-center text-gray-600">No orders found.</p>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {history.map((order, index) => (
                            <Card key={index} className="bg-white shadow-lg">
                                <h3 className="text-lg font-bold text-green-400">
                                    Order ID: <span className="font-sans">{order.id}</span>
                                </h3>
                                <p className="">Date: {order.date}</p>
                                <p className=" font-semibold">
                                    Total:${Number(order.total).toFixed(2)}
                                </p>
                                <ul className="mt-4 space-y-2">
                                    {order.items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex justify-between items-center "
                                        >
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="w-12 h-12 object-cover"
                                            />
                                            <span>{item.title}</span>
                                            <span className="border-4 border-lime-500 bg-slate-300 dark:bg-gray-500 px-2 py-1 rounded">{item.quantity} x ${Number(item.price).toFixed(2)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderHistory;
