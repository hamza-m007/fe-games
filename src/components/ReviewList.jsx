import React, { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

export default function ReviewList() {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            getReviews().then((reviewList) => {
                setReviews(reviewList)
                setIsLoading(false)
            })
        }, 0);
    }, [])

    return (
        <main>
            <h2>Review List</h2>
            {isLoading ? (
                <h3 id="loading">Loading...</h3>
            ) : (
                <ul className="revire-list">
                    {reviews.map((review) => {
                        return (
                            <li className="review-card" key={review.review_id}>
                                <img src={review.review_img_url} alt={review.title} />
                                <h3>{review.title}</h3>
                                <h4>{review.category}</h4>
                                <h4>{review.owner}</h4>
                                <h4>{review.created_at}</h4>
                            </li>
                        )
                    })}
                </ul>
            )}
        </main>
    )


}