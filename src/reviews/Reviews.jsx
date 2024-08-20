import React from 'react'
import { Carousel } from 'flowbite-react'
import ReviewItem from './ReviewItem'

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            company: "ABC Company",
            date: "2022-01-01",
            name: "Sarah",
            img: "https://images.unsplash.com/photo-1600486913747-6c4b67a18c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 5
        },
        {
            id: 2,
            company: "DEF Company",
            date: "2022-01-01",
            name: "John",
            img: "https://images.unsplash.com/photo-1600486913747-6c4b67a18c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 4
        },
        {
            id: 3,
            company: "GHI Company",
            date: "2022-01-01",
            name: "Mike",
            img: "https://images.unsplash.com/photo-1600486913747-6c4b67a18c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 3
        },
        {
            id: 4,
            company: "JKL Company",
            date: "2022-01-01",
            name: "Talha",
            img: "https://images.unsplash.com/photo-1600486913747-6c4b67a18c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 2
        },
        {
            id: 5,
            company: "MNO Company",
            date: "2022-01-01",
            name: "Noah",
            img: "https://images.unsplash.com/photo-1600486913747-6c4b67a18c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 1
        },
        {
            id: 6,
            company: "PQR Company",
            date: "2022-01-01",
            name: "Tesla",
            img: "https://images.unsplash.com/photo-1600486913747-6c4b67a18c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 5
        },
        {
            id: 7,
            company: "STU Company",
            date: "2022-01-01",
            name: "Nibba",
            img: "https://images.unsplash.com/photo-1600486913747-6c4b67a18c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 5
        },
        {
            id: 8,
            company: "VWX Company",
            date: "2022-01-01",
            name: "Manzoor",
            img: "https://images.unsplash.com/photo-1600486913747-6c4b67a18c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 5
        },
        {
            id: 9,
            company: "YZ Company",
            date: "2022-01-01",
            name: "Reshma",
            img: "https://images.unsplash.com/photo-1600486913747-6c4b67a18c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 5
        }
    ]
    return (
        <>
            <Carousel
                slideInterval={1500}
                className="w-full md:w-1/2 md:mx-auto h-56"
            >
                {reviews.map((review) => (
                    <ReviewItem key={review.id} review={review} />
                ))}
            </Carousel>
        </>
    )
}

export default Reviews