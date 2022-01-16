import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import { getUserByUsername } from '../utils/api';

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    getUserByUsername(username)
      .then((newUser) => {
        console.log(newUser.username);
        setUser(newUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUser, username]);

  return (
    <div>
      <ProfileCard key={user.username} user={user} />
    </div>
  );
};

export default Profile;