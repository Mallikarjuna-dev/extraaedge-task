import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';
import UserCard from './UserCard';
import LoadingIndicator from './Loading';

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return <LoadingIndicator />;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="user-list">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
