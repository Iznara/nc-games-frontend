import React, { useEffect, useState } from 'react';
import { getComments } from '../utils/api';
import CommentCard from './CommentCard';
import PostComment from './PostComment';

const CommentList = ({ review_id }) => {
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
            <PostComment

                review_id={review_id}
                setComments={setComments} />

            {comments.map((comment, i) => (
                
                    <CommentCard
                        key={`${comment.comment_id}, ${i}`}
                        comment={comment}
                        setComments={setComments}
                    />
                
            ))}
        </div>
    );
};

export default CommentList;