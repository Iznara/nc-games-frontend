import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../contexts/user";
import { CustomBlueButton } from "../styles/styles.components";
import { postComment } from "../utils/api";

const PostComment = ({ review_id, setComments }) => {
	const { user } = useContext(UserContext);
	const [newComment, setNewComment] = useState("");
	console.log(user.username);
	const handleChange = (e) => {
		const { value } = e.target;
		setNewComment(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (newComment.length > 0) {
			postComment(review_id, user.username, newComment)
				.then((postedComment) => {
					setNewComment("");
					setComments((currComments) => [postedComment, ...currComments]);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<>
			{(user.username === undefined) ? <>
				<p>Please sign in to like a comment</p>
				<br />
				<Link to={`/`}>Sign In</Link>
			</> : <>
				<form onSubmit={handleSubmit}>
					<textarea
						label="Post Comment"
						onChange={handleChange}
						value={newComment}
						cols={40}
						rows={4}
						placeholder="* Maximum Length 400 characters"
						maxLength={400}
					/>
					<br />
					<CustomBlueButton onClick={handleSubmit}>
						Post Comment
					</CustomBlueButton>
				</form>
			</>}
		</>
	);
};

export default PostComment;