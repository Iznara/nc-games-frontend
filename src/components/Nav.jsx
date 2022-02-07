import React from 'react';
import { Link } from 'react-router-dom';
import { CustomNavButton, NavBarStyles } from '../styles/styles.components';

const Nav = () => {
    return (
        <NavBarStyles>
            <CustomNavButton><Link to="/">Home</Link></CustomNavButton>
            <CustomNavButton><Link to="/reviews">All Reviews</Link></CustomNavButton>
            <CustomNavButton><Link to="/categories">Categories</Link></CustomNavButton>
            <CustomNavButton><Link to="/users">Users</Link></CustomNavButton>
        </NavBarStyles>
    );
};

export default Nav;