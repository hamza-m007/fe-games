import axios from 'axios';

const gameReviews = axios.create({
    baseURL: "https://boardgame-reviews-backend.cyclic.app/api"
})

export const getReviews = () => {
    return gameReviews.get("/reviews").then((res) => {
        return res.data.reviews
    })
}

export const getReviewById = (review_id) => {
    return gameReviews.get(`/reviews/${review_id}`).then((res) => {
        return res.data.review
    })
}

export const getCommentsByReviewId = (review_id) => {
    return gameReviews.get(`/reviews/${review_id}/comments`).then((res) => {
        return res.data.comments
    })
}