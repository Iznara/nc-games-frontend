import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';
import Sortbar from '../components/SortBar';
import { getReviews } from '../utils/api';

const REVIEW_LIMIT = 10;

const ReviewsList = () => {
    const { category_name } = useParams();
    const [reviews, setReviews] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [page, setPage] = useState(1);
    const [sort_by, setSort_by] = useState("created_at");
    const [order_by, setOrder_by] = useState("ASC");

    useEffect(() => {

        getReviews({
            page,
            category: category_name,
            sort_by: sort_by,
            order: order_by,
        })
            .then(({ reviews }) => {
                console.log(reviews);
                setReviews(reviews);
                setTotalCount(reviews[0].total_count);
            })
            .catch(console.log);

    }, [category_name, sort_by, order_by, page]);

    return (
        <div>
            <Sortbar
                order={order_by}
                setOrder={setOrder_by}
                sort_by={sort_by}
                setSort_by={setSort_by} />
            <h1> {category_name ? `${category_name.charAt(0).toUpperCase() + category_name.slice(1)} Reviews` : "All Reviews"}</h1>

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
                {reviews.map((review) => (
                    <ReviewCard key={review.review_id} review={review} />
                ))}
            </ul>
        </div>
    );
};

export default ReviewsList;