import React from 'react'

const ReviewItem = ({review}) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <span><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="w-16 h-16 rounded-full" alt={review.name} /></span>
        </div>
        <blockquote className="mt-6 text-xl text-lime-200 font-sans">{review.comment}
          <cite className="block mt-2 font-medium text-lime-200">~{review.name}</cite>
        </blockquote>
      </div>
    </>
  )
}

export default ReviewItem