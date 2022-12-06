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
                <h3 id="Loading">Loading...</h3>
            ) : (
                <ul className="Review-list">
                    {reviews.map((review) => {
                        return (
                            <li className="Review-card" key={review.review_id}>
                                <img src={review.review_img_url} alt={review.title}></img>
                                <h4>{review.title}</h4>
                                <p>{review.category}</p>
                                <p>{review.owner}</p>
                                <p>{review.created_at.slice(0, 10)}</p>
                            </li>
                        )
                    })}
                </ul>
            )}
        </main>
    )


}