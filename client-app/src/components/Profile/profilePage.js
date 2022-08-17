import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {Row, Col, Typography, Input, Form, Button,Checkbox, 
  Radio, Switch, Slider, Select, message} from 'antd';
/*   import WordNotification from '../Notification/WordNotification';
  import WordService from '../../services/wordService' */
import logo from "../../images/defaultIcon.PNG"
import MyJson from "../../db/db.json";

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
        <div>
            <Row gutter={[40, 0]}>
                <Col span={23}>
                    <Title style={{textAlign: 'center'}} level={2}>Profile</Title>
                </Col>
            </Row>
            <Row gutter={[40, 0]}>
                <Col span={18}>
                    <img src={logo} width="50" height="50"></img>
                    <p>{currentUser.name}</p>
                    <p>{currentUser.team}</p>
                    <p>{currentUser.project}</p>
                    <p>Bio: {currentUser.bio}</p>
                    <p>Email: {currentUser.email}</p>
                    <p>Phone: {currentUser.phone}</p>
                    <p>Fields of expertise: {currentUser.powers}</p>
                    <p>Hobbies: {currentUser.hobbies}</p>
                    <p>Linkedin: <a href={currentUser.linkedin}>Click Here</a></p>
                    <p>{currentUser.ready_to_help ? <text>is</text>: <text>isn't</text>} Able to help others</p>
                    {/* <p>{false ? <text>is</text>: <text>isn't</text>} Able to help others</p> */}
                    <p>Onboarding process? {currentUser.onboarding}/50</p>
                    <p>How close are you to 50 stars? {currentUser.helpingPoints}/50</p>
                </Col>
            </Row>
        
        </div>
    ); 
};

export default Profile;

/*{         <Form
        {...formItemLayout}
        name="basic"
    
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            label="Word Name"
            name={['model', 'WordName']}
            rules={[
            {
                required: true,
                message: 'Please input your Word Name!',
            },
            ]}
        >
            <Input  />
        </Form.Item>

        <Form.Item
            label="Translator"
            name={['model', 'TurkishTranslator']}
            rules={[
            {
                required: true,
                message: 'Please input your transleted text!',
            },
            ]}
        >
            <Input  />
        </Form.Item>

        <Form.Item
        name={['model', 'Type']}
            label="Select"
            hasFeedback
            rules={[
            {
                required: true,
                message: 'Please select your country!',
            },
            ]}
        >
            <Select placeholder="Please select a country">
            <Option value="noun">Noun</Option>
            <Option value="verb">Verb</Option>
            <Option value="AdVerb">AdVerb</Option>
            <Option value="Adjective">Adjective</Option>
            </Select>
        </Form.Item>

        <Form.Item
            name={['model', 'Tags']}
            label="Tags[multiple]"
            rules={[
            {
                required: true,
                message: 'Please select your Tags!',
                type: 'array',
            },
            ]}
        >
            <Select mode="multiple" placeholder="Please select favourite colors">
            <Option value="important">Important</Option>
            <Option value="rare">Rare</Option>
            <Option value="basic">Basic</Option>
            </Select>
        </Form.Item>

        <Form.Item name={['model', 'Description']} label="Introduction">
            <Input.TextArea />
        </Form.Item>

        <Form.Item name={['model', 'ExampleSentence']} label="Example Sentence">
            <Input.TextArea />
        </Form.Item>

        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <div style={{textAlign: "right"}}>
            <Button loading={loading}   type="primary" htmlType="submit">
            Submit
            </Button> {' '}
            <Button type="danger" htmlType="button" onClick={() => navigate('/list')}>
                Back
                </Button>
                </div>
        </Form.Item>
        </Form>}
  
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    
  const onFinish = async (values) => {
    setLoading(true);
   var result=await WordService.createOrEdit(values.model);
   if(result.success) {
     WordNotification.SuccessNotification("İşlem başarılı bir şekilde gerçekleşti.");
   }
   else{
    WordNotification.ErrorNotification("Bir Hata ile karşılaşıldı.");
   }
  setLoading(false); */

  /*   const onFinishFailed = (errorInfo) => {
    WordNotification.ErrorNotification('you encountered an error');
  }; */
