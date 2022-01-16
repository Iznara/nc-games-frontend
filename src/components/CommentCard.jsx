import React from 'react';
import * as dayjs from "dayjs";
import VoteCommentButton from './VoteCommentButton';
import { CardContainer } from '../styles/styles.components';

const CommentCard = ({comment}) => {
    return (
        <CardContainer>
            <p>User:{comment.author}</p>
            <p>Comment:{comment.body}</p>
            <p>Posted: {dayjs(comment.created_at).format("MMM D, YYYY h:mm A")}</p>
            <VoteCommentButton 
            comment={comment}
			incComments={comment.incComments} />
        </CardContainer>
    );
};

export default CommentCard;