import React, { useState } from 'react';
import { BrowserRouter as Router,
    Route,
    Routes,useNavigate } from "react-router-dom";
import 'antd/dist/antd.css';
import {Row, Col, Typography, Input, Form, Button,Checkbox, 
   Switch, Select, Icon,} from 'antd';
   import { UserOutlined, LockOutlined } from '@ant-design/icons';
  import WordLayout from '../Layout'

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



const Login = ()  => {
  
  
    const [loading, setLoading] = useState(false);
   
    const navigate = useNavigate()
    
    const onFinish = (values) => {
       
      };
 
  
  return (
         
    <div>
    
    <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
    <Col >
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button onClick={() => navigate('/home')} type="primary" block className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </Col>
        </Row>


    </div>

  );
};

export default Login;