import { Avatar, List, Input, Tag, Empty, Modal, Form, Select, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import WordLayout from '../Layout';
import { AudioOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


const CollectionCreateForm = ({ visible, onCancel, item }) => {
    const [form] = Form.useForm();
    const { Option } = Select;
    return (
        <Modal
            visible={visible}
            title="Profil Bilgileri"
            okText="Yardım"
            cancelText="Vazgeç"
            onCancel={() => { onCancel(form) }}
            onOk={() => {
                onCancel();
            }}
        >
            <Form
                form={form}
                layout="vertical"
                disabled={true}
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                    name: item.name,
                    bio: item.bio,
                    hobbies: item.hobbies,
                    switch: 'checked'

                }}
            >
                <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} icon={<UserOutlined />} />
                <Form.Item
                    name="name"
                    label="Ad"

                >
                    <Input />
                </Form.Item>
                <Form.Item name="bio" label="Bio">
                    <Input type="textarea" />
                </Form.Item>
                {

                    <Form.Item
                        name="hobbies"
                        label="Keywords"
                        hasFeedback
                    >

                        <Select mode="multiple" placeholder="Keywords">

                        </Select>
                    </Form.Item>
                }

                <Form.Item name="switch" label="Yardım Edebilir" valuePropName="checked">
                    <Switch />
                </Form.Item>
            </Form>
        </Modal>
    );
};

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);



const data = require("../../db.json").members;

export default function SearchHelp() {

    const [APIData, setAPIData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [modalData, setModalData] = useState([]);

    function fetchMyAPI() {
        console.log(data);
        setAPIData(data);
    }
    function showModal(item) {
        debugger;
        setModalData(item);
        setVisible(true);
    }
    useEffect(() => {
        fetchMyAPI()
    }, APIData);

    const onSearch = (value) => {
        if (value !== Empty) {
            setAPIData((pre) => {
                return pre.filter((member) => member.name.includes(value) || member.team.includes(value) || member.hobbies.includes(value));
            })
        } else {
            fetchMyAPI()
        }
    };

    return (
        < WordLayout >
            <Search placeholder="Search with keyword, name and hobby" onSearch={onSearch} enterButton />
            <div
        style={{
          textAlign: 'justify',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
            <List
                itemLayout="horizontal"
                dataSource={APIData}
                itemKey="name"
                renderItem={(item) => (
                    <List.Item key={item.name}  >
                        <List.Item.Meta
                            key={item.name}
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a key={item.name} onClick={() => { showModal(item) }}>{item.name}</a>}
                            description={item.team + " - " + item.project}
                        />
                       <Tag>test</Tag>
                        <div>Content</div>
                    </List.Item>
                )}
            />
           </div>
            <CollectionCreateForm
                visible={visible}
                onCancel={(form) => {
                    form.resetFields();
                    setVisible(false);
                }}
                item={modalData}
            />

        </WordLayout >
    )
};
