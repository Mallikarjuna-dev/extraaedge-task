import React, { useState } from 'react';
import { Card, Tooltip } from 'antd';
import { MailOutlined, PhoneOutlined, LinkOutlined, HeartOutlined, HeartFilled, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const UserCard = ({ user, onDelete, onEdit }) => {
    const [liked, setLiked] = useState(false);
    const avatarUrl = `https://api.dicebear.com/8.x/avataaars/svg?seed=${user.username}`;

    return (
        <Card
            hoverable
            cover={<img alt={user.name} src={avatarUrl} />}
            // className="m-4 w-full md:w-1/3 lg:w-1/4"
            actions={[
                <Tooltip title={liked ? 'Unlike' : 'Like'}>
                    {liked ? (
                        <HeartFilled
                            style={{ color: 'red' }}
                            onClick={() => setLiked(!liked)}
                        />
                    ) : (
                        <HeartOutlined onClick={() => setLiked(!liked)} />
                    )}
                </Tooltip>,
                <Tooltip title="Edit">
                    <EditOutlined onClick={() => onEdit(user)} />
                </Tooltip>,
                <Tooltip title="Delete">
                    <DeleteOutlined onClick={() => onDelete(user.id)} />
                </Tooltip>,
            ]}
        >
            <h3 className="text-center">{user.name}</h3>
            <p>
                <MailOutlined className="mr-2 text-blue-500" />
                {user.email}
            </p>
            <p>
                <PhoneOutlined className="mr-2 text-green-500" />
                {user.phone}
            </p>
            <p>
                <LinkOutlined className="mr-2 text-orange-500" />
                <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
                    {user.website}
                </a>
            </p>
        </Card>
    );
};

export default UserCard;
