import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { getUsers } from '../utils/api';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //set error
        getUsers()
            .then((newUsers) => {
                console.log(newUsers);
                setUsers(newUsers);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setUsers]);


    return (
        <div>
            {users.map((user) => (
                <UserCard key={user.username} user={user} />
            ))}
        </div>
    );
};

export default UserList;