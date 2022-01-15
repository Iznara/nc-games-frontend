import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user";
import { deleteReview, voteReview } from "../utils/api";

const VoteReviewButton = ({ review }) => {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const [reviewVotes, setReviewVotes] = useState(review.votes);
	const [hasVoted, setHasVoted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const allowDelete = user.username === review.owner;

	const handleVote = () => {
		const vote = hasVoted ? -1 : 1;
		setIsLoading(true);
		setReviewVotes(reviewVotes + vote);

		voteReview(review.review_id, vote)
			.then(() => {    
				setIsLoading(false);
				setHasVoted(!hasVoted);
			})
			.catch(() => {
				const vote = hasVoted ? 1 : -1;
				setReviewVotes(reviewVotes + vote);
				setIsLoading(false);
			});
	};

	const handleDelete = (id) => {
		deleteReview(id).then(() => {
			navigate("/");
		});
	};

	return (
		<div>
			<p>Likes: {reviewVotes}</p>
			{allowDelete ? (
				<button onClick={() => {handleDelete(review.review_id)}}
				>Delete Review</button>
			) : (
				<button	onClick={handleVote} 
                disabled={isLoading || hasVoted}
                >Like</button>

			)}
		</div>
	);
};

export default VoteReviewButton;