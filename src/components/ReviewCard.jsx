import React from 'react';
import * as dayjs from "dayjs";
import { Link } from 'react-router-dom'
import { ImageContainer, CardContainer } from '../styles/styles.components';
import VoteReviewButton from './VoteReviewButton';


const ReviewCard = ({ review }) => {

    return (
        <CardContainer>

            <div>
                <h2>{review.title}</h2>
                <p>{review.category}</p>
                <ImageContainer
                    src={review.review_img_url}
                    alt={review.title} />
                <p>Date Posted: {dayjs(review.created_at).format("MMM D, YYYY h:mm A")}</p>
                <p>Designer: {review.designer}</p>
                <p>Posted By: {review.owner}</p>
                <p>{review.review_body}</p>
                <Link to={`/reviews/${review.review_id}`}> Click here to leave a comment </Link>
                <p>Comments: {review.comment_count}</p>
                <VoteReviewButton review={review} />
            </div>
        </CardContainer>
    );
};

export default ReviewCard;