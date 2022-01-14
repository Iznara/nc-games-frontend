import React from 'react';

const UserCard = ({ user: { username, avatar_url, name },
}) => {
    return (
        <div>
            {/* <img src={avatar_url} alt={`${username}'s Profile`} />
            <h1>{name}</h1> */}
            <h3>Username: {username}</h3>
        </div>
    );
};
export default UserCard;