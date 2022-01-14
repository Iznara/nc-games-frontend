import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';
import { getReviewById } from '../utils/api';


const Review = () => {
    const { review_id } = useParams();
    const [review, setReview] = useState([1]);

    useEffect(() => {
        getReviewById(review_id)
            .then(({ review }) => {
                setReview(review);
                console.log("Review.jsx",review);
                // setTotalCount(reviews[0].total_count);
            })
            .catch(console.log)
    }, [review_id]);




    return (
        <div>
            <ReviewCard  key={review.review_id} review={review} />

        </div>
    );
};

export default Review;