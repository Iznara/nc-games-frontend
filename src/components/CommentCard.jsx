import React from 'react';
import * as dayjs from "dayjs";
import VoteCommentButton from './VoteCommentButton';

const CommentCard = ({comment}) => {
    return (
        <div>
            <p>User:{comment.author}</p>
            <p>Posted: {dayjs(comment.created_at).format("MMM D, YYYY h:mm A")}</p>
            <p>Comment:{comment.body}</p>
            <p>Votes:{comment.votes}</p>
            <VoteCommentButton 
            comment={comment}
			incComments={comment.incComments} />
        </div>
    );
};

export default CommentCard;