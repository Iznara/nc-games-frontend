import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import { getUserByUsername } from '../utils/api';

const Profile = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        //set error
        //getUserByUsername({username})
        // .then((newUser) => {
        //     console.log(newUser.username);
        //     setUser(newUser.username);
        // })
        getUserByUsername("tickle122")
          .then((newUser) => {
            console.log(newUser.username);
            setUser(newUser);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [setUser]);

    return (
        <div>
            <ProfileCard key={user.username} user={user} />
        </div>
    );
};

export default Profile;