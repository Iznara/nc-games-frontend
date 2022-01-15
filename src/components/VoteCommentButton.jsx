import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { deleteComment, voteComment } from "../utils/api";

const VoteCommentButton = ({ comment }) => {
	const { user } = useContext(UserContext);
	const [commentVotes, setCommentVotes] = useState(comment.votes);
	const [hasVoted, setHasVoted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const allowDelete = user.username === comment.author;

	const handleVote = () => {
		const vote = hasVoted ? -1 : 1;
		setIsLoading(true);
		setCommentVotes(commentVotes + vote);

		voteComment(comment.comment_id, vote)
			.then(() => {    
				setIsLoading(false);
				setHasVoted(!hasVoted);
			})
			.catch(() => {
				const vote = hasVoted ? 1 : -1;
				setCommentVotes(commentVotes + vote);
				setIsLoading(false);
			});
	};

	const handleDelete = (id) => {
		deleteComment(id).then(() => {
			window.location.reload(false);
		});
	};

	return (
		<div>
			<p>Likes: {commentVotes}</p>
			{allowDelete ? (
				<button onClick={() => {handleDelete(comment.comment_id)}}
				>Delete Comment</button>
			) : (
				<button	onClick={handleVote} 
                disabled={isLoading || hasVoted}
                >Like</button>

			)}
		</div>
	);
};

export default VoteCommentButton;