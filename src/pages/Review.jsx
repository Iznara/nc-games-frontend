import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../components/CommentList';
import ReviewCard from '../components/ReviewCard';
import { getReviewById } from '../utils/api';


const Review = () => {
    const { review_id } = useParams();
    const [review, setReview] = useState([1]);

    useEffect(() => {
        getReviewById(review_id)
            .then(({ review }) => {
                setReview(review);
            })
            .catch((err) => {
                console.log(err);
              })
    }, [review_id]);




    return (
        <div>
            <ReviewCard  key={review.review_id} review={review} />
            <CommentList review_id={review_id} />
        </div>
    );
};

export default Review;