import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarStyles } from '../styles/styles.components';

const Nav = () => {
    return (
        <NavBarStyles>
            <Link to="/">Home</Link>
        </NavBarStyles>
    );
};

export default Nav;