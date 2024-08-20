import React from "react";
import { motion } from "framer-motion";
import { Avatar, Rating } from "flowbite-react";
import { format } from "date-fns"; // To format the date

const CustomerReview = ({ reviews }) => {
    if (!reviews || reviews.length === 0) {
        return <div>No reviews yet.</div>;
    }


    return (
        <div className="py-10">
            <motion.h3
                className="text-3xl font-bold mb-6 text-center text-lime-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{  once: true }}
                transition={{ duration: 0.8 }}
            >
                Customer Reviews
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        className="p-6 rounded-lg shadow-md shadow-lime-600"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{  once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <div className="flex items-center mb-4">
                            <Avatar
                                img={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                                    review.reviewerName
                                )}&background=random`}
                                rounded
                            />
                            <div className="ml-4">
                                <h4 className="text-lg font-bold">
                                    {review.reviewerName}
                                </h4>
                                <p className="text-sm text-gray-500">
                                    {format(new Date(review.date), "MMMM dd, yyyy")}
                                </p>
                                <Rating>
                                    <Rating.Star filled={review.rating >= 1} />
                                    <Rating.Star filled={review.rating >= 2} />
                                    <Rating.Star filled={review.rating >= 3} />
                                    <Rating.Star filled={review.rating >= 4} />
                                    <Rating.Star filled={review.rating >= 5} />
                                </Rating>
                            </div>
                        </div>
                        <p className="text-sm">{review.comment}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReview;
