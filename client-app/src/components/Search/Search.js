import { Avatar, List, Input, Tag, Empty } from 'antd';
import React, { useEffect, useState } from 'react';
import WordLayout from '../Layout';
import { AudioOutlined } from '@ant-design/icons';

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
                return pre.filter((member) => member.name.includes(value) || member.team.includes(value) || member.hobbies.includes(value));
            })
        } else {
            fetchMyAPI()
        }
    };

    return (
        < WordLayout >
            <Search placeholder="Search with keyword, name and hobby" onSearch={onSearch} enterButton />
            <List
                itemLayout="horizontal"
                dataSource={APIData}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="https://ant.design">{item.name}</a>}
                            description={item.team + " - " + item.project}
                        />
                    </List.Item>
                )}
            />
        </WordLayout >
    )
};
