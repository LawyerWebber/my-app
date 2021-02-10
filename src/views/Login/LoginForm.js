import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// 引入api
import {Login} from '../../api/acount'
import "./index.scss";

export default function LoginForm(props) {
  console.log(props)
  const {flag,setFlag} = props;
  const onFinish = (values) => {
    Login().then((res)=>{

    }).catch(()=>{})
    console.log("Received values of form: ", values);
  };

  return ( 
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item style={{marginBottom:0}}>
          <div className="goPage">
            <p>登陆页</p>
            <p onClick={()=>{setFlag(!flag)}}>去注册</p>
          </div>
          
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
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
          <Row gutter={14}>
            <Col span={15}>
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="验证码"
            />
            </Col>
            <Col span={9}>
            <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            danger
            block
          >
            获取验证码
          </Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            登陆
          </Button>
        </Form.Item>
      </Form> 
  );
}
