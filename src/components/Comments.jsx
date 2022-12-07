import React from "react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getCommentsByReviewId } from "../utils/api";

export default function Comments() {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { review_id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        getCommentsByReviewId(review_id).then((commentsFromApi) => {
            setComments(commentsFromApi)
            setIsLoading(false)
        });
    }, [review_id]);

    return (
        <main>
            <section className="comments">
            <h2>Comments</h2>
                        {comments.length === 0 ? (
                            <p>No comments for this review yet</p>
                        ) : (
                     <ul className="Comments-list">
                        {comments.map((comment) => {
                            return (
                                <li className="Comment-card" key={comment.comment_id}>
                                    <h4>{comment.body}</h4>
                                    <p>Author: {comment.author}</p>
                                    <p>Created at: {comment.created_at}</p>
                                    <p>Vote count: {comment.votes}</p>
                                </li>
                            )
                        })}
                     </ul>
                        )}
            </section>
        </main>
    )
}