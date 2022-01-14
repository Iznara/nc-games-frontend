import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer } from '../styles/styles.components';

const UserCard = ({ user }) => {
    console.log(user);
    return (
        <CardContainer>
            {/* <img src={user.avatar_url} alt={`${user.username}'s Profile`} />
            <h1>{user.name}</h1> */}
        
            <h3>Username: <Link to={`/users/${user.username}`}> {user.username} </Link></h3>
        </CardContainer>
    );
};
export default UserCard;