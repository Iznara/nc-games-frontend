import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user: { username, avatar_url, name },
}) => {
    return (
        <div>
            {/* <img src={avatar_url} alt={`${username}'s Profile`} />
            <h1>{name}</h1> */}
            
        
            <h3>Username: <Link to={`/users/${username}`}> {username} </Link></h3>
        </div>
    );
};
export default UserCard;