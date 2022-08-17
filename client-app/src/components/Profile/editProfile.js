import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {Row, Col, Typography, Input, Form, Button,Checkbox, 
  Radio, Switch, Slider, Select, message, Tag, Divider, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MyJson from "../../db/db.json";
import WordLayout from '../Layout';

const defaultUser = {
    uid: "0",
    name: "name",
    email: "name.surname@siemens.com",
    project: "ADV D EU RT C&E PRC 1",
    powers: ["test", "test2"],
    hobbies: ["test"],
    team: "team",
    linkedin: "https://google.com",
    password: "deneme",
    ready_to_help: true,
    bio: "Loves to code and test.",
    phone: "+905411111111",
    hobbies: ["test11", "test22"],
    ranking: 0,
    onboarding: 0,
    helpingPoints: 0
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const { Option } = Select;
const {Title} = Typography;


const Profile = ()  => {
    const onFinish = () => {};
    const onFinishFailed = () => {};
    const loading = () => {};
    const navigate = () => {};

    const { id } = useParams();
    var currentUser = defaultUser;
    const users = MyJson.members;
    const numUsers = users.length;
    const colors = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];

    for (var i = 0; i < numUsers; ++i) {
        var user = users[i];
        if (user.uid == id)
            currentUser = user;
    };

    const power_colors = {}
    for (var i = 0; i < currentUser.powers.length; ++i)
        power_colors[currentUser.powers[i]] = colors[Math.trunc(Math.random() * 12)];
    const hobby_colors = {}
    for (var i = 0; i < currentUser.hobbies.length; ++i)
        hobby_colors[currentUser.hobbies[i]] = colors[Math.trunc(Math.random() * 12)];

    const onCheck = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const onSave = (e) => {
        console.log(`saved = ${e.target.checked}`);
    }

    return (
        <WordLayout>
        <div>
            <Row gutter={[40, 0]}>
                <Col span={23}>
                    <Title style={{textAlign: 'center'}} level={2}>Profile</Title>
                </Col>
            </Row>
            <Row>
                <Avatar size={100} icon={<UserOutlined />} />
                <Col>
                    <p>{currentUser.name}</p>
                    <p>{currentUser.team}</p>
                    <p>{currentUser.project}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='attribute'>Bio: {currentUser.bio}</p>
                    <p>Email: {currentUser.email}</p>
                    <p>Phone: {currentUser.phone}</p>
                    <p>Fields of expertise:
                        <Row>
                        {
                            Object.keys(power_colors).map((key, index) => ( 
                                <Tag key={index} color={power_colors[key]}> {key}</Tag>
                            ))
                        }
                        </Row>
                    </p>
                    <p>Hobbies:
                        <Row>
                        {
                            Object.keys(hobby_colors).map((key, index) => ( 
                                <Tag key={index} color={hobby_colors[key]}> {key}</Tag>
                            ))
                        }
                        </Row>
                    </p>
                    <p>Linkedin: <a href={currentUser.linkedin}>Click Here</a></p>
                    <p>{currentUser.ready_to_help ? <text>is</text>: <text>isn't</text>}  Able to help others</p>
                    {/* <p>{false ? <text>is</text>: <text>isn't</text>} Able to help others</p> */}
                    <Row>
                        <p><Checkbox onChange={onCheck}>Able to help?</Checkbox></p>
                        <p><Button onChange={onSave}>Save</Button></p>
                    </Row>
                    <p>Onboarding process? {currentUser.onboarding}/50</p>
                    <p>How close are you to 50 stars? {currentUser.helpingPoints}/50</p>
                </Col>
            </Row>
        </div>
        </WordLayout>
    ); 
};

export default Profile;
