import React,{useRef} from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// 引入api
import {Login,CodeLogin} from '../../api/acount'
import "./index.scss";

export default function LoginForm(props) {
  console.log(props)
  const {flag,setFlag} = props;

  // ref
  const codeRef = useRef();

  // 获取验证码
  const getCode = () => {
    console.log(codeRef.current.input.value);
    CodeLogin({username:codeRef.current.input.value,module:'login'}).then(res=>{

    }).catch(err=>{

    })
  }

  // 登陆
  const onFinish = (values) => {
    console.log(process.env.NODE_ENV)
    Login().then((res)=>{

    }).catch(()=>{})
    // console.log("Received values of form: ", values);
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
        <Form.Item  name="code">
          <Row gutter={14}>
            <Col span={15}>
            <Form.Item name="code">
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="验证码"
                ref={codeRef}
            />
            </Form.Item>
            </Col>
            
            <Col span={9}>
            <Button
            type="primary"
            className="login-form-button"
            danger
            block
            onClick={getCode}
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
