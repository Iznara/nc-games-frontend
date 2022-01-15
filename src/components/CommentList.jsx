import React, { useEffect, useState } from 'react';
import { getComments } from '../utils/api';
import CommentCard from './CommentCard';

const CommentList = ({ review_id, incComments }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(review_id)
            .then((newComments) => {
                setComments(newComments);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setComments, review_id]);
    return (
        <div>
        {comments.map((comment) => (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            setComments={setComments}
            incComments={incComments}
          />
        ))}
        </div>
    );
};

export default CommentList;