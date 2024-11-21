import React from 'react';

const UserCard = ({ user }) => {
    const avatarUrl = `https://api.dicebear.com/8.x/avataaars/svg?seed=${user.username}`;
    return (
        <div className="user-card">
            <img src={avatarUrl} alt={user.name} className="avatar" />
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
            <p>Website: <a href={`https://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
            <p>Company: {user.company.name}</p>
        </div>
    );
};

export default UserCard;
