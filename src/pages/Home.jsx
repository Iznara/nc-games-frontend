import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/user';
import { CardContainer, CustomBlueButton, CustomGreenButton, CustomRedButton, ImageContainer } from '../styles/styles.components';
import { getUserByUsername } from '../utils/api';

const Home = ({ setUser }) => {
    const { user } = useContext(UserContext);
    const [newUser, setNewUser] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);

    const handleLogIn = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false);
        } else if (user) {
            setUser(false);
        } else {
            setIsLoggedIn(true);
        }
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setNewUser(value);
        setLoginFailed(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoginFailed(false);
        getUserByUsername(newUser)
            .then((user) => {
                setUser(user);
                setIsLoggedIn(false);
            })
            .catch((err) => {
                setLoginFailed(true);
                console.log(err);
            });

        setNewUser("");
    };

    return (
        <CardContainer>
            <br />
            <h2>Welcome back! {user.username}</h2>
            {user ? (<>
                <ImageContainer src={user.avatar_url} alt={`${user.username}'s Profile Picture`} />
                <br />
                <br />
                <CustomRedButton onClick={handleLogIn}>Log Out</CustomRedButton>
            </>) : (<>
                {isLoggedIn ? (<>
                </>) : (
                    <CustomGreenButton onClick={handleLogIn}> Sign In </CustomGreenButton>
                )}
                <br />
                <br />
                <Link to={`/reviews`}>Continue without singing in</Link>
                <br />
            </>
            )}

            {isLoggedIn ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <br />
                            {loginFailed ? "Try Again " : ""}
                            <br />
                            <br />
                            <input type="text" placeholder="username e.g. 'jessjelly'"
                                onChange={handleChange} value={newUser}></input>
                        </label>
                        <br />
                        <br />
                        <CustomBlueButton onClick={handleSubmit}> Submit </CustomBlueButton>
                    </form>
                </div>
            ) : null}

        </CardContainer>
    );
};

export default Home;