import React from 'react';
import { CardContainer, ImageContainer } from "../styles/styles.components"

const ProfileCard = ({ user: { username, avatar_url, name },
}) => {

    return (
        <CardContainer>
            <h2>User Profile</h2>
            <p>{username}</p>
            <ImageContainer src={avatar_url} alt={`${username}'s Profile Picture`} />
            <h1>{name}</h1>
        </CardContainer>
    );
};
export default ProfileCard;