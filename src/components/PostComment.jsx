import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../contexts/user";
import { postComment } from "../utils/api";

const PostComment = ({ review_id, setComments }) => {
	const { user } = useContext(UserContext);
	const [newComment, setNewComment] = useState("");

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
		<form onSubmit={handleSubmit}>
			<textarea
				label="Post Comment"
				onChange={handleChange}
				value={newComment}
			/>

			<button onClick={handleSubmit}>
				Post
			</button>
		</form>
	);
};

export default PostComment;