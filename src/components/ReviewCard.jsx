import React from 'react';
import {Link} from 'react-router-dom'
import { ImageContainer, CardContainer } from '../styles/styles.components';

const ReviewCard = (props) => {

    return (
        <CardContainer>

            <div>
            <Link to={`/reviews/${props.review.review_id}`}> {props.review.title} </Link>
                <p>{props.review.category}</p>
                <ImageContainer 
                src={props.review.review_img_url} 
                alt={props.review.title} />
                <p>Date Posted: {props.review.created_at}</p>
                <p>Designer: {props.review.designer}</p>
                <p>Posted By: {props.review.owner}</p>
                <p>{props.review.review_body}</p>
                <p>Comments: {props.review.comment_count}</p>
                {props.review.votes === null ? 
                <p>Votes: 0</p> :
                <p>Votes: {props.review.votes}</p>}
                
            </div>
        </CardContainer>
    );
};

export default ReviewCard;