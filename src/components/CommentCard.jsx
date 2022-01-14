import React from 'react';
import * as dayjs from "dayjs";

const CommentCard = ({
    comment: { author, body, comment_id, created_at, votes }
}) => {
    return (

        <div>
            {/* <p>{dayjs(created_at).format("ddd D MMM YYYY HH:mm")}</p> */}
            <p>User:{author}</p>
            <p>Posted: {dayjs(created_at).format("MMM D, YYYY h:mm A")}</p>
            <p>Comment:{body}</p>
            <p>Votes:{votes}</p>

            <button>Vote +1</button>
            {/* <VoteControls item_id={comment_id} votes={votes} voteType={"comment"} /> */}

            <button>Delete</button>
            {/* <DeleteComment
            comment_id={comment_id}
            author={author}
            setComments={setComments}
          /> */}
        </div>

    );
};

export default CommentCard;