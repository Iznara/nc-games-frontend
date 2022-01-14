import React from 'react';

const ProfileCard = ({ user: { username, avatar_url, name },
}) => {
    
    return (
        <div>
            <h2>User Profile</h2>
            <p>{username}</p>
            <img src={avatar_url} alt={`${username}'s Profile`} />
            <h1>{name}</h1>
        </div>
    );
};
export default ProfileCard;