import { Avatar, List, Input, Tag, Empty,Modal,Button } from 'antd';
import React, { useEffect, useState } from 'react';
import WordLayout from '../Layout';
import { AudioOutlined } from '@ant-design/icons';
import {PlusOutlined,UserOutlined, MailOutlined ,SkypeOutlined,LinkedinOutlined  } from '@ant-design/icons';
import { IoCall } from "react-icons/io5";
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
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [user, setUser] = useState(0);

    function fetchMyAPI() {
        console.log(data);
        setAPIData(data);
    }

    useEffect(() => {
        fetchMyAPI()
    }, APIData);

    const onSearch = (value) => {
        if(value !== Empty){
            setAPIData((pre) => {
                return pre.filter((member) => member.name.includes(value) || member.team.includes(value) || member.hobbies.includes(value) || member.powers.includes(value));
            })
        } else {
            fetchMyAPI()
        }
    };
   
    const showModal = (item) => {
     
        setIsModalVisible(true);
        setUser(item);
      };
      
    return (
        < WordLayout >
            <Search placeholder="Search with keyword, name and hobby" onSearch={onSearch} enterButton />
            <List
                itemLayout="horizontal"
                dataSource={APIData}
                renderItem={(item) => (
                    <List.Item   key='item' onClick={() => showModal(item)}>
                        
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="">{item.name}</a>}
                            description={item.team + " - " + item.project}
                        />
                    </List.Item>
                )}
            />

<div>
   <Modal title="User profile"
          visible={isModalVisible}
          onOk={() => {
            setIsModalVisible(false);
          }}
          onCancel={() => {
            setIsModalVisible(false);
          }}>
      
          <Avatar icon={<UserOutlined />} />
          <div>
          <a>{user.name}</a>
          </div>
          <div>
          <a>Team:</a>
          <a>{user.team}</a>
          </div>
          
          
          <div>
          <Button                
              type="primary"
              htmlType="submit"
              
              icon={<IoCall />}             
            >
        </Button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Button                
              type="primary"
              htmlType="submit"
              icon={<MailOutlined />}             
            >
        </Button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Button                
              type="primary"
              htmlType="submit"
              icon={<SkypeOutlined />}             
            >
        </Button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Button                
              type="primary"
              htmlType="submit"
              icon={<LinkedinOutlined />}             
            >
        </Button>
        
        
          </div>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
   <div>
          <Button                
              type="primary"
              htmlType="submit"
              icon={<PlusOutlined />}             
            >
                Helped?
        </Button>
         </div>
        </Modal>
    </div>
        </WordLayout >
    )
};
