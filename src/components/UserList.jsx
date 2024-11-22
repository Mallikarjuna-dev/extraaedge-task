import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, fetchUsers } from '../redux/userSlice';
import { Row, Col, Modal, Form, Input } from "antd";
import UserCard from './UserCard';
import LoadingIndicator from './Loading';

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsModalVisible(true);
    };

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    const handleSave = (values) => {
        console.log('Updated User:', { ...selectedUser, ...values });
        setIsModalVisible(false);
    };


    if (loading) return <LoadingIndicator />;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-4">
            <Row gutter={[16, 16]}>
                {users.map((user) => (
                    <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
                        <UserCard user={user} onDelete={handleDelete} onEdit={handleEdit} />
                    </Col>
                ))}
            </Row>

            <Modal
                title="Edit User"
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                onOk={() => document.getElementById('editForm').submit()}
            >
                <Form
                    id="editForm"
                    initialValues={selectedUser}
                    onFinish={handleSave}
                    layout="vertical"
                >
                    <Form.Item label="Name" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Phone" name="phone">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Website" name="website">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default UserList;
