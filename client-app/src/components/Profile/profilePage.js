import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {Row, Col, Typography, Input, Form, Button,Checkbox, 
  Radio, Switch, Slider, Select, message} from 'antd';
/*   import WordNotification from '../Notification/WordNotification';
  import WordService from '../../services/wordService' */
import defaultIcon from "../../images/defaultIcon.PNG"
import MyJson from "../../db/db.json";
import WordLayout from '../Layout';

var defaultUser = {
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

    for (var i = 0; i < numUsers; ++i) {
        var user = users[i];
        if (user.uid == id)
            currentUser = user;
    };

    return (
        <WordLayout>
        <div>
            <Row gutter={[40, 0]}>
                <Col span={23}>
                    <Title style={{textAlign: 'center'}} level={2}>Profile</Title>
                </Col>
            </Row>
            <Row>
                <img src={defaultIcon} width="100" height="100"></img>
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
                    <p>Fields of expertise: {currentUser.powers}</p>
                    <p>Hobbies: {currentUser.hobbies}</p>
                    <p>Linkedin: <a href={currentUser.linkedin}>Click Here</a></p>
                    <p>{currentUser.ready_to_help ? <text>is</text>: <text>isn't</text>}  Able to help others</p>
                    {/* <p>{false ? <text>is</text>: <text>isn't</text>} Able to help others</p> */}
                    <p>Onboarding process? {currentUser.onboarding}/50</p>
                    <p>How close are you to 50 stars? {currentUser.helpingPoints}/50</p>
                </Col>
            </Row>
        </div>
        </WordLayout>
    ); 
};

export default Profile;
