import React from "react";
//eslint-disable-next-line
import { Button, Card, Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import CustomerReview from "../components/CustomerReview";

const LandingPage = () => {
    const reviews = [
        { text: "Great product, fast delivery!", name: "John Doe", location: "New York, USA", avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" },
        { text: "Excellent customer service.", name: "Jane Smith", location: "London, UK", avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" },
        { text: "I love this product!", name: "Michael Johnson", location: "Paris, France", avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" },
        { text: "I'm really satisfied with the purchase.", name: "Emily Davis", location: "Sydney, Australia", avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" },
        { text: "I highly recommend this product.", name: "David Wilson", location: "Tokyo, Japan", avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" },
        { text: "I'm really happy with the purchase.", name: "Sarah Thompson", location: "Dubai, UAE", avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" },
        // Add more reviews here...
    ];

    <CustomerReview reviews={reviews} />

    return (
        <>
            <section className="relative h-screen text-gray-800">
                <div className="absolute z-40 inset-0 bg-gradient-to-r from-lime-400 to-yellow-200 opacity-60"></div>
                <div className="absolute z-20 inset-0 h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')" }}></div>
                <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-50">
                    <motion.h1 className="text-6xl font-extrabold  mb-4 z-10" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                        Welcome to Xepido
                    </motion.h1>
                    <motion.p className="text-2xl  mb-8 z-10" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                        Discover exclusive products with amazing offers
                    </motion.p>
                    <Link to="/product-list">
                        <Button gradientMonochrome="lime" outline size="lg" className="z-10">
                            Shop Now
                        </Button>
                    </Link>
                </div>
            </section>

            <section className="py-20 ">
                <div className="container mx-auto px-6 text-center">
                    <motion.h2 className="text-4xl font-bold text-lime-500 mb-12" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 1 }}>
                        Featured Products
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {["Product 1", "Product 2", "Product 3"].map((product, index) => (
                            <motion.div key={product} initial={{ opacity: 0, x: index === 0 ? -100 : index === 2 ? 100 : 0 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }}>
                                <Card imgSrc="https://image.freepik.com/free-vector/online-shopping-concept-illustration_114360-1150.jpg">
                                    <h3 className="text-2xl font-bold">{product}</h3>
                                    <p className="">${index * 20 + 50}.00</p>
                                    <Button gradientMonochrome="lime" outline>
                                        Add to Cart
                                    </Button>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 ">
                <div className="container mx-auto px-6">
                    <motion.h2 className="text-4xl font-bold text-lime-500 mb-12 text-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 1 }}>
                        Why Choose Us
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {["Fast Delivery", "Secure Payments", "24/7 Support"].map((feature, index) => (
                            <motion.div key={feature} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }}>
                                <h3 className="text-2xl font-bold mb-4">{feature}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero id lorem malesuada placerat.</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 ">
                <div className="container mx-auto px-6">
                    <motion.h2 className="text-4xl font-bold text-lime-500 mb-12 text-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 1 }}>
                        What Our Customers Say
                    </motion.h2>
                    <CustomerReview reviews={reviews} />

                    {/* <div className="h-56 ">
                        <Carousel slideInterval={5000} indicators={false} rightControl={<BiRightArrow className="text-3xl text-gray-900 dark:text-white" />} leftControl={<BiLeftArrow className="text-3xl text-gray-900 dark:text-white" />}>
                            {["Customer 1", "Customer 2", "Customer 3"].map((customer, index) => (
                                // <CustomerReview key={customer} name={customer} index={index} />
                                <div className="p-8  shadow-lg rounded-lg">
                                    <p className="italic text-lg">"{customer} review text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                                    <p className="mt-4 text-right font-bold">- {customer}</p>
                                </div>
                            ))}
                        </Carousel>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default LandingPage;
