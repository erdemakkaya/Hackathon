import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Table, Tag, Space, Typography, Button, Row, Col, Badge, Statistic,Modal } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined,EditOutlined, DeleteOutlined } from '@ant-design/icons';

import WordService from '../../services/wordService'




export default function List() {

  async function fetchDeleteWord(id) {
    var response = await WordService.delete(id);
    if (response.success) {
      setAPIData((pre) => {
        return pre.filter((word) => word.id !== id);
      });
    }
  }

  const onDeleteWord = (id) => {
    console.log(id);
    Modal.confirm({
      title: "Are you sure, you want to delete this word record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        fetchDeleteWord(id);
      },
    });
  };

  const columns = [
    {
      title: 'Name',
      key: 'wordName',
      dataIndex: 'wordName',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Translation',
      key: 'turkishTranslator',
      dataIndex: 'turkishTranslator',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
  
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Correcteness',
      dataIndex: 'Percentage',
      key: 'Percentage',
      render: (item, row) => (
        <>
          {
            <Statistic
              title="Correcteness"
              value={(row.trueCount / (row.trueCount + row.falseCount)) * 100}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
  
          }
        </>
      )
    },
    {
      title: 'AddedCount',
      dataIndex: 'addedCount',
      key: 'addedCount',
      render: counts => (
        <>
          {
  
            <Badge count={counts} />
  
          }
        </>
      )
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'action',
      render: (id) => {
        return (
          <>
            <Link to={`/creategrammer/${id}`}>
  
              <EditOutlined />
            </Link>
  
            <DeleteOutlined
              onClick={() => {
                onDeleteWord(id);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      }
    }
    // {
    //   title: 'Remember',
    //   dataIndex: 'remember',
    //   key: 'remember',
    //   render: remember => (
    //     <>
    //     {
    //         (remember) ? 
    //           (
    //             <Tag color="#00cc00">
    //               Active
    //             </Tag>
    //           ) :
    //           (
    //             <Tag color="#ff0000">
    //               Passive
    //             </Tag>
    //           ) 
    //       }
    //     </>
    //   ),
    // }
  ];
  const { Title } = Typography;
  const navigate = useNavigate()
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      var response = await WordService.getAll();
      console.log(response.data);
      setAPIData(response.data);
    }
    fetchMyAPI()
  }, [])
  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Title level={2}>
            User List
          </Title>
        </Col>
        <Col span={6}>
          <Button onClick={() => navigate('/create')} block>Add User</Button>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={24}>
          <Table
            rowKey='id'
            dataSource={APIData}
            columns={columns}
            expandable={{
              expandedRowRender: record => <p style={{ margin: 0 }}>{record.exampleSentence}</p>,
              rowExpandable: record => record.exampleSentence !== '',
            }}
          />
        </Col>
      </Row>
    </div>
  )
}