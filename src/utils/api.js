import axios from 'axios';

const gameReviews = axios.create({
    baseURL: "https://boardgame-reviews-backend.cyclic.app/api"
})

export const getReviews = () => {
    return gameReviews.get("/reviews").then((res) => {
        return res.data.reviews
    })
}