import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, CustomGreenButton } from '../styles/styles.components';

const UserCard = ({ user }) => {
    console.log(user);
    return (
        <CardContainer>
            <CustomGreenButton><Link to={`/users/${user.username}`}> {user.username} </Link></CustomGreenButton>
        </CardContainer>
    );
};
export default UserCard;