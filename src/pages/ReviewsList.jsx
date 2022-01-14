import React, { useEffect, useState } from 'react';
import ReviewCard from '../components/ReviewCard';
import { getReviews } from '../utils/api';

const REVIEW_LIMIT = 10;

const ReviewsList = () => {
    const [reviewss, setReviewss] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {

            getReviews({page})
            .then(({ reviews }) => {
                //console.log(reviews);
                setReviewss(reviews);
                setTotalCount(reviews[0].total_count);
            })
            .catch(console.log);
        
    }, [page]);

    return (
        <div>
            {/* <p>Category: {categoriess.slug}</p> */}

            <button
                disabled={page === 1}
                onClick={() => {
                    setPage((currPage) => currPage - 1)
                }}  >PREV</button>


            <button
                disabled={REVIEW_LIMIT * page >= totalCount}
                onClick={() => {
                    setPage((currPage) => currPage + 1)
                }}  >NEXT</button>

            
                <ul>
                    {reviewss.map((review)=> (
                        <ReviewCard  key={review.review_id} review={review} />
                    ))}
                </ul> 
        </div>
    );
};

export default ReviewsList;