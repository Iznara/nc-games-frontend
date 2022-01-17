import React, { useContext, useState } from 'react';
import logoLight from "../GitHub-Mark-Light-32px.png"
import logoDark from "../GitHub-Mark-32px.png"
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/user';
import { CardContainer, CustomBlueButton, CustomGreenButton, CustomRedButton } from '../styles/styles.components';
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
            setNewUser("");
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
        <div>
            <CardContainer>
                <br />
                <h2>Welcome back! {user.username}</h2>
                {user ? (<>
                    {/* <ImageContainer src={user.avatar_url} alt={`${user.username}'s Profile Picture`} /> */}
                    <br />
                    <br />
                    <CustomRedButton onClick={handleLogIn}>Log Out</CustomRedButton>
                </>) : (<>
                    {isLoggedIn ? (<>
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
                    </>) : (
                        <CustomGreenButton onClick={handleLogIn}> Sign In </CustomGreenButton>
                    )}
                    <br />
                    <br />
                    <Link to={`/reviews`}>Continue without signing in</Link>
                    <br />
                </>
                )}



            </CardContainer>

            <CardContainer>
                <h3>View this project on GitHub</h3>
                <br />
                <p>Front-End Source Code</p>
                <a href="https://github.com/Iznara/nc-games-frontend"><img src={logoLight} alt="GitHub Logo" /></a>
                <p>Back-End Source Code</p>
                <a href="https://github.com/Iznara/be-nc-games-heroku"><img src={logoDark} alt="GitHub Logo" /></a>
            </CardContainer>

        </div>
    );
};

export default Home;