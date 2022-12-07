import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { patchReview } from "../utils/api";

export default function ReviewVote({ review }) {
    const [votes, Setvotes] = useState(0)
    const [upVote, setUpVote] = useState(false)
    const [resetUpVote, setResetUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)
    const [resetDownVote, setResetDownVote] = useState(false)
    const [err, setErr] = useState(null)
    const { review_id } = useParams()

    const incUpVote = () => {
        setErr(null)
        Setvotes((curr) => {
            return curr + 1
        })
        patchReview(review_id, 1).catch((error) => {
            setErr(error)
        })
        setUpVote(true)
        setResetUpVote(true)
    }

    const descUpVote = () => {
        setErr(null)
        Setvotes((curr) => {
            return curr -1
        })
        patchReview(review_id, -1).catch((error) => {
            setErr(error)
        })
        setUpVote(false)
        setResetUpVote(null)
    }

    const incDownVote = () => {
        setErr(null)
        Setvotes((curr) => {
            return curr -1
        })
        patchReview(review_id, -1).catch((error) => {
            setErr(error)
        })
        setDownVote(true)
        setResetDownVote(true)
    }

    const descDownVote = () => {
        setErr(null)
        Setvotes((curr) => {
            return curr + 1
        })
        patchReview(review_id, 1).catch((error) => {
            setErr(error)
        })
        setDownVote(false)
        setResetDownVote(null)
    }

        return (
            <div className="review-votes">
                <section>
                    <button 
                        disabled={resetDownVote} 
                        onClick={upVote ? descUpVote : incUpVote}
                    >
                        <span aria-label="increase votes">⬆</span>
                    </button>
                    --
                    <button 
                        disabled={resetUpVote} 
                        onClick={downVote ? descDownVote : incDownVote}
                    >
                        <span aria-label="increase votes">⬇</span>
                    </button>
                </section>
                <section>
                    <p>Votes: {review.votes + votes}</p>
                    {err ? (
                        <span>Sorry, your vote was not added</span>
                    ) : null}
                </section>
            </div>
        )



    
    // return (
    //     <section>
    //         <button onClick={incHandleClick}>
    //             <span aria-label="Inc votes">⬆</span>
    //         </button>
    //         --{votes}--
    //         <button onClick={descHandleClick}>
    //             <span aria-label="Desc votes">⬇</span>
    //         </button>
    //     </section>
    // )
}
// const incHandleClick = () => {
//     // Setvotes((currentVotes) => {
//     //     // return currentVotes.map((vote) => {
//     //     //     if (review.review_id === review_id) {
//     //     //         return { ...review}
//     //     //     }
//     //     // })
//     //     console.log(currentVotes);
//     //     return patchReview(review_id, currentVotes).then(([newReview]) => {
//     //         console.log(newReview);
//     //         // return newReview
//     //         return 1
//     //     })
//         // return currentVotes
//     // })

//     return patchReview(review_id, review.votes).then((newReview) => {
//         console.log(newReview);
//     }) 
// }