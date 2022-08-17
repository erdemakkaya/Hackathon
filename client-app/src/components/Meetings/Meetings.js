import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WordLayout from '../Layout';
import {
  Row,
  Col,
  Typography,
  Input,
  Form,
  Button,
  Checkbox,
  Radio,
  Switch,
  Slider,
  Select,
  message,
  Cascader,
  Table,
  Space,
  Drawer,
  Tag,
  Calendar,
} from "antd";

import { SiGooglemeet } from "react-icons/si";
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
const { Title } = Typography;

const Meetings = () => {
  const [loading, setLoading] = useState(false);
  const [isHRShown, setIsHRShown] = useState(false);
  const [isUnitShown, setIsUnitShown] = useState(false);
  const [isGroupShown, setIsGroupShown] = useState(false);
  const [isOthersShown, setIsOthersShown] = useState(false);
  const [isScheduleShown, setIsScheduleShown] = useState(false);

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const options_occurrance = [
    {
      label: "week",
      value: "week",
    },
    {
      label: "month",
      value: "month",
    },
    {
      label: "2 weeks",
      value: "2 weeks",
    },
  ];

  const options = [
    {
      label: "HR Meetings",
      value: "HR Meetings",
    },
    {
      label: "Unit Meetings",
      value: "Unit Meetings",
    },
    {
      label: "Group Meetings",
      value: "Group Meetings",
    },
    {
      label: "Other Meetings",
      value: "Other Meetings",
    },
  ];

  const dataHR = [
    {
      key: "1",
      name: "Onboarding HR Meeting June 2022",
      date: " 12nd June 2022 ",
      time: " 15.00 ",
      address:
        "https://teams.microsoft.com/l/meetup-join/19:5fe212ed9a114777834acd94f7ac23ad@thread.tacv2/1634562028884?context=%7B%22Tid%22:%2238ae3bcd-9579-4fd4-adda-b42e1495d55a%22,%22Oid%22:%22cedc61d3-0934-498d-8c63-ee132d521c23%22%7D",
    },
  ];

  const dataUnit = [
    {
      key: "1",
      name: "Onboarding Unit meeting  June 2022",
      date: " 12nd June 2022 ",
      time: " 16.00 ",
      address:
        "https://teams.microsoft.com/l/meetup-join/19:5fe212ed9a114777834acd94f7ac23ad@thread.tacv2/1634562028884?context=%7B%22Tid%22:%2238ae3bcd-9579-4fd4-adda-b42e1495d55a%22,%22Oid%22:%22cedc61d3-0934-498d-8c63-ee132d521c23%22%7D",
    },
    {
      key: "2",
      name: "Management Unit meeting   June 2022",
      date: " 12nd June 2022 ",
      time: " 17.00 ",
      address:
        "https://teams.microsoft.com/l/meetup-join/19:5fe212ed9a114777834acd94f7ac23ad@thread.tacv2/1634562028884?context=%7B%22Tid%22:%2238ae3bcd-9579-4fd4-adda-b42e1495d55a%22,%22Oid%22:%22cedc61d3-0934-498d-8c63-ee132d521c23%22%7D",
    },
  ];

  const columns = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
    },
    {
      title: "Time",
      key: "time",
      dataIndex: "time",
    },
    {
      title: "Location",
      key: "address",
      render: (_, record) => (
        <div>
          <Space size="middle">
            <Button
              id="myButton"
              loading={loading}
              type="primary"
              htmlType="submit"
              icon={<SiGooglemeet />}
              onclick={goToTeamsLink(record.address)}
            >
              Teams
            </Button>
          </Space>
        </div>
      ),
      dataIndex: "address",
    },

    {
      title: "Participants",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            onClick={showDrawer}
          >
            See Invited Participants
          </Button>
          <Drawer
            title="Participants"
            placement="top"
            onClose={onClose}
            visible={visible}
          >
            <p>Ali</p>
            <p>Mehmet</p>
          </Drawer>
        </Space>
      ),
    },

    {
      title: "Meeting Notes",
      key: "action",
      render: (_, record) => <a>Notes</a>,
    },
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const goToTeamsLink = (value) => {
    window.open(value, "mozillaWindow", "popup");
  };
  const onClose = () => {
    setVisible(false);
  };

  const onCloseSchedule = () => {
    setIsScheduleShown(false);
  };
  const showSchedule = () => {
    setIsScheduleShown(true);
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const onChange = (value) => {
    if (value == "HR Meetings") setIsHRShown(true);
    else setIsHRShown(false);
    if (value == "Unit Meetings") setIsUnitShown(true);
    else setIsUnitShown(false);
    if (value == "Group Meetings") setIsGroupShown(true);
    else setIsGroupShown(false);
    if (value == "Other Meetings") setIsOthersShown(true);
    else setIsOthersShown(false);
  };

  const onFinish = async (values) => {
    setLoading(true);

    setLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    //  WordNotification.ErrorNotification('you encountered an error');
  };

  return (
    <WordLayout>
    <div>
      <div style={{ textAlign: "center" }}>
        <Row gutter={[40, 0]}>
          <Col span={23}>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              onClick={showSchedule}
            >
              Schedule a Meeting
            </Button>{" "}
          </Col>
        </Row>
      </div>

      <div>
        <Drawer
          title="Schedule a meeting"
          placement="top"
          visible={isScheduleShown}
          onClose={onCloseSchedule}
        >
          <Form
            {...formItemLayout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <span>&nbsp;&nbsp;</span>

            <Form.Item label="Meeting Reoccurrance">
              <Radio>One Time Meeting</Radio>
              <Cascader
                style={{
                  width: "100%",
                }}
                options={options_occurrance}
                multiple
                maxTagCount="responsive"
              />
            </Form.Item>
            <Form.Item
              label="Meeting Name"
              rules={[
                {
                  required: true,
                  message: "Please input your Meeting Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Meeting Date"
              rules={[
                {
                  required: true,
                  message: "Please input your Meeting Date!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button loading={loading} type="primary" htmlType="submit">
                Submit
              </Button>{" "}
            </Form.Item>
          </Form>
        </Drawer>
      </div>

      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Form
            {...formItemLayout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <div className="site-calendar-demo-card">
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
              </div>

              <Row gutter={[40, 0]}>
                <Col span={23}>
                  <Title style={{ textAlign: "center" }} level={2}>
                    Please Select Meeting Type
                  </Title>
                </Col>
              </Row>
              <div style={{ textAlign: "center" }}>
                <Cascader
                  style={{
                    width: "100%",
                  }}
                  options={options}
                  onChange={onChange}
                  multiple
                  maxTagCount="responsive"
                />
              </div>

              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              {isHRShown && (
                <div>
                  <Table
                    rowKey="id"
                    dataSource={dataHR}
                    columns={columns}
                    expandable={{
                      expandedRowRender: (record) => (
                        <p style={{ margin: 0 }}>{record.exampleSentence}</p>
                      ),
                      rowExpandable: (record) => record.exampleSentence !== "",
                    }}
                  />
                </div>
              )}

              {isOthersShown && (
                <div>
                  <Table
                    rowKey="id"
                    columns={columns}
                    expandable={{
                      expandedRowRender: (record) => (
                        <p style={{ margin: 0 }}>{record.exampleSentence}</p>
                      ),
                      rowExpandable: (record) => record.exampleSentence !== "",
                    }}
                  />
                </div>
              )}

              {isUnitShown && (
                <div>
                  <Table
                    rowKey="id"
                    dataSource={dataUnit}
                    columns={columns}
                    expandable={{
                      expandedRowRender: (record) => (
                        <p style={{ margin: 0 }}>{record.exampleSentence}</p>
                      ),
                      rowExpandable: (record) => record.exampleSentence !== "",
                    }}
                  />
                </div>
              )}

              {isGroupShown && (
                <div>
                  <Table
                    rowKey="id"
                    columns={columns}
                    expandable={{
                      expandedRowRender: (record) => (
                        <p style={{ margin: 0 }}>{record.exampleSentence}</p>
                      ),
                      rowExpandable: (record) => record.exampleSentence !== "",
                    }}
                  />
                </div>
              )}
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
    </WordLayout>
  );
};

export default Meetings;