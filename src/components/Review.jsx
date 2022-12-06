import React from "react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import Comments from "./Comments";

export default function Review() {
    const [review, setReview] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { review_id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        getReviewById(review_id).then((reviewFromApi) => {
            setReview(reviewFromApi)
            setIsLoading(false)
        });
    }, [review_id]);

    return (
        <main>
            {isLoading ? (
                <h3 id="loading">Loading ...</h3>
            ) : (
                <section className="Review-id">
                     <h3>{review.title}</h3>
                     <img src={review.review_img_url} alt={review.title}></img>
                     <p>{review.category}</p>
                     <br />
                     <p>{review.review_body}</p>
                     <p>Owner: {review.owner}</p>
                     <p>Created at: {review.created_at}</p>
                     <p>Votes: {review.votes}</p>
                     <br />
                     <Comments />
                </section>
            )}
        </main>
    )
}