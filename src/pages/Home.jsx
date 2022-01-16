import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/user';
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
        <div>
            <h2>Welcome back! {user.username}</h2>
            {user ? (<>
                <button onClick={handleLogIn}>Log Out</button>
            </>) : (<>
                {isLoggedIn ? (<></>) : (
                    <button onClick={handleLogIn}> Sign In </button>
                )}
            </>
            )}

            {isLoggedIn ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            {loginFailed ? "Try Again " : ""}
                            <input type="text" placeholder="username e.g. 'jessjelly'"
                                onChange={handleChange} value={newUser}></input>
                        </label>
                        <button onClick={handleSubmit}> Submit </button>
                    </form>
                </div>
            ) : null}

        </div>
    );
};

export default Home;